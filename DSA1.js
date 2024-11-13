    1) FIBONACCi
function a(n){
    let feb = [0,1]
    for(let i=2 ; i<n ;i++){ 
       feb[i] = feb[i-1] + feb[i-2]
    }
    console.log(feb);
}
a(4)
Big-O => O(n) linear time complacity

2) FACTORIAL
function a(n){
   let sum = 1
   for(let i = n ; i>=1 ; i--){
    sum = sum * i
   }
   console.log(sum)
}
a(5)
Big-O => O(n) linear time complacity


3) PRIME NUMBER
function a(n){
      for(let i=2 ; i<n ; i++){
        if(n%i == 0){
           return false
        }
      }
      return true
}
console.log(a(4));
Big-O => O(n) linear time complacity

4) POWER OF TWO
function a(n){
     while(n>1){
        if(n%2 != 0){
               return false
        }
        n = n/2
     }
     return true
}
console.log(a(2));

 5)RECURSIVE FIBONACCi
function a(n) {
    if(n<2){
        return n
    }
    return a(n-1) + a(n-2)
}
console.log(a(6));

function arr(n){
    if(n<2){
        return n
    }
    return arr(n-1) + arr(n-2)
}
console.log(arr(4));

6) RECURSIVE FACTORIAL
function a(n){
    if(n==0){
   return 1
    }

    return n * a(n-1)
}
console.log(a(5));


7) BINARY SEARCH
function a() {
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
leftInd = 0
rightInd = arr.length 
target = 13

while (leftInd <= rightInd) {       -
    const middleInd = Math.floor((leftInd+rightInd)/2)  
    if(target === arr[middleInd]){
        return middleInd
    }
    if(target <= arr[middleInd]){
        rightInd = middleInd-1
    }else{
        leftInd = middleInd+1
    }
}
return -1
}
console.log(a());

8) RECURSIVE BINARY SEARCH
const arr=[1,2,3,4,5]
const target = 4
function a(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftInd,rightInd){
      if(leftInd>rightInd){
           return -1
      }
      let middleInd = Math.floor((leftInd+rightInd)/2)
       if (target==arr[middleInd]) {
        return middleInd
       }
      if(target<arr[middleInd]){
        return search(arr,target,leftInd,middleInd-1)
      }else{
        return search(arr,target,middleInd+1,rightInd)
      }
}
console.log(a(arr,6));



9) BUBBLE SORT
function a(arr){
    let swap
    do{
        swap = false
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i]>arr[i+1]){
               let temp = arr[i+1]
               arr[i+1] = arr[i]
               arr[i] = temp
                swap = true
            }

        }
    }while(swap)
}
const arr = [-6,-3,7,3,5]
a(arr)
console.log(arr);

10) INSERTION SORT
const arr = [8,20,-2,4,-6]
function a(arr) {
for(let i = 1 ; i<arr.length  ; i++){
    let num = arr[i]
    let j = i-1
    while (j>=0 && arr[j]>num) {
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j+1]=num
}
}
a(arr)
console.log(arr);

11) QUICK SORT
function aa(a) {
  if (a.length < 2) {
    return a;
  }
  let left = [];
  let right = [];
  let pivot = a[a.length - 1];
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      left.push(a[i]);
    } else {
      right.push(a[i]);
    }
  }
  return [...aa(left), pivot, ...aa(right)];
}
const a = [8, 20, -2, 4, -6];
console.log(aa(a));


12) MERGE SORT
function mergesort(arr){
    if(arr.length <=1) return arr
     let mid = Math.floor(arr.length / 2)   
      let left = arr.slice(0 , mid) 
      let right = arr.slice(mid)   
      return merge(mergesort(left), mergesort(right))
}
function merge(left,right){
    let result = []
    let i =0
    let j =0
     while (i<left.length && j<right.length) {
        if (left[i]<right[j]) {
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
     }
     while(left.length > i){
        result.push(left[i])
i++
    }
    while(right.length > j){
        result.push(right[j])
j++
    }
return result
}
const arr = [10,23,76,73,72,1,9]
console.log(mergesort(arr));

