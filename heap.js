  class MaxBinaryHeap{
      constructor(){
          this.value = [41,39,33,18,27,12]
      }
      insert(element){
          this.value.push(element)
          this.bubbleUp();
      }
      bubbleUp(){
          let idx = this.value.length -1
          const element = this.value[idx];
          while(idx > 0){
              let parentIdx = Math.floor(( idx -1 )/2);
              let parent = this.value[parentIdx];
              if(element<=parent){
                  break;
              }
              this.value[parentIdx] = element
              this.value[idx] = parent
              idx = parentIdx
          }
          console.log(this.value);
      }

      extractMax(){
          const max = this.value[0]
          const end = this.value.pop()
          if(this.value.length > 0){
              this.value[0] = end
              this.sinkDown()
          } 
          return max
      }
      sinkDown(){
          let idx = 0 ;
          const length = this.value.length;
          const element = this.value[0];
          while(true){
            let leftChildIdx = 2 * idx + 1 
            let rightChildIdx = 2 * idx +2
            let leftChild , rightChild
            let swap = null;

            if(leftChildIdx < length){
              leftChild = this.value[leftChildIdx]
              if(leftChild > element){
                  swap = leftChildIdx
              }
            }
            if(rightChildIdx < length){
              rightChild = this.value[rightChildIdx]
              if(
                (swap == null && rightChild > element)  ||
                (swap && rightChild > leftChild ) 
              ){
                  swap = rightChildIdx
              }
            }
            if(swap == null) break
            this.value[idx] = this.value[swap]
            this.value[swap] = element   
            idx = swap
          }
      }

  } 
  const heap = new MaxBinaryHeap()
  // heap.insert(93)
  console.log(heap);
  heap.extractMax()
  console.log(heap);   


  // --------- M I N ----------- 
  class Node{
      constructor(val , priority){
          this.value = val ; 
          this.priority = priority
      }
  }
  class priorityQueue{
        constructor(){
          this.value = []
        }
        insert(val , priority ){
          let newNode = new Node(val,priority)
          this.value.push(newNode);
          this.bubbleUp();
        }
        bubbleUp(){
          let idx = this.value.length - 1
          const element = this.value[idx]
          while(idx>0){
              let parentIdx = Math.floor((idx - 1 )/2);
              let parent = this.value[parentIdx]

              if(element.priority >= parent.priority) break
              
                  this.value[parentIdx] = element
                  this.value[idx] = parent
                  idx = parentIdx
              
          }
        }
        dequeue(){
            const min = this.value[0]
            const end = this.value.pop()
            if( this.value.length > 0 ){
              this.value[0] = end
              this.sinkDown()
            }
            return min
        }
        sinkDown(){
          let idx = 0 
          const length = this.value.length
          const element = this.value[0]
          while(true){
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild , rightChild
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.value[leftChildIdx]
                if(leftChild.priority < element.priority){
                    swap  = leftChildIdx
                }
            }
            if(rightChildIdx < length){
              rightChild = this.value[rightChildIdx]
              if(
                swap == null &&rightChild.priority < element.priority ||
                swap != null && leftChild.priority > rightChild.priority
                ){
                swap = rightChildIdx
              }
            }

            if(swap == null) break;
            this.value[idx] = this.value[swap]
            this.value[swap] = element
            idx = swap
          }
        }
  }

  const newHeap = new priorityQueue()
  newHeap.insert('a',4)
  newHeap.insert('a',2)
  newHeap.insert('a',5)
  newHeap.insert('a',6)
  newHeap.insert('a',3)
  newHeap.insert('a',1)
  newHeap.dequeue()
  newHeap.dequeue()
  newHeap.dequeue()
  // newHeap.dequeue()

  console.log(newHeap.value);
