//  Arrow function (2015) ES6  let const


// ()=>{return }
// ()=>()
// =>

//  arrow function without parameter

let fun = () => {return "Inside function"}
console.log(fun());

let fun1 = () => (2+4)
console.log(fun1());

//  arrow function with parameter

let fun2 = (a,b) => (a*b)
console.log(fun2(4,5));

let fun3 = name => name
console.log(fun3("Qasim"));

let fun4 = num => num*num
let n = parseInt(prompt("Enter a value"))
let r = fun4(n);
console.log(r);


