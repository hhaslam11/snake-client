const connect = require('./client');

const setupInput = function() {
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
  if (data === 'a') console.log('woah dude');
};


console.log('Connecting ...');
setupInput();
connect();