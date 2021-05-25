import io from 'socket.io-client';
const socket = io('https://quizearn.herokuapp.com');

module.exports = {
  socket,
};
