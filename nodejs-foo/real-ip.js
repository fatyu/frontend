    var http = require("http");  
    http.createServer(function(request, response) { 
    console.log(request); 
    	console.log(getClientIp(request));  
        response.writeHead(200, {"Content-Type": "text/plain"});    
        response.write("Hello World");    
        response.end();  
    }).listen(8888);  
    console.log("nodejs start listen 8888 port!");  

    function getClientIp(req) {
        return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    };