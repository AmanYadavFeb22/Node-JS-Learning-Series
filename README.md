# Node-JS-Learning-Series
This is Node Js Learning Series-(A complete Backend learning Series)
# Global vs globalThis
console.log(this) // It gives us an Empty Object
console.log(global) // It gives us an global Object
console.log(globalThis)

console.log(globalThis==global) // It gives us true

# Modules in Node Js 
There are two types of importing and exporting modules 
1. Common jS Modules(older way of importing and exporting )
 => syntax looks likes :- module.exports=nameofmodule  & to import use require("location of module")
 => synchronous in nature
 => run in non strict mode 

2. ES Modules (newer way of importing and exporting modules )
=> here we use import and export to add modules 
 => Asynchronous in nature
 =>runs in non-strict mode