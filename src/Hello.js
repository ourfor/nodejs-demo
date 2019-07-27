const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request,response) =>{
	response.statusCode = 200;
	response.setHeader("content-type","text/html;charset=UTF-8");
	response.end("Hello World\n");
	
	
});

server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
});
