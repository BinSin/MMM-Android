/*
*
*/

'use strict';

var NodeHelper = require("node_helper");
var fs = require("fs");
var path = require("path");

module.exports = NodeHelper.create({

  start: function() {
    console.log("Starting node helper for: " + this.name);
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification == "SEND_ANDROID") {
	 var self = this;

	 fs.readFile(path.resolve(global.root_path + payload + "mmsQuery.js"), 'utf8', function(err, data) {
		 self.sendSocketNotification("GET_MMS_QUERY", data);
	 });
	 fs.readFile(path.resolve(global.root_path + payload + "kakaoQuery.js"), 'utf8', function(err, data) {
		 self.sendSocketNotification("GET_KAKAO_QUERY", data);
	 });
	 fs.readFile(path.resolve(global.root_path + payload + "gmailQuery.js"), 'utf8', function(err, data) {
		 self.sendSocketNotification("GET_GMAIL_QUERY", data);
	 });
	 fs.readFile(path.resolve(global.root_path + payload + "callQuery.js"), 'utf8', function(err, data) {
		 self.sendSocketNotification("GET_CALL_QUERY", data);
	 });
    }
  },

});
