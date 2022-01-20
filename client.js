const net = require('net');
//For Snake Game
// IP: 165.227.47.243
// PORT: 50541

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',  // IP address here
    port: 50541 // Port number here
  });

  conn.on("connect", () => {
    conn.write(`Name: TJP`);
  });

  conn.on("connect", () => {
    console.log('Client module succesfully exported. You are now connected to the game server.');

  });

  conn.setEncoding("utf8");

  return conn;
}

module.exports = { connect };