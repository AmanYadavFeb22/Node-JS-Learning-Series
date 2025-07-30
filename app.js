require("./xyz.js")
// const {calculatesum,a}=require("./calculate/sum.js")
// const {calculatemultiple}=require("./calculate/multiply.js")
const{calculatemultiple,calculatesum,a}=require("./calculate")
// console.log("helo world")
// console.log(this) 
// console.log(global) 
// console.log(globalThis)

// console.log(globalThis==global) 
var x=5
var y=6
console.log(a)
calculatesum(x,y)
calculatemultiple(x,y)
