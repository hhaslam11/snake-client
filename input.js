const constants = require('./constants');
let connection;
let clearValue;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', key => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') process.exit();

  if (data.toLowerCase() === constants.KEY_MOVE_UP) {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: up');
    }, constants.SPEED_Y);
  }
  if (data.toLowerCase() === constants.KEY_MOVE_LEFT) {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: left');
    }, constants.SPEED_X);
  }
  if (data.toLowerCase() === constants.KEY_MOVE_DOWN) {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: down');
    }, constants.SPEED_Y);
  }
  if (data.toLowerCase() === constants.KEY_MOVE_RIGHT) {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: right');
    }, constants.SPEED_X);
  }
  
  if (data.toLowerCase() === '1') connection.write('Say: :)');
  if (data.toLowerCase() === '2') connection.write('Say: :(');
  if (data.toLowerCase() === '3') connection.write('Say: hello');
};

module.exports = {
  setupInput: setupInput,
  handleUserInput: handleUserInput
};