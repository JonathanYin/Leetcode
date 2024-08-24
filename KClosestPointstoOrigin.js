/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
	points.sort((a, b) => {
		return a[0] ** 2 + a[1] ** 2 - b[0] ** 2 - b[1] ** 2;
	});
	return points.slice(0, K);
};
