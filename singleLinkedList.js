// LINLEDLIST
class Node{
    constructor(data){ 
        this.data = data  
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head =  newNode
    }

    addLast(data){
        const newNode = new Node(data);
        if(!this.head){
              this.head = newNode;
              return
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    size(){
        let a = this.head
        let c = 0
        while(a){
            c++
            a =a.next
        }
        return c
    }
 

    addToPostion(index,data){
        let c = this.head
        const newNode = new Node(data)
            for(let i=0 ; i < index-1; i++){
                 c = c.next
            }
            newNode.next = c.next 
            c.next = newNode
    }

    removeLast(){
        let c = this.head
        while (c.next.next) {
            c = c.next
        }
        c.next = null
    }

    removePostion(index){
        let c = this.head
                               
        for (let i = 0; i < index-1; i++) {
            c = c.next            
        }

        if(c.next){
            c.next = c.next.next
        }
    }

    print(){
        let c = this.head
        while(c){
            console.log(c.data);
            c = c.next
        }
    }

    reverse(){
        let cuernt=this.head
        let previous = null

        while(cuernt != null){
           const newNode = cuernt.next
           cuernt.next = previous
           previous = cuernt
           cuernt = newNode 
        }

        this.head = previous

    }


}

const a = new linkedList
a.addFirst(2)
a.addFirst(3)
a.addFirst(4)
a.addFirst(5)
a.addToPostion(1,8)
a.reverse()
// a.aaa()


// console.log(JSON.stringify(a,null,2)); 
a.print()


