const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.51',
    port: 50541
  });
  conn.on('data', data => {
    console.log('Server says:', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;