class PackageManager {
	constructor(packages) {
		this.packages = packages; // {pkg: [dependencies]}
		this.installed = new Set();
		this.refCount = {}; // {pkg: number of active dependents}
	}

	install(pkg) {
		// Already installed, just increment refCount
		if (this.installed.has(pkg)) {
			this.refCount[pkg] += 1;
			return;
		}

		// If this package doesn't exist in the repo, do nothing
		if (!(pkg in this.packages)) return;

		// Install dependencies first
		for (const dep of this.packages[pkg]) {
			this.install(dep);
		}

		// Install this package
		this.installed.add(pkg);
		this.refCount[pkg] = (this.refCount[pkg] || 0) + 1;
		// Uncomment to see install order:
		// console.log(`Installed: ${pkg}`);
	}

	uninstall(pkg) {
		// Not installed, do nothing
		if (!this.installed.has(pkg)) return;

		// Only decrement reference count, uninstall if hits 0
		this.refCount[pkg] -= 1;
		if (this.refCount[pkg] > 0) return;

		// Remove package
		this.installed.delete(pkg);
		// Uncomment to see uninstall order:
		// console.log(`Uninstalled: ${pkg}`);

		// Uninstall dependencies if not needed anymore
		for (const dep of this.packages[pkg]) {
			this.uninstall(dep);
		}
	}
}

// Example usage:
const pkgs = {
	alpha: ["bravo", "charlie"],
	bravo: ["delta"],
	charlie: [],
	delta: [],
	echo: ["bravo"],
	foxtrot: [],
};

const pm = new PackageManager(pkgs); // initialize with package definitions

pm.install("alpha"); // installs alpha, bravo, charlie, delta
pm.install("echo"); // installs echo (bravo already installed, increases refcount)
pm.uninstall("alpha"); // should uninstall alpha, charlie, delta — bravo stays because echo depends on it

console.log("Installed packages:", Array.from(pm.installed)); // Should show: ['bravo', 'echo', 'foxtrot'] if you also install foxtrot
