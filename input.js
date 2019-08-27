let connection;
let clearValue;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') process.exit();

  if (data.toLowerCase() === 'w') {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: up');
    }, 80);
  }
  if (data.toLowerCase() === 'a') {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: left');
    }, 50);
  }
  if (data.toLowerCase() === 's') {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: down');
    }, 80);
  }
  if (data.toLowerCase() === 'd') {
    clearInterval(clearValue);
    clearValue = setInterval(() => {
      connection.write('Move: right');
    }, 50);
  }
  if (data.toLowerCase() === '1') connection.write('Say: :)');
  if (data.toLowerCase() === '2') connection.write('Say: :(');
  if (data.toLowerCase() === '3') connection.write('Say: >_>');
};

module.exports = {
  setupInput: setupInput,
  handleUserInput: handleUserInput
};