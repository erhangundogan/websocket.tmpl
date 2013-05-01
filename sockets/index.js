

exports.connected = function(err, socket, session) {
  socket.emit("connected");
};