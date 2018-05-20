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

	 fs.readFile(path.resolve(global.root_path + "/android/notiQuery.js"), 'utf8', function(err, data) {
			 self.sendSocketNotification("GET_QUERY", data);
	 });
    }
  },

});
