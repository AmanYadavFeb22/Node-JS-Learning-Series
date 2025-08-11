const fs=require('fs');
console.log("Example of asynchronous code") //executed first
let a=454515458;
let b=789232654;
fs.readFile("./file.txt" ,"utf-8",(err,data)=>{ //executed fourth number 
    if(err){
        console.log("err reading file")
    }
    else{
    console.log("data read successfully",data)
}
})
setTimeout(()=>{
    console.log("This code will be executed later after 3s") //executed at last 
},3000)

setTimeout(()=>{
    console.log("call me immeddiately") //executed third 
},0)

function multiply(x,y){
    const mul=x*y
    return mul;
}
let z=multiply(a,b)
console.log(`The result of multiplication is ${z}`)//executed second

