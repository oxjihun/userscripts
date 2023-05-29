// ==UserScript==
// @name         Prettier Page for Google Drive
// @namespace    https://github.com/oxjihun/userscripts
// @version      0.1
// @description  한글로 구글 드라이브 이용 시 '페이지'라는 긴 단어가 잘려 보이는 현상을 수정하였음.
// @author       oxjihun
// @match        https://*.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function enhance_text(elem) {
        elem.innerText = parseInt(elem.innerText);
    }

    var page_div, observer;
    function find_page_div_and_watch() {
        const new_page_div = document.querySelector(
            "div[aria-label] > div[style='bottom: 0px; top: 0px;'] > div:nth-child(3) > div[aria-label]"
        );
        if (!Object.is(page_div, new_page_div)) {
            page_div = new_page_div;
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
            enhance_text(page_div.children[3]);
            observer = new MutationObserver(() => {
                enhance_text(page_div.children[3]);
            });
            observer.observe(page_div, {
                attributes: false,
                childList: true,
                subtree: false,
            });
        }
    }

    setInterval(find_page_div_and_watch, 500); // 0.5초마다 페이지 div 탐색
})();
