/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  /*
   * Ants colliding is the same as them passing through each other.
   * Last moment is determined by the last ant to fall off the rod.
   * Ants moving to right take n - right[i] time to fall off.
   * Ants moving to left take left[i] time to fall off.
   */
  const maxLeft = Math.max(...left);
  const minRight = Math.min(...right);

  return Math.max(n - minRight, maxLeft);
};
