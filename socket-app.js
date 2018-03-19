var socketIo = require('socket.io');

class SocketServer {
  constructor({ server, port }) {
    this.server = server;
    this.port = port;
    this.io = socketIo(this.server);
    this.listen();
  }

  listen() {
    this.server.listen(this.port, () => {
    });

    this.io.on('connect', (socket) => {
      socket.on('message', (m) => {
        this.io.emit('message', m);
      });

      socket.on('disconnect', () => {
      });
    });

  }
}

module.exports = SocketServer;