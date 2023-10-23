/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/**
 * Given a binary tree, return the vertical order traversal of its nodes' values. (i.e, from top to bottom, column by column).
 */
var verticalTraversal = function(root) {
    if (!root) return [];

    // store result
    let res = [];
    // map stores column number as key and array of node values as value
    let map = new Map();
    // queue stores node and column number
    let queue = [[root, 0]];

    // loop while there are nodes to traverse
    while (queue.length) {
        // dequeue element
        let [node, col] = queue.shift();
        // if column number is not in map, initialize it with empty array
        if (!map.has(col)) map.set(col, []);
        // push node value to array
        map.get(col).push(node.val);

        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }

    // sort keys in ascending order
    let sortedKeys = [...map.keys()].sort((a, b) => a - b);

    // push values to result array in sorted order
    for (let key of sortedKeys) {
        res.push(map.get(key));
    }

    return res;
};