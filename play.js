const { connect } = require(`./client`);
const { setupInput } = require(`./input`)

console.log(`Play.js file read. Rice is cooking...`);


setupInput(connect());
