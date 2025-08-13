//This is how we can create server using node js
const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/home"){
        res.end("welcome to home Section")
    }
    else{
    res.end("hello from server")
    }
    console.log("server created successfully")
})
server.listen(3000)