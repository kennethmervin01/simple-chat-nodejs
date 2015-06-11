var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.login;
handle["/chat"] = requestHandlers.start;

server.start(router.route,handle);