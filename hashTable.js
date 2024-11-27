1) separate chaining
class HashMap{
    constructor(size = 10){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let hashValue = 0
       for (let i = 0; i < key.length; i++) {
              hashValue += key.charCodeAt(i)
       }
       return hashValue %this.size
    }
    insert(key,value){
        let index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push({key,value})
    
    }
    get(key){
        const index = this.hash(key)
        if(this.table[index]){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i].key == key){
                return this.table[index][i].value
            }
        }
    }
    return undefined
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){

                console.log(this.table[i]);
            }
            
        }
    }

}
const newHash = new HashMap()
newHash.insert('a','ak')
newHash.insert('b','aka')
newHash.insert('c','aks')
newHash.insert('d','akh')
newHash.insert('d','akdh')
newHash.insert('d','akdh')
console.log(newHash.get('d'));
newHash.display()


2) Quadratic Probing
class hash{
    constructor(size = 10){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let hashed = 0
        for (let i = 0; i < key.length; i++) {
            hashed += key.charCodeAt(i)
        }
        return hashed % this.size
    }
    quadratic(index , attempt){ 
      return( index + attempt ** 2 ) % this.size 
    }
    put(key,value){
        let attempt = 0
        let index = this.hash(key)
        while (this.table[index] !== undefined ) {
            if (this.table[index].key === key) {
                this.table[index].value = value
                return
            }
            attempt++
           index =  this.quadratic(index,attempt)
        }
        this.table[index] = {key , value}
    }
    display(){
    
        for (let i = 0; i < this.size; i++) {
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}
const newHash = new hash()
newHash.put('a','ask')
newHash.put('aa','ask')
newHash.put('a','asffffk')
newHash.display()


3) Double hash
class doubleHash{
    constructor(size = 10){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let hashed = 0
      for (let i = 0; i < key.length; i++) {
         hashed += key.charCodeAt(i)
      }
      return hashed %  10
    }
    hash2(key){
       return  7 - (key.length % 7 )
    }
    set(key,value){
        let index = this.hash(key)
        let attempt = 0
            while(this.table[index]) {
                index = (index + attempt * this.hash2(key) )% this.size
                attempt++
            }
            this.table[index] = {key,value}
        
    }
    dispaly(){
     for (let i = 0; i < this.size; i++) {
        if( this.table[i]){
          console.log(this.table[i],i);
     }
    }
}
}

let newHash = new doubleHash()
newHash.set('a','ha')
newHash.set('a','ha')
newHash.set('a','ha')
newHash.dispaly()


// implement hashtable with linkedlist

    class Node {
        constructor(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
        }
      }
    
      class LinkedList {
        constructor() {
          this.head = null;
          this.tail = null;
        }
    
        insert(key, value) {
          let node = new Node(key, value);
          if (!this.head) {
            this.head = this.tail = node;
            return;
          }
          this.tail.next = node;
          this.tail = node;
        }
    
        display() {
          let current = this.head;
          while (current) {
            console.log(`${current.key}:${current.value}`);
            current = current.next;
          }
        }
      }
    
      class HashTable {
        constructor(size) {
          this.table = new Array(size);
          this.size = size;
        }
    
        hash(key) {
          let hash = 0;
          for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
          }
          return hash % this.size;
        }
    
        addValue(key, value) {
          let bucket = this.hash(key);
          if (!this.table[bucket]) {
            this.table[bucket] = new LinkedList();
          }
          this.table[bucket].insert(key, value);
        }
    
        display() {
          for (let i = 0; i < this.table.length; i++) { 
            if (this.table[i]) {
              this.table[i].display();
            }
          }
        }
      }
    
      const hashTable = new HashTable(10);
      hashTable.addValue("name", "Nischal");
      hashTable.addValue("age", 22);
      hashTable.addValue("place", "pta");
    
      hashTable.display();
    

////////////////////////////////////////////////////////// FIND THE DUPLICATE //////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 3, 2, 5];
// let dup = [];
// let hashTable = {};

// for (let val of arr) {
//   if (hashTable[val] == undefined) {
//     hashTable[val] = 1;
//   } else {
//     hashTable[val]++;
//     if (hashTable[val] > 1) {
//       dup.push(val);
//     }
//   }
// }

// console.log(dup);
