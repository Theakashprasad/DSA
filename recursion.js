// SUM OF ODD NUMBER
// function a(arr, i = 0) {
//     if (i >= arr.length) return 0;
  
//     if (arr[i] % 2 != 0) {
//       return arr[i] + a(arr, i + 1);
//     } else {
//       return a(arr, i + 1);
//     }
//   }
//   console.log(a([1, 2, 3, 4, 5,7]));
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sumOdd(arr) {
//   if (arr.length == 0) return 0;
//   let sum = 0;
//   if (arr[arr.length - 1] % 2 != 0) sum = arr[arr.length - 1];
//   return sum + sumOdd(arr.splice(0, arr.length - 1));
// }
// console.log(sumOdd(arr));


// REVERSE AN ARRAY
// const arr = [1, 2, 3, 4, 5];

// function reverse(arr) {
//   if (arr.length == 0) return [];

//   return [arr[arr.length - 1]].concat(reverse(arr.slice(0, arr.length - 1)));
// }
// console.log(reverse(arr));


// FIBONACCi
// function fibonacci(n) {
//     // Base cases
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
  
//     // Recursive case
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  