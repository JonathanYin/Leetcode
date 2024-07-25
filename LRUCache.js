// node class with pointers to prev and next nodes
class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

// doubly linked list ds with pointers to head and tail of list
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(key, value) {
		// if the list is currently empty
		if (!this.head) {
			this.head = new Node(key, value);
			this.tail = this.head;
		} else {
			// set the current tail's next ptr to the new element
			this.tail.next = new Node(key, value);

			// set the new element's prev ptr to the current tail
			this.tail.next.prev = this.tail;

			// set the new tail to the new element
			this.tail = this.tail.next;
		}
		this.length++;
		return this.tail;
	}

	remove(node) {
		// if the node to remove is the current head
		if (node === this.head) {
			this.head = this.head.next;
		}
		// if the node to remove is the current tail
		if (node === this.tail) {
			this.tail = this.tail.prev;
		}
		if (node.prev) {
			node.prev.next = node.next;
		}
		if (node.next) {
			node.next.prev = node.prev;
		}

		this.length--;
	}
}

// LRU cache ds
// tail of list represents most recently accessed element
class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		// map is used for O(1) access time
		this.map = new Map();
		this.list = new DoublyLinkedList();
	}

	get(key) {
		// if this element is not in the cache, return -1
		if (!this.map.has(key)) {
			return -1;
		}

		let node = this.map.get(key);

		// remove the old element
		this.list.remove(node);

		// push it back into the doubly linked list, and set the map value again
		this.map.set(key, this.list.push(node.key, node.value));

		return node.value;
	}

	put(key, value) {
		// if this element already exists in the cache
		if (this.map.has(key)) {
			// remove the old element
			let n = this.map.get(key);
			this.list.remove(n);
			this.map.delete(key);
		}

		// if we are at full capacity already
		if (this.capacity === this.list.length) {
			// remove the least recently accessed element
			let n = this.list.head;
			this.list.remove(n);
			this.map.delete(n.key);
		}

		// add the new node to the end of the doubly linked list, and to the map
		this.map.set(key, this.list.push(key, value));
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
