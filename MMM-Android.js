/*
 * Author : BinSin
 * https://github.com/BinSin/MMM-Android
 */

Module.register("MMM-Android", {
  defaults: {
	 query: "/android/",
  },

  start: function() {
	 var self = this;
	 Log.log("Starting module: " + this.name);
	 /*
	 self.query.mms = "";
	 self.query.kakao = "";
	 self.query.gmail = "";
	 self.query.call = "";
	 */
	 setInterval(function() {
		self.sendSocketNotification("SEND_ANDROID", self.config.query);
	 }, 2000);

  },

  getDom: function() {
 	 var self = this;

	 var wrapper = document.createElement("div");

	 var mms = document.createElement("div");
	 var kakao = document.createElement("div");
	 var gmail = document.createElement("div");
	 var call = document.createElement("div");

	 var mms_package = document.createElement("tr");
	 var mms_title = document.createElement("td");
	 var mms_text = document.createElement("td");
	 
	 var kakao_package = document.createElement("tr");
	 var kakao_title = document.createElement("td");
	 var kakao_text = document.createElement("td");
 
	 var gmail_package = document.createElement("tr");
	 var gmail_title = document.createElement("td");
	 var gmail_text = document.createElement("td");

	 var call_package = document.createElement("tr");
	 var call_title = document.createElement("td");
	 var call_text = document.createElement("td");
	 
	 mms.className = "mms";
	 kakao.className = "kakao";
	 gmail.className = "gmail";
	 call.className = "call";

	 var strMms = new String(self.mms).split('&');
	 var strKakao = new String(self.kakao).split('&');
	 var strGmail = new String(self.gmail).split('&');
	 var strCall = new String(self.call).split('&');
	 
	 mms_package.innerHTML = strMms[0];
	 mms_title.innerHTML = strMms[1];
	 mms_text.innerHTML = strMms[2];
	
	 kakao_package.innerHTML = strKakao[0];
	 kakao_title.innerHTML = strKakao[1];
	 kakao_text.innerHTML = strKakao[2];
	
	 gmail_package.innerHTML = strGmail[0];
	 gmail_title.innerHTML = strGmail[1];
	 gmail_text.innerHTML = strGmail[2];
	
 	 call_package.innerHTML = strCall[0];
 	 call_title.innerHTML = strCall[1];
	 call_text.innerHTML = strCall[2];

	 mms_package.appendChild(mms_title); 
	 mms_package.appendChild(mms_text);
	 mms.appendChild(mms_package);

	 kakao_package.appendChild(kakao_title); 
	 kakao_package.appendChild(kakao_text); 
	 kakao.appendChild(kakao_package);

	 gmail_package.appendChild(gmail_title); 
	 gmail_package.appendChild(gmail_text); 
	 gmail.appendChild(gmail_package);

	 call_package.appendChild(call_title); 
	 call_package.appendChild(call_text);
	 call.appendChild(call_package);

	 wrapper.appendChild(mms);
	 wrapper.appendChild(kakao);
	 wrapper.appendChild(gmail);
	 wrapper.appendChild(call);
	 
	 return wrapper;

  },

   socketNotificationReceived: function(notification, payload) {
	   var self = this;
	   if(notification == "GET_MMS_QUERY") {
		   self.mms = payload;
		   self.updateDom();
	   }
	   else if(notification =="GET_KAKAO_QUERY") {
		   self.kakao = payload;
		   self.updateDom();
	   }
	   else if(notification =="GET_GMAIL_QUERY") {
		   self.gmail = payload;
		   self.updateDom();
	   }
	   else if(notification =="GET_CALL_QUERY") {
		   self.call = payload;
		   self.updateDom();
	   }
   },
   

});
