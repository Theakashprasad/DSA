class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}


class doubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    push(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    pop(){
     const popNode = this.tail
     this.tail = popNode.prev
     this.tail.next = null
     popNode.prev = null
    }

    shift(){
       let shiftNode = this.head.next
       this.head = shiftNode
       this.head.prev = null
       shiftNode = null
    }

    unShift(data){
       const newNode = new Node(data)
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      }else{
       this.head.prev = newNode
       newNode.next =this.head
       this.head = newNode
      }
    }
    
    set(data,index){
      const size = this.size()
      let newNode = new Node()
      if(index<=size/2){
          var current = this.head
        let count = 0
        while (count != index) {
            current = current.next
            count++
        }
      }else{
        let count = size -1 
        var current = this.tail
        while (index !== count) {
            current = current.prev
            count--
        }
      }
     console.log(current);
    }
    size(){
        let current = this.head
        let count = 0
        while(current){
            current = current.next
            count++
        }
        return count
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
        }
    }

}
const list = new doubleLinkedList
list.push(2)
list.push(5)
list.push(6)
// list.pop()
// list.shift()
list.unShift(1)
list.set(1)
// list.print()
