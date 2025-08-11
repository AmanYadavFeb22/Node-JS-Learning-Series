const fs=require("fs")
console.log("event loop in libuv node js")
setTimeout(()=>{
    console.log("setTimeout called ")
},0)

setImmediate(()=>{
    console.log("setImmediate called")
})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    if (err){
        console.log("err occured")
    }
    else{
    console.log("read file successfully:",data)
}
})

process.nextTick(()=>{
    console.log("process nextTick called")

})

Promise.resolve("promise").then(()=>{
    console.log("promise resolved ")
})

function Greetingfn(){
    console.log('hello world')
}
Greetingfn()
console.log("lets see how this code will execute")