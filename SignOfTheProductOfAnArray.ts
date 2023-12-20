function arraySign(nums: number[]): number {
	let isPositive = true;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 0) {
			return 0;
		} else if (nums[i] < 0) {
			isPositive = !isPositive;
		}
	}
	return isPositive ? 1 : -1;
}
