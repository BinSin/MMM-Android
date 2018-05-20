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
	 var query = fs.readFileSync(path.resolve(global.root_path + "/android/notiQuery.js"), {encoding: "utf8"});

   	 self.sendSocketNotification("GET_QUERY", query);
    }
  },

});
