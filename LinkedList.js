class Node {
    constructor(value = null, nextNode =  null){
        this.value = value; 
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null; 
    }


    append(value) {
        const newNode = new Node(value);
        if (!this.headNode){
            this.headNode = newNode;
            return;
        }
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    
    size() {
        let count = 0;
        let current =  this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }
    
    head() {
        return this.headNode;
    }

    tail() {
        let current = this.headNode;
        if (!current) return null; 
        while(current.nextNode) {
            current = current.nextNode;
        }
        return current; 
    }
    

    at(index) {
        if (index < 0 ) return null;
        let current = this.headNode;
        let i = 0;
        while (current) {
            if (i === index) return current;
            current =  current.nextNode;
            i++;
        }
        return null;
    }

    pop() {
        if (!this.headNode) return;
        if (!this.headNode.nextNode) {
            this.headNode = null;
            return;
        }
        let current = this.headNode;
        while (current.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;

    }

    find(value) {
        let index = 0;
        let current = this.headNode;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;

        }
        return null;
    }

    toString() {
        let str = "";
        let current = this.headNode;
        while (current) {
            str += `( ${current.value}) -> `;
            current = current.nextNode;
        }
        return str + "null";
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const prev = this.at(index - 1);
        if (!prev) return;

        const newNode = new Node(value, prev.nextNode);
        prev.nextNode = newNode;
    }

    removeAt(index) {
        if (index === 0 && this.headNode) {
            this.headNode = this.headNode.nextNode;
            return;
        }
        const prev = this.at(index - 1);
        if (!prev || !prev.nextNode) return;

        prev.nextNode = prev.nextNode.nextNode;
    }
}

export { LinkedList };
