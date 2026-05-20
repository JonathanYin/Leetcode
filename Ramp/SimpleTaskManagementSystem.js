const SimpleTaskManagementSystemInterface = require("./simpleTaskManagementSystemInterface");

class SimpleTaskManagementSystem extends SimpleTaskManagementSystemInterface {
	constructor() {
		super();
		this.tasks = new Map();
		this.nextId = 1;
		this.users = new Map();
		this.assignments = [];
	}

	addTask(timestamp, name, priority) {
		const taskId = `task_id_${this.nextId++}`;
		this.tasks.set(taskId, { name, priority });
		return taskId;
	}

	updateTask(timestamp, taskId, name, priority) {
		if (!this.tasks.has(taskId)) {
			return false;
		}
		this.tasks.set(taskId, { name, priority });
		return true;
	}

	getTask(timestamp, taskId) {
		const task = this.tasks.get(taskId);
		if (!task) {
			return null;
		}
		return `{"name":${JSON.stringify(task.name)},"priority":${task.priority}}`;
	}

	_sortIds(ids) {
		return ids.sort((a, b) => {
			const ta = this.tasks.get(a);
			const tb = this.tasks.get(b);
			if (tb.priority !== ta.priority) {
				return tb.priority - ta.priority;
			}
			return Number(a.slice(8)) - Number(b.slice(8));
		});
	}

	searchTasks(timestamp, nameFilter, maxResults) {
		if (maxResults <= 0) {
			return [];
		}
		const matches = [];
		for (const [taskId, task] of this.tasks) {
			if (task.name.includes(nameFilter)) {
				matches.push(taskId);
			}
		}
		this._sortIds(matches);
		return matches.slice(0, maxResults);
	}

	listTasksSorted(timestamp, limit) {
		if (limit <= 0) {
			return [];
		}
		const ids = Array.from(this.tasks.keys());
		this._sortIds(ids);
		return ids.slice(0, limit);
	}

	addUser(timestamp, userId, quota) {
		if (this.users.has(userId)) {
			return false;
		}
		this.users.set(userId, { quota });
		return true;
	}

	_isActive(assignment, timestamp) {
		return !assignment.completed && assignment.startTime <= timestamp && timestamp < assignment.finishTime;
	}

	_activeForUser(userId, timestamp) {
		return this.assignments.filter((a) => a.userId === userId && this._isActive(a, timestamp));
	}

	assignTask(timestamp, taskId, userId, finishTime) {
		if (!this.tasks.has(taskId) || !this.users.has(userId)) {
			return false;
		}
		const user = this.users.get(userId);
		const active = this._activeForUser(userId, timestamp);
		if (active.length >= user.quota) {
			return false;
		}
		this.assignments.push({ taskId, userId, startTime: timestamp, finishTime });
		return true;
	}

	getUserTasks(timestamp, userId) {
		const active = this._activeForUser(userId, timestamp);
		active.sort((a, b) => {
			if (a.finishTime !== b.finishTime) {
				return a.finishTime - b.finishTime;
			}
			return a.startTime - b.startTime;
		});
		return active.map((a) => a.taskId);
	}

	completeTask(timestamp, taskId, userId) {
		if (!this.tasks.has(taskId) || !this.users.has(userId)) {
			return false;
		}
		const candidates = this.assignments.filter((a) => a.taskId === taskId && a.userId === userId && this._isActive(a, timestamp));
		if (candidates.length === 0) {
			return false;
		}
		candidates.sort((a, b) => a.startTime - b.startTime);
		candidates[0].completed = true;
		return true;
	}

	getOverdueAssignments(timestamp, userId) {
		if (!this.users.has(userId)) {
			return [];
		}
		const overdue = this.assignments.filter((a) => a.userId === userId && a.finishTime <= timestamp && !a.completed);
		overdue.sort((a, b) => {
			if (a.finishTime !== b.finishTime) {
				return a.finishTime - b.finishTime;
			}
			return a.startTime - b.startTime;
		});
		return overdue.map((a) => a.taskId);
	}
}

module.exports = SimpleTaskManagementSystem;
