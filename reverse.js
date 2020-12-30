// Reverse the given linked list
// Not just printing an array, genuine linked list pointing the next node.
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

	// reverse() {
	// 	let previous = null;
	// 	let next = null;
	// 	let current = this.head;
	// 	while (current !== null) {
	// 		next = current.next;
	// 		current.next = previous;
	// 		previous = current;
	// 		current = next;
	// 	}

	// 	return console.log(previous);
	// }

	// Refer to the best explanation here "https://www.youtube.com/watch?v=GkCnbndXBUs&ab_channel=%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EC%A4%84%EB%A6%AC%EC%96%B4%EC%8A%A4"
	// Solution
	// reverse() {
	// 	// If null, length = 1,
	// 	if (!this.head.next) {
	// 		return this.head;
	// 	}

	// 	let first = this.head;
	// 	this.tail = this.head;
	// 	let second = first.next;

	// 	while (second) {
	// 		const temp = second.next; // third item
	// 		second.next = first;
	// 		first = second;
	// 		second = temp;
	// 	}
	// 	this.head.next = null;
	// 	this.head = first;
	// 	return this;
	// }

	// my modification based on the youtube above.
	reverse() {
		//...
		let one = null;
		let two = this.head;
		this.tail = this.head;
		while (two !== null) {
			let three = two.next;
			two.next = one;
			one = two;
			two = three;
		}
		this.head = one;

		return one;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.reverse();
myLinkedList.printList();
console.log(myLinkedList);
