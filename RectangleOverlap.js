/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [ax1, ay1, ax2, ay2] = rec1;
    let [bx1, by1, bx2, by2] = rec2;
    /*
     * There are four conditions for two rectangles to overlap:
     * 1. The first rectangle's left edge is to the right of the second rectangle's right edge.
     * 2. The first rectangle's right edge is to the left of the second rectangle's left edge.
     * 3. The first rectangle's top edge is below the second rectangle's bottom edge.
     * 4. The first rectangle's bottom edge is above the second rectangle's top edge.
    */
    return (ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1);
};