// 10 --> 5 --> 16

// let myLinkedList = {
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
	append(value) {}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList);
