var	fs   = require('fs');
var querystring = require('querystring');

function start(response,postData){
	var uname = querystring.parse(postData).username;
	console.log(uname + "Logged In");
	fs.readFile("page/client.html", "utf8", function(error,data){
		response.writeHead('200',{'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	});
}

function login(response,postData){
	fs.readFile("page/login.html","utf8",function(error,data){
		response.writeHead('200',{'Content-type': 'text/html'});
		response.write(data);
		response.end();
	});
}

exports.start = start;
exports.login = login;