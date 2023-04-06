// ==UserScript==
// @name        Bypass Age Verification - deviantart.com (enhanced)
// @namespace   https://github.com/oxjihun/userscripts
// @match       https://www.deviantart.com/*
// @grant       none
// @version     1.0
// @author      oxjihun
// @description Bypass age request for NSFW content on Deviantart; now, user doesn't have to manually edit @match. This is a fork of another wonderful script (https://greasyfork.org/scripts/393525)
// @icon        data:image/png;base64,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
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

    function change_color(elem, color) {
        elem.style["color"] = color;
        elem.style["border-color"] = color;
    }

    if (sensitive_content) {
        sensitive_content.href = "";
        sensitive_content.innerText = "Getting Image URL...";
        change_color(sensitive_content, "#ff815f");
        jsonp(
            "http://backend.deviantart.com/oembed?url=" +
                encodeURIComponent(document.URL.split("?")[0]),
            function (data) {
                sensitive_content.href = data.url;
                sensitive_content.innerText = "Open Image URL";
                change_color(sensitive_content, "#00E59B");
            }
        );
    }
})();
