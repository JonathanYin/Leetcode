function solution(numbers, pivot) {
	return numbers.map((num) => {
		if (num === 0) return 0;
		if ((num > 0 && pivot > 0) || (num < 0 && pivot < 0)) return 1;
		return -1;
	});
}
