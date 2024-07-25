const fibonacci = function (n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	let a = 0;
	let b = 1;

	let i = 2;

	while (i <= n) {
		let temp = a + b;
		a = b;
		b = temp;
		i++;
	}

	return b;
};

console.log(fibonacci(9)); // 34
