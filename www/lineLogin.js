// https://github.com/nrikiji/cordova-line-login-plugin/blob/f0ec2a21cb9fa433aabeedfdab7dc84bf700603f/www/lineLogin.js
'use strict';

var exec = require('cordova/exec');

var LineLogin = {

  initialize: function(param, onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'initialize', [param]);
  },

  // @TODO delete param because unnecessary
  login: function(param, onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'login', [param]);
  },

  loginWeb: function(param, onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'loginWeb', [param]);
  },

  logout: function(onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'logout', []);
  },

  getAccessToken: function(onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'getAccessToken', []);
  },

  verifyAccessToken: function(onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'verifyAccessToken', []);
  },

  refreshAccessToken: function(onSuccess, onFail) {
    return exec(onSuccess, onFail, 'LineLogin', 'refreshAccessToken', []);
  }

};
module.exports = LineLogin;
