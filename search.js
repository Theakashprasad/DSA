1) Linear search
arr = [1,2,3,4,5,6]
target = 4
for (let i = 0; i < arr.length; i++) {
     if(arr[i]==target)  console.log(i);
}


2) binary Search
arr = [1,2,3,4,5,6,7,8,9]
leftIdx = 0
rightIdx = arr.length
target = 8
while (leftIdx<=rightIdx) {
    midIdx = Math.floor(( leftIdx + rightIdx ) / 2)
    if (arr[midIdx] == target) {
        console.log(midIdx);
    }

    if (arr[midIdx] < target) {
        leftIdx = midIdx + 1
    }else{
        rightIdx = midIdx - 1
    }
}

Binary useing recursion
arr = [1,2,3,4,5,6,7,8,9]
target = 8
function binary(arr,target) {
    leftIdx = 0
    rightIdx = arr.length
    return search(leftIdx , rightIdx , arr , target)
}
function search(leftIdx , rightIdx , arr , target){ 
    midIdx = Math.floor(( leftIdx + rightIdx ) / 2)
        if(target === arr[midIdx]){
                return midIdx
            }

        if(arr[midIdx] < target){
            leftIdx = midIdx + 1
            return search(leftIdx , rightIdx , arr , target)
        }
        else{
            rightIdx = midIdx - 1
            return search(leftIdx , rightIdx , arr , target)
        }
}
console.log(binary(arr,target));

BIG O - O(log n)

Naive String
long = 'lorie loled'
short = 'lol'
c=0
for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
        if(long[i+j] != short[j]){
            break;
        }
        if ( j == short.length-1) {
            c++
        }
    }
}
console.log(c);


