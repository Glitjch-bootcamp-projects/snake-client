let connection;


const handleUserInput = function(key) {
  // Exit the server (not just the terminal)
  if (key === '\u0003') {
    console.log("I'm outta here.");
    process.exit();
  }

  // Directional commands
  // Up W key
  if (key === `\u0077`) {
    connection.write("Move: up");
    // console.log("up");
  }
  // Left A key
  if (key === '\u0061') {
    connection.write("Move: left");
    // console.log("left");
  }
  // Down S key
  if (key === '\u0073') {
    connection.write("Move: down");
    // console.log("down");
  }
  // Right D key
  if (key === '\u0064') {
    connection.write("Move: right");
    // console.log("right");
  }

  // Press Q to send message
  if (key === "\u0071") {
    connection.write(`Say: Hello mudda.`);
  }

  // Press E to send message
  if (key === "\u0065") {
    connection.write(`Say: Hello fadda.`);
  }

  // Press Z to send message
  if (key === "\u007A") {
    connection.write(`Say: Here I am at.`);
  }

  // Press C to send message
  if (key === "\u0063") {
    connection.write(`Say: Camp Grenada.`);
  }
  // create a special key to send messages using Say:
};




const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = { setupInput };