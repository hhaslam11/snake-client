const net = require('net');
const constants = require('./constants');

const onClose = () => {
  console.log('Goodbye');
  process.exit();
};

/**
 * Establishes connection with the game server
 */
const connect = function() {

  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });
  conn.setEncoding('utf8');

  conn.on('data', data => {
    console.log('Server says:', data);
  });

  conn.on('connect', () => {
    console.log('Connected');
    conn.write('Name: ' + constants.USERNAME);
  });

  conn.on('close', onClose);

  conn.on('error', onClose);
  return conn;
};


module.exports = connect;