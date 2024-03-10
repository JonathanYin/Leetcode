function calculateMaximumDisagreement(gNodes, gFrom, gTo) {
	// Create an adjacency list to represent the graph
	const graph = new Array(gNodes + 1).fill(null).map(() => []);
	for (let i = 0; i < gFrom.length; i++) {
		graph[gFrom[i]].push(gTo[i]);
		graph[gTo[i]].push(gFrom[i]);
	}

	// Create a visited array to keep track of visited nodes
	const visited = new Array(gNodes + 1).fill(false);

	let maxDifference = 0;

	// Perform DFS on each unvisited node
	for (let i = 1; i <= gNodes; i++) {
		if (!visited[i]) {
			let min = Infinity;
			let max = -Infinity;

			// Iterative DFS using a stack
			const stack = [i];
			while (stack.length > 0) {
				const node = stack.pop();
				visited[node] = true;
				min = Math.min(min, node);
				max = Math.max(max, node);

				for (const neighbor of graph[node]) {
					if (!visited[neighbor]) {
						stack.push(neighbor);
					}
				}
			}

			maxDifference = Math.max(maxDifference, max - min);
		}
	}

	return maxDifference;
}
