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


  // ---------  Priority Queue ----------- 
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

   
  5 4 6 3 2 1

            5-0 
              
      4-1         6-2 
               
   3-3    2-4   3-5





/////////////////////////// HEAP SORT

function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
  }

  // Extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
      console.log(arr[i]);

      // Move current root to the end
      [arr[0], arr[i]] = [arr[i], arr[0]];

      // Call heapify on the reduced heap
      heapify(arr, i, 0);
  }
  return arr;
}

// Function to heapify a subtree rooted at index i
function heapify(arr, n, i) {

  let largest = i; // Initialize the largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
      largest = left;
  }

  // If right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
      largest = right;
  }

  // If the largest is not root
  if (largest !== i) {

      [arr[i], arr[largest]] = [arr[largest], arr[i]];

      // Recursively heapify the affected subtree
      heapify(arr, n, largest);
  }

}

// Example usage
const array = [5, 4, 6, 1, 2, 3];
console.log("Sorted array:", heapSort(array));