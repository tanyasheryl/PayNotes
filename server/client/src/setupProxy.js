const proxy = require('http-proxy-middleware');
module.exports = function(App) {
  App.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
  App.use(proxy('/user', { target: 'http://localhost:5000' }));
  App.use(proxy('/logout', { target: 'http://localhost:5000' }));
  App.use(proxy('/createNote', { target: 'http://localhost:5000' }));
  App.use(proxy('/updateNote', { target: 'http://localhost:5000' }));
};
