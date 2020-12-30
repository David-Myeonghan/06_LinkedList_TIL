## Intro

    - SINGLY LINKED LIST
    - DOUBLY LINKED LIST

- Problem in Array

  - Static certain amount of memory
  - Dynamic once it hits a certain limit in memory, it doubles up
  - Insert, Delete that have to shift indexes over.

- Problem in Hash Table
  - Not ordered.

# LINKED LIST

    - (Singly) Contains a set of node:
        - 1. the value of the data, and
        - 2. the pointer that points to the next node
    - The first node is called Head.
    - The last node is called Tail. (, or after head.)
    - Null terminated. A Tail node points to null.
    const basket = ["apples", "grapes", "pears"];

    // linked list: apples --> grapes --> pears

    //apples
    //8947  --> grapes
    //          8742    --> pears
    //                       983 -->    null

## Why Linked List?

    - Refer to "https://visualgo.net/en/list"
    - Loose structure: Insert and Delete anything anywhere by simply resetting a few pointers.
    - in Array, we had to shift all indexes.
    - in Array, elements are indexed, and can go index easily.
    - in Linked List, start at the head and traverse the list until you get to the item, as same as array, but it's traversal cuz you don't really know when the linked list will end.
    - so using WHILE loop, we will implement Linked List.
    - Another advantage of Array is that computer have caching system that make reading sequential memory, faster than scattered addresses.
    - Linked List is scattered all over memory like Hash tables.
    - So, iterating through it is slower than doing array, even though they're all O(n).
    - However, Inserting in the middle of a linked list, like an hash table, is a lot better than an array.
    - One advantage that it has over hash tables is that there is order to linked list. Each node points to the next node. Sorted Data.
    - Linked list only has reference to its head and tail.
    - Prepend:  O(1) (add to the beginning of a linked list)
    - Append:   O(1) (Add to the end)
    - Lookup:   O(n) (,or traversal)
    - Insert:   O(n)
    - Delete:   O(n)
    - How does it better when O(n)?

    ## I THINK, Head in Linked List is mandatory element but, Tail is not.

# Doubly Linked List

    - extra piece of data that also links to the previous node.
    - Double linked lists allow us to traverse our list backwards.

    - Prepend:  O(1) (add to the beginning of a linked list)
    - Append:   O(1) (Add to the end)
    - Lookup:   O(n) (,or traversal)  *O(n/2) as this can go backwards. Faster than Singly Linked List.
    - Insert:   O(n)
    - Delete:   O(n)

    - Downside: might have to hold additional memory.

    ** Circular Dependencies occurred when executing Doubly Linked List **
    ** "https://stackoverflow.com/questions/6010173/in-nodejs-when-i-console-log-a-req-object-what-does-circular-reference-how" **

    ** If you want to free the contents of a variable, you can set it to null.
    ** "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Delete_in_strict_mode" **

## When to use?

    # Singly Linked List
        - Pros: fairly Simple Implementaion especially compared to the doubly one.
                Less memory, Less opertaion, little bit faster
        - Cons: Cannot be iterate/reverse/traverse from back to front. If we lose the reference to the head node, the list can actually be lost in memory forever.
        - Useful when less memory, expensive memory. If you want fast insert/deletion, and not need mush searching.

    # Doubly Linked List
        -Pros:  Can be iterate through from the back to the beginning.
                No need to traverse from the head to fine what the previous node when deleting a node.
        - Cons: Complex to implement, requires more memory/storage. Extra operation to edit previous nodes.
        -Useful when you don't have much limitation on memory, Good operation for searching for elements.

### no random access unlike array

    - Good: Fast Insertion, Fast Deletion, Ordered, Flexible Size
    - Bad: Slow Lookup, More Memory.
