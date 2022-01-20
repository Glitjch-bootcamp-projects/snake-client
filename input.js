const { connect } = require("./client");

let connection;


const handleUserInput = function (key) {
  // Exit the server (not just the terminal)
  if (key === '\u0003') {
    console.log("I'm outta here.");
    process.exit();
  }

  // Directional commands
  // Up W key
  if (key === `\u0077`) {
    connection.write("Move: up")
    // console.log("up");
  }
  // Left A key
  if (key === '\u0061') {
    connection.write("Move: left")
    // console.log("left");
  }
  // Down S key
  if (key === '\u0073') {
    connection.write("Move: down")
    // console.log("down");
  }
  // Right D key
  if (key === '\u0064') {
    connection.write("Move: right")
    // console.log("right");
  }
};




const setupInput = function (conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = { setupInput };