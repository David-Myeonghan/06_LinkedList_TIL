class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null,
			previous: null,
		};
		newNode.previous = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	prepend(value) {
		const newNode = {
			value: value,
			next: null,
			previous: null,
		};
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
		this.length++;
		return this;
	} // O(1)

	// Helper method.
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return console.log(array);
	} // O(n)

	// ------------------------  My answer .insert(): working properly, but not readable.
	// insert(index, value) {
	// 	const newNode = {
	// 		value: value,
	// 		next: null,
	// 	};
	// 	let currentNode = this.head;
	// 	let pre;
	// 	for (let i = 0; i < index + 1; i++) {
	// 		if (i === index) {
	// 			newNode.next = currentNode;
	// 			pre.next = newNode;
	// 			this.length++;
	// 			return this;
	// 		}
	// 		if (i === index - 1) {
	// 			pre = currentNode;
	// 		}
	// 		currentNode = currentNode.next;
	// 	}
	// } // O(n)

	// ------------------------  Solution .insert(): more readable.
	insert(index, value) {
		// check params
		if (index >= this.length) {
			return this.append(value); // or, throw an error.
		}
		if (index === 0) {
			return this.prepend(value);
		}

		const newNode = {
			value: value,
			next: null,
			previous: null,
		};
		const leader = this.traverseToIndex(index - 1); // the previous node of the index.
		const follower = leader.next;
		leader.next = newNode;
		newNode.previous = leader;
		newNode.next = follower;
		follower.previous = newNode;
		this.length++;

		return this.printList();
	} // O(n)

	traverseToIndex(index) {
		//check params
		//...
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	} // O(n)

	/// code from here.
	remove(index) {
		// Check Params
		// if tail
		if (index >= this.length) {
			let leader = this.head;
			let unwanted = leader.next;

			while (unwanted.next !== null) {
				leader = leader.next;
				unwanted = unwanted.next;
			}
			leader.next = null;
			this.tail = leader;
			this.length--;
			return this.printList();
		}

		// if head
		if (index === 0) {
			// const temp = this.head;
			this.head = this.head.next;
			this.length--;
			return this.printList();
		}

		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next; // my answer: const latter = this.traverseToIndex(index + 1); //or, leader.next.next;
		leader.next = unwantedNode.next; // leader.next = latter;
		this.length--;

		return this.printList();
	}
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(1, 99);
console.log(myDoublyLinkedList);
// myDoublyLinkedList.printList();
