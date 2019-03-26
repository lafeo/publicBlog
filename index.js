const PORT = process.env.PORT || 5000
const express = require('express');
var app = express();
var http = require('http').Server(app);
const path = require('path')
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(PORT, function(){
  console.log('listening on *:'+PORT);
});