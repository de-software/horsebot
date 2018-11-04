var SystemLogging = {};

var Timestamp     = require('./timeStamp');
var colors        = require('./userInterface').colors;
var configuration = require('../configuration');

SystemLogging.startup = function() {
  this.info('client', `Session started successfully!`);
};
SystemLogging.info = function(name, data) {
  var newStamp = new Timestamp().format('LLLL');

  name = '[' + colors.blue(name.toUpperCase()) + ']';
  time = '[' + newStamp + ']';

  console.log(`${name}${time}\n${data}\n`);
};
SystemLogging.warn = function(name, data) {
  var newStamp = new Timestamp().format('LLLL');

  name = '[' + colors.yellow(name.toUpperCase()) + ']';
  time = '[' + newStamp + ']';

  console.log(`${name}${time}\n${data}\n`);
};
SystemLogging.error = function(name, data) {
  var newStamp = new Timestamp().format('LLLL');

  name = '[' + colors.red(name.toUpperCase()) + ']';
  time = '[' + newStamp + ']';

  console.log(`${name}${time}\n${data}\n`);
};
module.exports = SystemLogging;
