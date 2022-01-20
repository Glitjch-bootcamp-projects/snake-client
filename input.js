const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, allUserKeys } = require(`./constants`);
let connection;


const handleUserInput = function (key) {
  // Exit the server (not just the terminal)
  if (key === '\u0003') {
    console.log(`I'm outta here.`);
    process.exit();
  };

  // Directional commands
  // Up W key
  if (key === `\u0077`) {
    connection.write(MOVE_UP_KEY);
  };
  // Left A key
  if (key === '\u0061') {
    connection.write(MOVE_LEFT_KEY);
  };
  // Down S key
  if (key === '\u0073') {
    connection.write(MOVE_DOWN_KEY);
  };
  // Right D key
  if (key === '\u0064') {
    connection.write(MOVE_RIGHT_KEY);
  };

  if (key) {
    connection.write(`Say: ${allUserKeys[key]}`)
  };
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