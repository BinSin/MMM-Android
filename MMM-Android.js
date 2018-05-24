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
	 setInterval(function() {
		self.sendSocketNotification("SEND_ANDROID", self.config.query);
	 }, 2000);

  },

  getScripts: function() {
	return ["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "https://use.fontawesome.com/releases/v5.0.13/css/all.css"];
  },

  getStyles: function(){
	return [ "MMM-Android.css" ];
  },

  getDom: function() {
 	 var self = this;

	 var wrapper = document.createElement("div");
	 
	 var table = document.createElement("table");
	 table.border = "0";
	 table.width = "1000";
	 table.height = "500";

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
	 
	 table.className= "table";

	 var strMms = new String(self.mms).split('&');
	 var strKakao = new String(self.kakao).split('&');
	 var strGmail = new String(self.gmail).split('&');
	 var strCall = new String(self.call).split('&');

	 mms_package.innerHTML = "<i class='far fa-comment-alt'></i>";
	 mms_title.innerHTML = strMms[1];
	 
	 if(strMms[2] == "undefined")
		 mms_text.innerHTML = "사진";
	 else
		 mms_text.innerHTML = strMms[2];
	 
	 kakao_package.innerHTML = "<i class='fas fa-comment'></i>";
	 kakao_title.innerHTML = strKakao[1];
	 
	 if(strKakao[2] == "undefined") 
		 kakao_text.innerHTML = "사진"
	 else
		 kakao_text.innerHTML = strKakao[2];
	
	 gmail_package.innerHTML = "<i class='far fa-envelope'></i>";
	 gmail_title.innerHTML = strGmail[1];
	 
	 if(strGmail[2] == "undefined") 
		 gmail_text.innterHTML = "사진";
	 else
		 gmail_text.innterHTML = strGmail[2];
	 
	 call_package.innerHTML = "<i class='fas fa-phone'></i>";
 	 call_title.innerHTML = strCall[1];
	 
	 call_text.innerHTML = strCall[2];

	 mms_package.appendChild(mms_title); 
	 mms_package.appendChild(mms_text);

	 kakao_package.appendChild(kakao_title); 
	 kakao_package.appendChild(kakao_text); 

	 gmail_package.appendChild(gmail_title); 
	 gmail_package.appendChild(gmail_text); 

	 call_package.appendChild(call_title); 
	 call_package.appendChild(call_text);

	 table.appendChild(mms_package);
	 table.appendChild(kakao_package);
	 table.appendChild(gmail_package);
	 table.appendChild(call_package);
	
	 wrapper.appendChild(table);

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
