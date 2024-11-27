// LINLEDLIST
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let a = this.head;
    let c = 0;
    while (a) {
      c++;
      a = a.next;
    }
    return c;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  addMid(data) {
    const newNode = new Node(data);
    let pre = null;
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      pre = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    newNode.next = slow;
    pre.next = newNode;
  }

  addToPostion(index, data) {
    let c = this.head;
    const newNode = new Node(data);
    for (let i = 0; i < index - 1; i++) {
      c = c.next;
    }
    newNode.next = c.next;
    c.next = newNode;
  }

  removeLast() {
    let c = this.head;
    while (c.next.next) {
      c = c.next;
    }
    c.next = null;
  }

  removeMid() {
    let pre = null;
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      pre = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    // console.log(slow.data);
    pre.next = slow.next;
    slow.next = null;
  }

  removePostion(index) {
    let c = this.head;

    for (let i = 0; i < index - 1; i++) {
      c = c.next;
    }

    if (c.next) {
      c.next = c.next.next;
    }
  }

  oddRemove() {
    let cur = this.head;
    while (cur && cur.next) {
      if (cur.next.data % 2 != 0) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    if (this.head.data % 2 != 0) this.head = this.head.next;
  }

  print() {
    let c = this.head;
    while (c) {
      console.log(c.data);
      c = c.next;
    }
  }

  reverse() {
    let cuernt = this.head;
    let previous = null;

    while (cuernt != null) {
      const newNode = cuernt.next;
      cuernt.next = previous;
      previous = cuernt;
      cuernt = newNode;
    }

    this.head = previous;
  }

  duplicateRemove() {
    let cur = this.head;
    let seen = new Set();
    let arr = [];
    while (cur) {
      if (seen.has(cur.data)) {
        arr.push(cur.data);
      }
      seen.add(cur.data);
      cur = cur.next;
    }
    cur = this.head;
    while (cur && cur.next) {
      if (arr.includes(cur.next.data)) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    if (arr.includes(this.head.data)) this.head = this.head.next;
  }
}

const a = new linkedList();
a.addFirst(2);
a.addFirst(3);
a.addFirst(4);
a.addFirst(5);
a.addToPostion(1, 8);
a.reverse();
// a.aaa()

// console.log(JSON.stringify(a,null,2));
a.print();

// To find the duplicate value
// duplicate() {
//     let c = this.head;
//     let a = new Set();
//     let arr = [];

//     while (c) {
//       if (a.has(c.data)) {
//         arr.push(c.data);
//       } else {
//         a.add(c.data);
//       }
//       c = c.next;
//     }
//     // console.log(arr);
//     let newC = this.head;
//     while (newC) {
//       if (arr.includes(newC.data)) {
//         newC = newC.next.next;
//       } else {
//         console.log(newC.data);
//         newC = newC.next; // Move to the next node
//       }
//     }
//     this.head = newC;
//   }

////////////////////////////////////////////////////// TO REMOVE ODD NUMBERS /////////////////////////////////////////////////////////
// removeOdd() {
//     if (this.head && this.head.data % 2 != 0) {
//       this.head = this.head.next;
//     }
//     let c = this.head;
//     while (c && c.next) {
//       console.log(c.data);
//       if (c.next.data % 2 != 0) {
//         c.next = c.next.next;
//       } else {
//         c = c.next;
//       }
//     }
//   }

////////////////// FUNCTION BASED
// function removeOdd(list) {
//   let orginal = list.head;
//   while (orginal && orginal.next) {
//     if (orginal.next.data % 2 == 0) {
//       orginal.next = orginal.next.next;
//     } else {
//       orginal = orginal.next;
//     }
//   }
//   if (list.head.data % 2 == 0) {
//     list.head = list.head.next;
//   }
//   return list.head;
// }


///////////////////////////////////////////////////////// TO REMOVE DUPLICATE ELEMENT /////////////////////////////////////////////////////////
// removeDuplicates(){
//     let seen  = new Set()
//     let previous = null
//     let cur = this.head
//     while(cur){
//       if( seen.has(cur.data) ){
//         previous.next = cur.next
//       }else{
//           seen.add(cur.data)
//           previous = cur
//       }
//       cur = cur.next
//     }
//   }


////////////////////////////////////////////////////////////// SORT /////////////////////////////////////////////////////////
// sort() {
//   let tempList = new Linkedlist();
//   while (!this.isEmpty()) {
//     let tempVal = this.pop();
//     while (!tempList.isEmpty() && tempList.peak() > tempVal) {
//       this.insert(tempList.pop());
//     }
//     tempList.insert(tempVal);
//   }
  
//   while( !tempList.isEmpty()){
//       this.insert( tempList.pop() )
//   }
  
// }

/////////////// FUNCTION
// function sort(orginal){
//     let tempStack = new LinkedList()
//     while(!orginal.isempty()){
//         let cur = orginal.pop()
//         while(!tempStack.isempty() && cur < tempStack.peak()){
//             orginal.add(tempStack.pop())
//         }
//         tempStack.add(cur)
//     }
//     while(!tempStack.isempty()){
//         orginal.add(tempStack.pop())
//     }
// }

// MERGE
// function merge(l1, l2) {
//     let dump = new LinkedList()
//     let cur = dump

//     let list1 = l1.head
//     let list2 = l2.head

//     while( list1 && list2){
//         if( list1.data < list2.data ){
//             cur.next = list1
//             list1  = list1.next
//         }else{
//             cur.next = list2
//             list2 = list2.next
//         }
//         cur = cur.next
//     }

//     if( list1){
//         cur.next = list1
//     }else{
//         cur.next = list2

//     }

//     return  dump.next

// }


///////////////////////////////////////////////////////////  REMOVE ALL DUPLICATE /////////////////////////////////////////////////////////
// function duplicate(list) {
//   let seen = new Set();
//   let arr = [];
//   let cur = list.head;

//   while (cur) {
//     if (seen.has(cur.data)) {
//       arr.push(cur.data);
//     }
//     seen.add(cur.data);
//     cur = cur.next;
//   }

//   cur = list.head;
//   let per = null;

//   while (cur && cur.next) {
//     if (arr.includes(cur.next.data)) {
//       cur.next = cur.next.next;
//     } else {
//       cur = cur.next;
//     }
//   }
//   if (arr.includes(list.head.data)) {
//     list.head = list.head.next;
//   }

//   return list.head;
// }