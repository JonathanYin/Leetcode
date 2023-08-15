from collections import deque


def getResult(arrival, direction):
    n = len(arrival)
    ascending_queue = deque()
    descending_queue = deque()
    result = [0] * n
    current_time = 0
    last_direction = -1

    for hiker in range(n):
        # Wait for the current hiker's arrival time
        current_time = max(current_time, arrival[hiker])

        # Check if any descending hiker can pass through the narrow portion
        if last_direction == -1 or last_direction == 1 or not ascending_queue:
            if descending_queue and (arrival[descending_queue[0]] <= current_time):
                hiker_to_pass = descending_queue.popleft()
                last_direction = 1
            else:
                hiker_to_pass = hiker
                last_direction = direction[hiker]
        # Check if any ascending hiker can pass through the narrow portion
        else:
            if ascending_queue and (arrival[ascending_queue[0]] <= current_time):
                hiker_to_pass = ascending_queue.popleft()
                last_direction = 0
            else:
                hiker_to_pass = hiker
                last_direction = direction[hiker]

        # Record the time for the hiker that passed
        result[hiker_to_pass] = current_time

        # Add current hiker to the queue if they didn't pass
        if hiker_to_pass != hiker:
            if direction[hiker] == 0:
                ascending_queue.append(hiker)
            else:
                descending_queue.append(hiker)

    return result
