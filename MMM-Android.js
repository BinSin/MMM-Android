/*
 * Author : BinSin
 * https://github.com/BinSin/MMM-Android
 */

Module.register("MMM-Android", {
  defaults: {
	 query: "~/MagicMirror/android/notiQuery.js",
  },

  start: function() {
	 var self = this;
	 Log.log("Starting module: " + this.name);
	 setInterval(function() {
		self.sendSocketNotification("SEND_ANDROID", self.query);
	 	self.updateDom();
	 }, 3000);
  },

  getDom: function() {

	 var wrapper = document.createElement("div");

	 var mms = document.createElement("div");
	 var kakao = document.createElement("div");
	 var gmail = document.createElement("div");
	 var call = document.createElement("div");

	 mms.className = "mms";
	 kakao.className = "kakao";
	 gmail.className = "gmail";
	 call.className = "call";

	 kakao.innerHTML = self.query;

	 wrapper.appendChild(kakao);

	 return wrapper;

  },

   socketNotificationReceived: function(notification, payload) {
	   var self = this;
	   if(notification == "GET_QUERY") {
		   console.log("noti query : " + payload);
		   self.query = payload;
	   }
   },
   

});
