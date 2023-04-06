// ==UserScript==
// @name        Bypass Age Verification - deviantart.com
// @namespace   Prodbydie Script
// @match       put here your deviantart link
// @grant       none
// @version     1.0
// @author      Prodbydie
// @description Bypass age request for NSFW content on Deviantart.
// ==/UserScript==
(function() {
	function jsonp(url, callback) {
		var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
		window[callbackName] = function(data) {
			document.body.removeChild(script);
			callback(data);
		};

		var script = document.createElement('script');
		script.src = url + '&format=jsonp&callback=' + callbackName;
		document.body.appendChild(script);
	}

    window.onload = () => {
        var sensitive_content = document.querySelector("[data-hook='art_stage'] > div > div > div:nth-child(2) > div > div:nth-child(2) > a");
        if(sensitive_content) {


	jsonp("http://backend.deviantart.com/oembed?url=" + encodeURIComponent(document.URL.split("?")[0]), function(data) {
       sensitive_content.href=data["url"]
	   sensitive_content.innerText = 'Unlock';
    }
	);}}
}());
