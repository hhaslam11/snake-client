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
  conn.on('connect', client => {
    console.log('Connected');
    conn.write('Name: KAL');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;