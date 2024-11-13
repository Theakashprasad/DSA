    1) Bubble sort
    arr = [2,8,4,6,3]
    temp =0
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j] ) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    for (let k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }


    2) Selection sort
    arr = [4,7,2,8,3]
    temp =0
    for (let i = 0; i < arr.length; i++) {
        lowest = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[lowest]) {
                lowest = j
            }
        }
        temp = arr[lowest]
        arr[lowest] = arr[i]
        arr[i] = temp
    }
    for (let k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }


    3)Insertion sort
    arr = [2,7,3,8,5]
    current = 0
    for (let i = 0; i < arr.length; i++) {
        current = arr[i]
            for (var j = i-1; j >= 0 && arr[j]>current; j--) {
                    arr[j+1] = arr[j]
            }
            arr[j+1] = current
    }
    for (let k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }


    4)Merge sort
    function mergeSort(arr){
        if(arr.length < 2){
            return arr
        }
        const mid = Math.floor(arr.length/2)
        const left = arr.slice(0,mid)
        const right  = arr.slice(mid)
        return merge(mergeSort(left),mergeSort(right))
    }
    function merge(left,right){
    const result = []
    while(left.length && right.length){ 
        if (left[0] <= right[0]) {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
    }
    const arr = [2,7,3,8,5] 
    console.log(mergeSort(arr));


    5)Quick sort
    function quickSort(arr) {
        if(arr.length <2){
        return arr
        }
        let pivot = arr[arr.length -1]
        let left = []
        let right = []  
        for (let i = 0; i < arr.length-1; i++) {
                if (arr[i] < pivot) {
                    left.push(arr[i])
                }else{
                    right.push(arr[i])
                }
        }
        return [...quickSort(left),pivot,...quickSort(right)]
    }
    arr = [3,7,4,6,1,9]
    console.log(quickSort(arr));
