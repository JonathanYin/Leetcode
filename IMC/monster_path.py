from collections import deque


def findBestPath(n, m, startRow, startColumn, endRow, endColumn, monsterRow, monsterColumn):
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    min_distance_grid = [[float('inf') for _ in range(m)] for _ in range(n)]
    for i in range(len(monsterRow)):
        r, c = monsterRow[i], monsterColumn[i]
        queue = deque([(r, c, 0)])
        while queue:
            x, y, dist = queue.popleft()
            if min_distance_grid[x][y] <= dist:
                continue
            min_distance_grid[x][y] = dist
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                if 0 <= nx < n and 0 <= ny < m and min_distance_grid[nx][ny] > dist + 1:
                    queue.append((nx, ny, dist + 1))

    queue = deque(
        [(startRow, startColumn, min_distance_grid[startRow][startColumn])])
    visited = set([(startRow, startColumn)])
    while queue:
        r, c, curr_min_dist = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < m and (nr, nc) not in visited:
                next_min_dist = min(curr_min_dist, min_distance_grid[nr][nc])
                if (nr, nc) == (endRow, endColumn):
                    return next_min_dist
                visited.add((nr, nc))
                queue.append((nr, nc, next_min_dist))
    return -1
