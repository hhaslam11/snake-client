const net = require('net');
const constants = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });
  conn.on('data', data => {
    console.log('Server says:', data);
  });
  conn.on('connect', client => {
    console.log('Connected');
    conn.write('Name: ' + constants.USERNAME);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;