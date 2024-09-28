function solution(numbers) {
	let evenSum = 0;
	let oddSum = 0;

	for (let i = 0; i < numbers.length; i++) {
		if (i % 2 === 0) {
			evenSum += numbers[i];
		} else {
			oddSum += numbers[i];
		}
	}

	if (evenSum > oddSum) {
		return "even";
	} else if (oddSum > evenSum) {
		return "odd";
	} else {
		return "equal";
	}
}
