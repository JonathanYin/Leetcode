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
var levelOrder = function(root) {
    // store results of traversal in an array
    let res = [];

    if (!root) {
        return res;
    }

    // create a helper function to perform a depth-first search on the tree
    let dfs = function(node, level) {
        if (!node) {
            return;
        }
        // if the length of the results array is equal to the current level, we need a new array to explore the next level
        if (res.length === level) {
            res.push([]);
        }
        // push the current node's value into the results array at the current level
        res[level].push(node.val);
        // explore the left and right children of the current node
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return res;
};