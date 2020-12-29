let obj1 = { a: true };
let obj2 = obj1; // creating a pointer. just a reference.
obj1["a"] = "boo";
delete obj1; // even though it is deleted, obj2 is still pointting it.
// console.log("1", obj1);
console.log("2", obj2);
// obj1, and obj2 are both pointing a same memory.
// JS is garbage collected, when nothing's pointed, it is deleted.
