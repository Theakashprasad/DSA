////////////// FIBONACCi
// function fibonacci(n) {
//     // Base cases
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
  
//     // Recursive case
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  

////////////// REVERSE STRING
const str = 'akash'
function a(str){ 
  if(str.length < 1)return str
  return str[str.length -1] + a( str.slice(0, str.length -1) )
}
console.log(a(str));


////////////// REVERSE ARRAY
const arr = [1,2,3,4]
function b(arr){
  if( arr.length < 1 ) return []
  return [arr[arr.length -1]].concat( b(arr.slice( 0, arr.length -1 )) )
}
console.log(b(arr));


////////////// SUM OF ODD NUMBER
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];    
function sumOdd(arr) {
  if (arr.length == 0) return 0;
  let sum = 0;
  if (arr[arr.length - 1] % 2 != 0) sum = arr[arr.length - 1];
  return sum + sumOdd(arr.splice(0, arr.length - 1));
}
console.log(sumOdd(arr));


/////////////// FLAT ARRAY
const arr = [1, [2, [3, 4], 5], [6, 7], 8, [9]];
function flatArray(arr) {
  if (arr.length < 1) return arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) result = result.concat(flatArray(arr[i]));
    else result.push(arr[i]);
  }
  return result;
}
console.log(flatArray(arr));


////////////// PLINDROME
a = "ddadd";
function aa(a) {
  if (a.length < 1) return true;
  if (a[0] != a[a.length - 1]) return false
  return aa(a.slice(1, a.length - 1));
}
console.log(aa(a));


////////////// FACTORIAL SUM
function a(n=5){
  if( n == 0 ) return 1
console.log(n);
  return  n *a(n-1)
}
console.log(a());



////////////// REVERES ARRAY AND THE ELEMT
function aa( arr){
  if( arr.length < 1) return []
  let lastElement = Array.isArray( arr[arr.length-1] ) ? aa( arr[arr.length-1]) : arr[arr.length-1]
  return [lastElement].concat( aa( arr.slice(0, arr.length - 1)) )
}

console.log(aa([8, [[7, 6], 5], [4, 3], 2, 1]));


//////////////// FIND THE ZEROS
const a = [1, 0, [0, 4, [0, [6]]]];
function aa(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += aa(a[i]);
    } else if (a[i] == 0) {
      count++;
    }
  }
  return count;
}
console.log(aa(a));


////////////////////Remove the duplicates from array using recursion?
const arr = [1, 2, 3, 2, 4, 1, 5, 3];
function removeDup(arr, idx = 0, unique= []){
    if( arr.length == idx ) return unique
    
    if( !unique.includes( arr[idx] ) ) unique.push(arr[idx])
    
     return removeDup(arr, idx+1, unique)
}

console.log(removeDup(arr))