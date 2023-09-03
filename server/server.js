const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('listening on port 8000');


const wsServer = new webSocketServer({
  httpServer: server
});

const clients = {};
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

let count = 1;

wsServer.on('request', function (request) {
  var userID = getUniqueID();
  console.log(request);
  const connection = request.accept(null, request.origin);
  clients[userID] = connection;

  console.log(count++);

  connection.on('message', function(index) {
    
      console.log('Received Index: ', index.utf8Data);
      if(index.utf8Data.index === "hi"){
        pass
      }
      for(key in clients) {
        clients[key].sendUTF(index.utf8Data);
      }
    }
  )
});
