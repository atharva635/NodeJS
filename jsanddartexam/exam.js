const { rejects } = require("node:assert");

/* 
=========================================================== 
WEB TECHNOLOGY – CS208 
UNIT–1 STRUCTURED PRACTICE ASSIGNMENT 
Total Questions: 30 
Each Question = 1 Mark 
=========================================================== 
INSTRUCTIONS: - DO NOT change function names - DO NOT modify driver function - Implement logic only inside marked section - Follow ES6 standards 
=========================================================== 
*/ 
let numbers = [10, 20, 30, 40]; 
let user = { name: "Aman", age: 21, city: "Delhi" }; 
/* ======================================================= 
1 
Purpose: 
Add two numbers using let keyword. 
Parameters: - a (number) - b (number) 
Constraints: - Must declare result using let. - Return the sum. 
Test Case: 
sumLet(5,5) → 10 
======================================================= */ 
function sumLet(a, b) { 
// STUDENT CODE STARTS 
return a+b;
// STUDENT CODE ENDS 
} 
/* ======================================================= 
2 
Purpose: 
Multiply two numbers using const. 
Parameters: - a (number) - b (number) 
Constraints: - Must use const for result variable. - Return multiplication. 
Test Case: 
multiplyConst(5,4) → 20 
======================================================= */ 
function multiplyConst(a, b) { 
// STUDENT CODE STARTS 
return a*b;
// STUDENT CODE ENDS 
} 
/* ======================================================= 
3 
Purpose: 
Return square using arrow function. 
Parameters: - n (number) 
Constraints: - Must use arrow function. - No normal function allowed. 
Test Case: 
square(4) → 16 
======================================================= */ 
const square = (n) => { 
// STUDENT CODE STARTS 
return n*n;
// STUDENT CODE ENDS 
}; 
/* ======================================================= 
4 
Purpose: 
Return greeting using template literal. 
Parameters: - name (string) 
Constraints: - Must use backticks (` `). - Do not use string concatenation. 
Test Case: 
greet("Aman") → "Hello Aman" 
======================================================= */ 
function greet(name) { 
// STUDENT CODE STARTS \
return name;
// STUDENT CODE ENDS 
} 
/* ======================================================= 
5 
Purpose: 
Return first two elements using array destructuring. 
Parameters: - arr (array) 
Constraints: - Must use destructuring. - Return array of first two values. 
Test Case: 
getFirstTwo(numbers) → [10,20] 
======================================================= */ 
function getFirstTwo(arr) { 
// STUDENT CODE STARTS 
const [a,b] = arr;
return [a,b];
// STUDENT CODE ENDS 
} 
/* ======================================================= 
6 
Purpose: 
Extract name and age using object destructuring. 
Parameters: - obj (object) 
Constraints: - Must use destructuring. - Return object containing only name and age. 
======================================================= */ 
function getUserInfo(obj) { 
// STUDENT CODE STARTS 
const {name,age} = obj;
return {name,age};
// STUDENT CODE ENDS 
} 
/* ======================================================= 
7 
Purpose: 
Add numbers using default parameter. 
Parameters: - a (number) - b (number, default 5) 
Constraints: - Must use default parameter. - Return sum. 
Test Case: 
addDefault(10) → 15 
======================================================= */ 
function addDefault(a, b = 5) { 
// STUDENT CODE STARTS 
return a+b;
// STUDENT CODE ENDS 
} 
/* ======================================================= 
8 
Purpose: 
Sum all numbers using rest operator. 
Parameters: - ...nums (multiple numbers) 
Constraints: - Must use rest parameter. - Use reduce(). 
Test Case: 
sumRest(1,2,3) → 6 
======================================================= */ 
function sumRest(...nums) { 
// STUDENT CODE STARTS 
return nums.reduce((a,b)=>a+b);
// STUDENT CODE ENDS 
} 
console.log(sumRest(1,2,3));
/* ======================================================= 
9 
Purpose: 
Merge two arrays using spread operator. 
Parameters: - arr1 (array) - arr2 (array) 
Constraints: - Must use spread operator. 
======================================================= */ 
function mergeArrays(arr1, arr2) { 
// STUDENT CODE STARTS 
return [...arr1,...arr2];
// STUDENT CODE ENDS 
} 
/* ======================================================= 
10 
Purpose: 
Clone object using spread. 
Parameters: - obj (object) 
Constraints: - Must use spread. - Do not modify original object. 
======================================================= */ 
function cloneObject(obj) { 
// STUDENT CODE STARTS 
return {...obj};
// STUDENT CODE ENDS 
} 
/* ======================================================= 
11 
Purpose: 
Double all numbers using map. 
Parameters: - arr (array) 
Constraints: - Must use map(). 
======================================================= */ 
function doubleNumbers(arr) { 
// STUDENT CODE STARTS 
return arr.map(n=>n*2);
// STUDENT CODE ENDS 
} 
/* ======================================================= 
12 
Purpose: 
Filter numbers greater than 20. 
Constraints: - Must use filter(). 
======================================================= */ 
function filterGreaterThan20(arr) { 
// STUDENT CODE STARTS 
return arr.filter(n=>n>20);
// STUDENT CODE ENDS 
} 
/* ======================================================= 
13 
Purpose: 
Find maximum using spread. 
Constraints: - Must use Math.max and spread. 
======================================================= */ 
function findMax(arr) { 
// STUDENT CODE STARTS 
return Math.max(...arr);
// STUDENT CODE ENDS 
} 
/* ======================================================= 
14 
Purpose: 
Remove age property using destructuring. 
Constraints: - Must use destructuring with rest. 
======================================================= */ 
function removeAge(obj) { 

// STUDENT CODE STARTS 
const {age,...arr} = obj;
return rest;

// STUDENT CODE ENDS 
} 
/* ======================================================= 
15 
Purpose: 
Create Promise that resolves message after 1 second. 
Parameters: - message (string) 
Constraints: - Must use new Promise. - Must use setTimeout. 
======================================================= */ 
function createPromise(message) { 
// STUDENT CODE STARTS 
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(message);
    },1000);

});
// STUDENT CODE ENDS 
} 
/* ======================================================= 
16 
Purpose: 
Consume Promise using then(). 
Constraints: - Must use then(). 
======================================================= */ 
function consumeWithThen(promise) { 
// STUDENT CODE STARTS 
promise.then(result=>{
    console.log(result);
});
// STUDENT CODE ENDS 
} 
/* ======================================================= 
17 
Purpose: 
Handle rejected promise using catch(). 
Constraints: - Must use catch(). 
======================================================= */ 
function promiseReject() { 
// STUDENT CODE STARTS 
return promise.reject("err").catch(err=>{
    return err;

});


// STUDENT CODE ENDS 
} 
/* ======================================================= 
COMBINATION QUESTIONS 
======================================================= */ 
/* ======================================================= 
18 
Purpose: 
Understand var scope. 
Expected Output: 
50 
======================================================= */ 
function trickyVarScope() { 
// STUDENT CODE STARTS 
var x = 10; 
if (true) { var x = 50; } 
return x; 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
19 
Purpose: 
Understand let block scope. 
Expected Output: 
10 
======================================================= */ 
function trickyLetScope() { 
// STUDENT CODE STARTS 
let x = 10; 
if (true) { let x = 50; } 
return x; 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
20 
Purpose: 
Understand arrow vs normal function this. 
Expected Output: 
"CS208 & undefined" 
======================================================= */ 
function trickyArrowThis() { 
// STUDENT CODE STARTS 
const obj = { 
name: "CS208", 
normal: function () { return this.name; }, 
arrow: () => this.name 
}; 
return obj.normal() + " & " + obj.arrow(); 
} 
// STUDENT CODE ENDS 
/* ======================================================= 
21 
Purpose: 
Destructuring + rest combination. 
Return length of remaining elements. 
======================================================= */ 
function trickyDestructure(arr) { 
// STUDENT CODE STARTS 
const [a,b,...rest] = arr; 
return rest.length; 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
22 
Purpose: 
Spread override order. 
Expected Output: 
30 
======================================================= */ 
function trickySpreadOverride() { 
// STUDENT CODE STARTS 
const o1={age:21}; 
const o2={age:30}; 
return {...o1,...o2}.age; 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
23 
Purpose: 
Rest + Spread together. 
======================================================= */ 
function trickyRestSpread() { 
// STUDENT CODE STARTS 
const nums=[1,2,3]; 
return sumRest(...nums); 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
24 
Purpose: 
Promise error flow understanding. 
Expected Output: 
"Recovered" 
======================================================= */ 
function trickyPromiseFlow() { 
// STUDENT CODE STARTS 
return new Promise(res=>res("Start")) 
.then(r=>{throw "Error"}) 
.catch(e=>"Recovered"); 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
25 
Purpose: 
Arrow implicit return confusion. 
Expected Output: 
undefined 
======================================================= */ 
function trickyArrowReturn() { 
// STUDENT CODE STARTS 
const fn = () => { name:"Aman" }; 
return fn(); 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
26 
Purpose: 
Map + filter chaining. 
======================================================= */ 
function trickyMapFilter(arr) { 
// STUDENT CODE STARTS 
return arr.filter(n=>n>10).map(n=>n*2); 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
27 
Purpose: 
Clone object modification concept. 
Expected Output: 
21 
======================================================= */ 
function trickyCloneModify(obj) { 
// STUDENT CODE STARTS 
const clone = {...obj}; 
clone.age = 30; 
return obj.age; 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
28 
Purpose: 
Default destructuring value. 
======================================================= */ 
function trickyDefaultDestructure(obj) { 
// STUDENT CODE STARTS 
const {city="Noida"} = obj; 
return city; 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
29 
Purpose: 
Reduce without initial value. 
======================================================= */ 
function trickyReduce(arr) { 
// STUDENT CODE STARTS 
return arr.reduce((a,b)=>a+b); 
// STUDENT CODE ENDS 
} 
/* ======================================================= 
30 
Purpose: 
typeof with var and let. 
Expected Output: 
"number-number" 
======================================================= */ 
function trickyTypeof() { 
// STUDENT CODE STARTS 
var a = 1; 
let b = 2; 
return typeof a + "-" + typeof b; 
// STUDENT CODE ENDS 
} 