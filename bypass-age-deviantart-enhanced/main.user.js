// ==UserScript==
// @name        Bypass Age Verification - deviantart.com (enhanced)
// @namespace   https://github.com/oxjihun/userscripts
// @match       https://www.deviantart.com/*
// @grant       none
// @version     1.0
// @author      oxjihun
// @description Bypass age request for NSFW content on Deviantart; now, user doesn't have to manually edit @match. This is a fork of another wonderful script (https://greasyfork.org/scripts/393525)
// @icon        https://raw.githubusercontent.com/oxjihun/userscripts/main/bypass-age-deviantart-enhanced/icon.png
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

    var filter_button = document.querySelector(
        "[data-hook='art_stage'] > div > div > div:nth-child(2) > div > div:nth-child(2) > a"
    );
    if(!filter_button) { // mobile
        filter_button = document.querySelector(
            "[data-hook='art_stage'] > div > div > div > div:nth-child(2) > div > div:nth-child(2) > a"
        );
        filter_button.firstChild.remove(); // https://stackoverflow.com/a/40606838
        filter_button.innerText = 'Log in to view';
    }

    const NULL_HREF = "javascript:void(0)";

    function update_button(color, href, innerText) {
        filter_button.style["color"] = color;
        filter_button.style["border-color"] = color;
        filter_button.href = href;
        filter_button.innerText = innerText;
    }

    if (filter_button) {
        update_button("#FFB35C", NULL_HREF, "Finding URL...");
        jsonp(
            "http://backend.deviantart.com/oembed?url=" +
                encodeURIComponent(document.URL.split("?")[0]),
            function (data) {
                if (new URL(data.url).hostname == "www.deviantart.com") {
                    update_button("white", NULL_HREF, "Failed to find URL");
                } else {
                    update_button("#00E59B", data.url, "Open URL");
                }
            }
        );
    }
})();
