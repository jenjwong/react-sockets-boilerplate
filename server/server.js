const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

io.on('connection', (socket) => {
  console.log('client connected');
  socket.on('randomSocketEvent', (data) => {
    console.log(`This is data from the client: ${data}`);
  });
  io.emit('randomSocketEvent', 'This is data from the server');
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});
