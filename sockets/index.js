
var app = require("../app").app,
    io = require("../app").io;

exports.connected = function(err, socket, session) {
  socket.on("test connection", function(data) {
    return socket.emit("info", "Connection Success");
  });
};