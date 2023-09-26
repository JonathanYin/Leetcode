/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    // loop through each element in the grid, and call dfs on each element to find all adjacent 1's
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // if the current element is 1, increment count and call dfs
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

// dfs helper function to find neighbors, and set them to 0
function dfs(grid, i, j) {
    // if the current element is out of bounds or is 0, return
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
        return;
    }

    // set the current element to 0
    grid[i][j] = '0';

    // call dfs on the four adjacent elements
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
}