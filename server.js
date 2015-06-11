var http = require("http"); // http module 
var url  = require("url");
var querystring = require("querystring");
function start(route,handle){
	var postData = "";
	function onRequest(request,response){
		
		var pathname = url.parse(request.url).pathname;
		request.setEncoding("utf8");

		request.addListener("data",function(postDataChunk){
			postData = postDataChunk;
		});


		request.addListener("end",function(){
			route(handle,pathname,response,postData);	
		});		
	}


	app = http.createServer(onRequest).listen(80);
	console.log('Server Start');
	var io = require("socket.io").listen(app);
	io.sockets.on('connection',function(socket){
		socket.on('message_to_server',function(data){
			myname = querystring.parse(postData).username;
			io.sockets.emit("message_to_client",{uname:myname, message:data["message"]});
		});
	});
}
exports.start = start;





