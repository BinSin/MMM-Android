/*
 * Author : BinSin
 * https://github.com/BinSin/MMM-Android
 */

Module.register("MMM-Android", {
  defaults: {
	 query: "/android/notiQuery.js",
  },

  start: function() {
	 var self = this;
	 Log.log("Starting module: " + this.name);
	 setInterval(function() {
		self.sendSocketNotification("SEND_ANDROID", self.query);
	 }, 2000);

  },

  getDom: function() {
 	 var self = this;

	 var wrapper = document.createElement("div");

	 var mms = document.createElement("div");
	 var kakao = document.createElement("div");
	 var gmail = document.createElement("div");
	 var call = document.createElement("div");

	 var kakao_tr = document.createElement("tr");
	 var kakao_td = document.createElement("td");


	 mms.className = "mms";
	 kakao.className = "kakao";
	 gmail.className = "gmail";
	 call.className = "call";
	 
	 kakao_td.innerHTML = self.query;

	 kakao_tr.appendChild(kakao_td);
	 kakao.appendChild(kakao_tr);
	 
	 wrapper.appendChild(kakao);

	 return wrapper;

  },

   socketNotificationReceived: function(notification, payload) {
	   var self = this;
	   if(notification == "GET_QUERY") {
		   console.log("noti query : " + payload);
		   self.query = payload;
		   self.updateDom();
	   }
   },
   

});
