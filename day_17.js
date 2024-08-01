// DAY 17: DATA STRUCTURES

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, 
        // remove a node from the end, and display all nodes.
// google
class LinkedList {
    constructor(){
        this.head = null
    }
    add (value){
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }
    remove (){
        if (!this.head)
            return null
        if (!this.head.next){
            const removedNode = this.head
            this.head = null
            return removedNode.value
        }
        let current = this.head
        while(current.next && current.next.head){
            current = current.next
        }
        const removedNode = current.next
        current.next = null
        return removedNode.value
    }
    display(){
        let current = this.head
        const values = []
        while (current){
            values.push(current.value)
            current = current.next
        }
        console.log(values.join (' -> '));
    }
}

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element)
class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
}

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off
// google help
function reverseString(str){
    const stack  = new Stack()
    for (let char of str){
        stack.push(char)
    }
    let reversed = ''
    while (stack.items.length > 0){
        reversed += stack.pop()
    }
    return reversed
}
console.log(reverseString('string'));

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element)
class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
}

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function printQueue (job){
    const queue = new Queue()
    job.forEach(job => queue.enqueue(job))

    while (queue.items.length > 0){
        const job = queue.dequeue()
        console.log(`Printing ${job}`);
    }
}
printQueue(['doc1','doc2','doc3'])

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null; 
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode; // If tree is empty, set root
        } else {
            this.insertNode(this.root, newNode); // Insert recursively
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode; // Insert to the left
            } else {
                this.insertNode(node.left, newNode); // Recur left
            }
        } else {
            if (!node.right) {
                node.right = newNode; // Insert to the right
            } else {
                this.insertNode(node.right, newNode); // Recur right
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left); // Traverse left
            console.log(node.value); // Visit node
            this.inOrderTraversal(node.right); // Traverse right
        }
    }
}

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS)
// google
class Graph {
    constructor() {
        this.adjacencyList = {}; // Adjacency list to hold graph
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []; // Initialize adjacency list for vertex
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2); // Add edge from v1 to v2
        this.adjacencyList[v2].push(v1); // Add edge from v2 to v1 (undirected graph)
    }

    bfs(start) {
        const queue = new Queue();
        const visited = {};
        queue.enqueue(start);
        visited[start] = true;

        while (queue.items.length > 0) {
            const vertex = queue.dequeue();
            console.log(vertex); // Process the vertex

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true; // Mark as visited
                    queue.enqueue(neighbor); // Enqueue the neighbor
                }
            });
        }
    }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

console.log("BFS starting from vertex A:");
graph.bfs("A");
