1) Reverse a string
a = '556778'
b =''
for (let i = a.length-1; i >=0 ; i--) {
    b = b + a[i]
}
console.log(b);

2) string value 
const val = 'aanoog'
function a(val) {
    let result = {}
    for (let i = 0; i < val.length; i++) {
       var char = val[i].toLowerCase()
       if (result[char]>=1) {
        result[char] = result[char]+1
       }else{
        result[char] = 1
       }
    }
    return result
}
console.log(a(val))

#) String character code 
a = 'abc'
console.log(a.charCodeAt(2));


3) Change the last valur to uppercase 
const a = 'akash'  
let b = []
for (let i = 0 ; i <= a.length-1; i++) {
    if(a.length-1 == i){
        b.push(a[i].toUpperCase)
    }else{
        b.push(a[i])
    }
}
console.log(b);


var isValid = function(s) {
    let arr = []
    let obj = {
        '(' : ')',
        '[':']',
        '{':'}'
    }
    for(let x of s){
        if(x in obj){
            arr.push(x)
        }else{
            let a = arr.pop()
            if(obj[a] != x){
                return false
            }
        }
    }
    return arr.length === 0
 }

