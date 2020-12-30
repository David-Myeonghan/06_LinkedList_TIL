// 1 --> 10 --> 99 --> 5 --> 16

// let myLinkedList = {  // should be like this.
// 	// node is a container of data
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null,
// 			},
// 		},
// 	},
// };

// Create a head and a tail.
class LinkedList {
	constructor(value) {
		// create a head.
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head; // tail = head as one item exist.
		this.length = 1; // optional but good to track of.
	}
	// ------------------------  My answer .append()
	// append(value) {
	// 	this.head.next = value;
	// 	this.tail = {
	// 		value: value,
	// 		next: null,
	// 	};
	// 	this.length += 1;
	// }

	append(value) {
		const newNode = {
			value: value,
			next: null,
		};
		// const newNode = new Node(value); // instead of newNode you can create newNode using another class.
		this.tail.next = newNode; // ?? Why should we set tail.next, not just only set this.tail = newNode ??
		this.tail = newNode;
		this.length++;

		// console.log(this.tail);
		return this;
	} // O(1)

	// ------------------------  My answer .prepend()
	// prepend(value) {
	// 	const newNode = {
	// 		value: value,
	// 		next: this.head,
	// 	};
	// 	this.head = newNode;
	// 	this.length++;
	// }

	prepend(value) {
		const newNode = {
			value: value,
			next: null,
		};
		newNode.next = this.head;
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
		};
		const leader = this.traverseToIndex(index - 1); // the previous node of the index.
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
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

	remove(index) {
		// Check Params // needs to refactoring
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

// This is usually how OOP works, creating an instance relating to other class instance.
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// console.log(myLinkedList);
myLinkedList.append(16);
// console.log(myLinkedList);
myLinkedList.prepend(1);
// console.log(myLinkedList);
myLinkedList.insert(2, 99);
// console.log(myLinkedList);
// myLinkedList.remove(2);
myLinkedList.remove(4);
console.log(myLinkedList);
// console.log(myLinkedList);
// myLinkedList.printList();
