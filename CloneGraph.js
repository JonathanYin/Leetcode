/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // hashmap to store the original node as the key and the cloned node as the value
    let hashmap = new Map();

    return traverse(node);
    
    function traverse (node) {
        if (!node) {
            // if the node is null, return null
            return null;
        }
        if (hashmap.has(node)) {
            // if the hashmap already has the node, return the cloned node
            return hashmap.get(node);
        }
        else {
            // else, create a new node and add it to the hashmap, then traverse through the neighbors
            hashmap.set(node, new Node(node.val));
            let newNode = hashmap.get(node);
            for (let neighbor of node.neighbors) {
                newNode.neighbors.push(traverse(neighbor));
            }
            return newNode;
        }
    }
};