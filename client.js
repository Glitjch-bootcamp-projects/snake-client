const net = require('net');
const { IP, PORT, } = require(`./constants`)
//For Snake Game
// IP: 165.227.47.243
// PORT: 50541

const connect = function () {
  const conn = net.createConnection({
    host: IP,  // IP address here
    port: PORT // Port number here
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