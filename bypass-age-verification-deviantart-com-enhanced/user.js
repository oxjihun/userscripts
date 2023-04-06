// ==UserScript==
// @name        Bypass Age Verification - deviantart.com (enhanced)
// @namespace   https://github.com/oxjihun/userscripts
// @match       https://www.deviantart.com/*
// @grant       none
// @version     1.0
// @author      oxjihun
// @description Bypass age request for NSFW content on Deviantart; now, user doesn't have to manually edit @match. This is a fork of another wonderful script (https://greasyfork.org/scripts/393525)
// ==/UserScript==
(function () {
    function jsonp(url, callback) {
        var callbackName =
            "jsonp_callback_" + Math.round(100000 * Math.random());
        window[callbackName] = function (data) {
            document.body.removeChild(script);
            callback(data);
        };

        var script = document.createElement("script");
        script.src = url + "&format=jsonp&callback=" + callbackName;
        document.body.appendChild(script);
    }

    var sensitive_content = document.querySelector(
        "[data-hook='art_stage'] > div > div > div:nth-child(2) > div > div:nth-child(2) > a"
    );
    if (sensitive_content) {
        sensitive_content.href = "";
        sensitive_content.innerText = "Getting Image URL...";
        jsonp(
            "http://backend.deviantart.com/oembed?url=" +
                encodeURIComponent(document.URL.split("?")[0]),
            function (data) {
                sensitive_content.href = data["url"];
                sensitive_content.innerText = "Open Image URL";
            }
        );
    }
})();
