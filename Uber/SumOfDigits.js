function solution(a, b) {
	let result = "";
	let i = a.length - 1;
	let j = b.length - 1;

	while (i >= 0 || j >= 0) {
		let sum = 0;
		if (i >= 0) sum += parseInt(a[i]);
		if (j >= 0) sum += parseInt(b[j]);
		result = sum.toString() + result;
		i--;
		j--;
	}

	return result;
}
