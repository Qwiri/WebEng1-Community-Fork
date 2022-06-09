const ws = require('ws');
const app = require('express')();

const wsSvr = new ws.Server({ noServer: true });
wsSvr.on('connection', (socket) => {
  socket.on('message', message => console.log(message));
  socket.send("Message from the server");
});

const server = app.listen(8000);
server.on('upgrade', (request, socket, head) => {
  wsSvr.handleUpgrade(request, socket, head, (socket) => {
    wsSvr.emit('connection', socket, request);
  });
});
