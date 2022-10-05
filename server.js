const http =require('http');
const port = 8081;

http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"test/html"});
    response.write("<h1>Hello,this is is from my Server</h1>");
    response.end();
}).listen(port,()=>{
    console.log(`node.js server started on port ${port}`);
});

// http://localhost:8081
