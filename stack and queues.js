class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class stack{
    constructor(){
        this.first = null
        this.size = 0
    }
    push(data){
        const newNode = new Node(data)
        newNode.next = this.first
        this.first = newNode
        this.size++
    }
    pop(){
      const popNode = this.first
      this.first = this.first.next
      popNode.next = null
      return popNode.data    
    }
    print(){
        let current = this.first
        while(current){ 
        console.log(current.data);
        current = current.next
        }
    }
}

let list = new stack()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.pop()
list.print()


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class queues{
    constructor(){
        this.first = null
        this.last = null
        }
    enqueue(data){
        const newNode = new Node(data)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next =newNode
            this.last = newNode
        }
    }
    dequeue(){
        const temp = this.first
        this.first = this.first.next
        temp.next = null
        return temp.data
    }
    print(){
        let current = this.first
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}
const list = new queues()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.dequeue()

list.print()

stack using quee

class Stack{
    constructor(){
        this.top = []
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    add(val){
        this.top.push(val);
        this.size++
    }

    remove(){
        let val =this.top.pop();
        this.size--;
        return val
    }

}

class TwoStack{
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(val){
        this.stack1.add(val)
    }

    dequeue(){
        if(this.stack1.isEmpty() && this.stack2.isEmpty()){
            return "empty queue"
        }
        while(!this.stack1.isEmpty()){
            let val = this.stack1.remove();
            this.stack2.add(val)
        }
        return this.stack2.remove()
    }
}

let table = new TwoStack()

table.enqueue(100)
table.enqueue(200)
table.enqueue(300)
table.enqueue(400)
table.dequeue()
table.dequeue()

console.log(table);