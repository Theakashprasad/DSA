1) find the sum of a value
5 =  5+4+3+2+1 = 15
n = 5;
a = (n * (n + 1)) / 2; 
console.log(a); 


forLoop
a=[3,4,5,6]
for(let i of a){
    console.log(i)
} 


find by index
a = [2,2,3,4,5]
b = a.indexOf(3)
console.log(b);
 

find the duplicate element
arr = [6,3,3,5,2,5]
let flag =0
b = []
for(let i =0 ;i < arr.length ;i++){
    for(let j =i+1 ;j<arr.length;j++){
          if (arr[i] == arr [j]) {
           b.push(arr[i])
          }
    }
}
console.log(b);


a = []
a.push(3,4)
console.log(a);


2 dimentional array to flat
a=[[3,4,5,],[5,6,7,]] 
c=[]
for (let i = 0; i < a.length; i++) { 
    let b = a[i]
    for (let j = 0; j < b.length; j++) {
       c.push(b[j])
    }
}
console.log(c);


number -> array
let num = 131
let result = ''
a= String(num)
while(num!=0){
    result = result + (num%10)
    num = Math.floor(num/10)
}
console.log(a==result)


reversing number
x=1550
let t = 0;
while (x!=0) {
    t = t * 10 + x % 10;
    x = Math.floor(x / 10);
}
console.log(t);     

a = 'akash';
b = {};
for (let i = 0; i < a.length; i++) {
    if (b[a[i]] >=1) {
        b[a[i]]++;
    } else {
        b[a[i]] = 1;
    }
}
console.log(b);

a=[1,2,3,4,5,6,7,8,9]
b={}
n=2
for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        if (n*i == a[j]) {
            // console.log(n*i );
            b[i] = a[j]
        }
    }
}
console.log(b);

O) squre
var mySqrt = function (x) {
    let n = 1;
    while (n * n <= x) {
        n++
    }
    console.log(n-1);
};
mySqrt(10)

