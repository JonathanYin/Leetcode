class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next= null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(key, value) {
        // if the list is empty, set the head to be the new node
        if (!this.head) {
            this.head = new Node(key, value);
            this.tail = this.head;
        }
        // else, add the new node to the end of the list and set the tail to be the new node
        else {
            this.tail.next = new Node(key, value);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.length++;
        return this.tail;
    }

    remove(node) {
        // if the node to remove is the head, set the head to be the next node in the list
        if (node === this.head) {
            this.head = this.head.next;
        }
        // if the node to remove is the tail, set the tail to be the previous node in the list
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        // if the node to remove is in the middle of the list, set the next and prev nodes of the nodes adjacent to the node to remove to be each other
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        this.length--;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = {};
        this.list = new DoublyLinkedList();
    }

    /** 
      * @param {number} key
      * @return {number}
      */
    get(key) {
        // if the key is not in the map, return -1
        if (!this.map[key]) {
            return -1;
        }
        // else, get the node from the map and move it to the end of the list
        else {
            let node = this.map[key];
            this.list.remove(node);
            this.map[key] = this.list.push(node.key, node.value);
            return node.value;
        }
    }

    /** 
      * @param {number} key 
      * @param {number} value
      * @return {void}
      */
    put(key, value) {
        // if the key is already in the map, remove the node from the list and map
        if (this.map[key]) {
            let node = this.map[key];
            this.list.remove(node);
            delete this.map[key];
        }
        // if the list is at capacity, remove the head of the list and remove the head from the map
        if (this.list.length === this.capacity) {
            let node = this.list.head;
            this.list.remove(node);
            delete this.map[node.key];
        }
        // add the new node to the end of the list and add the new node to the map
        this.map[key] = this.list.push(key, value);
    }
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */