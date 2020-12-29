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
