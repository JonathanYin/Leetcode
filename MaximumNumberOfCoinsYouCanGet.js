/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
	let ans = 0;
	// sort the array in descending order
	piles.sort((a, b) => b - a);
	// pick the second largest element from every 3 elements, so exclude the last 1/3 of the array
	let len = piles.length / 3;
	// start from the second element since the first element is the largest, increment by 2
	for (let i = 1; i < piles.length - len; i += 2) {
		ans += piles[i];
	}
	return ans;
};
