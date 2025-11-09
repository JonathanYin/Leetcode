const SimpleTaskManagementSystemInterface = require("./simpleTaskManagementSystemInterface");

class SimpleTaskManagementSystem extends SimpleTaskManagementSystemInterface {
	constructor() {
		super();
		this.tasks = new Map();
		this.users = new Map();

		// Many to many links are stored inside task and user objects
		// Global backup storage for Level 4
		this.backups = new Map(); // backupId -> { userId, tasks: string[] }
		this.backupSeq = 0;

		// Monotonic creation index for stable ordering
		this.createdAtSeq = 0;
	}

	// Level 1

	createTask(taskId, description) {
		if (this.tasks.has(taskId)) return false;
		this.tasks.set(taskId, {
			id: taskId,
			description,
			priority: 0,
			createdAt: this.createdAtSeq++,
			assignedUsers: new Set(),
		});
		return true;
	}

	updateTask(taskId, description) {
		const t = this.tasks.get(taskId);
		if (!t) return false;
		t.description = description;
		return true;
	}

	deleteTask(taskId) {
		const t = this.tasks.get(taskId);
		if (!t) return false;

		// Remove links from users
		for (const userId of t.assignedUsers) {
			const u = this.users.get(userId);
			if (u) u.assignedTasks.delete(taskId);
		}
		this.tasks.delete(taskId);
		return true;
	}

	// Tests expect the description string or null
	getTask(taskId) {
		const t = this.tasks.get(taskId);
		return t ? t.description : null;
	}

	// Level 2

	setTaskPriority(taskId, priority) {
		const t = this.tasks.get(taskId);
		if (!t) return false;
		// Coerce to integer with floor and ensure non negative
		const p = Number.isFinite(priority) ? Math.floor(priority) : 0;
		t.priority = p >= 0 ? p : 0;
		return true;
	}

	// Returns array of task ids sorted by priority desc then by creation order asc
	listTasksSorted() {
		const arr = Array.from(this.tasks.values());
		arr.sort((a, b) => {
			if (b.priority !== a.priority) return b.priority - a.priority;
			return a.createdAt - b.createdAt;
		});
		return arr.map((t) => t.id);
	}

	// Level 3

	addUser(userId, quota) {
		if (this.users.has(userId)) return false;
		const q = Number.isFinite(quota) && quota >= 0 ? Math.floor(quota) : 0;
		this.users.set(userId, { id: userId, quota: q, assignedTasks: new Set() });
		return true;
	}

	assignTaskToUser(taskId, userId) {
		const t = this.tasks.get(taskId);
		const u = this.users.get(userId);
		if (!t || !u) return false;
		if (t.assignedUsers.has(userId)) return false;
		if (u.assignedTasks.size >= u.quota) return false;

		t.assignedUsers.add(userId);
		u.assignedTasks.add(taskId);
		return true;
	}

	unassignTaskFromUser(taskId, userId) {
		const t = this.tasks.get(taskId);
		const u = this.users.get(userId);
		if (!t || !u) return false;
		if (!t.assignedUsers.has(userId)) return false;

		t.assignedUsers.delete(userId);
		u.assignedTasks.delete(taskId);
		return true;
	}

	// Level 4

	// Capture a snapshot of all current assignments for the user
	// Return backup id like backup_1 or null if user does not exist
	backupUserTasks(userId) {
		const u = this.users.get(userId);
		if (!u) return null;

		// Keep only tasks that still exist and are assigned to the user
		const existingAssigned = [];
		for (const taskId of u.assignedTasks) {
			if (this.tasks.has(taskId)) existingAssigned.push(taskId);
		}

		// Deterministic order by task creation time
		existingAssigned.sort((a, b) => {
			const ta = this.tasks.get(a);
			const tb = this.tasks.get(b);
			return ta.createdAt - tb.createdAt;
		});

		const backupId = `backup_${++this.backupSeq}`;
		this.backups.set(backupId, { userId, tasks: existingAssigned });
		return backupId;
	}

	// Restore assignments from a backup
	// Returns true on success and false on any failure
	restoreUserTasks(userId, backupId) {
		const u = this.users.get(userId);
		if (!u) return false;

		const snapshot = this.backups.get(backupId);
		if (!snapshot) return false;

		// A user cannot restore another users backup
		if (snapshot.userId !== userId) return false;

		// Filter to tasks that still exist
		const candidate = snapshot.tasks.filter((tid) => this.tasks.has(tid));

		// Enforce user quota atomically
		if (candidate.length > u.quota) return false;

		// Apply restore
		// 1 remove all current links for this user
		for (const taskId of Array.from(u.assignedTasks)) {
			const t = this.tasks.get(taskId);
			if (t) t.assignedUsers.delete(userId);
			u.assignedTasks.delete(taskId);
		}

		// 2 add links from candidate list in snapshot order
		for (const taskId of candidate) {
			const t = this.tasks.get(taskId);
			if (!t) continue;
			t.assignedUsers.add(userId);
			u.assignedTasks.add(taskId);
		}

		return true;
	}
}

module.exports = SimpleTaskManagementSystem;
