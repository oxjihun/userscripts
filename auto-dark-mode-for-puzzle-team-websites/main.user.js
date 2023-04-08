// ==UserScript==
// @name         Auto Dark Mode for PuzzleTeam Websites
// @namespace    https://github.com/oxjihun/userscripts
// @version      0.1
// @description  Detects OS's mode and alters theme setting for PuzzleTeam websites. Heavily based on this Stack Overflow answer: https://stackoverflow.com/a/57795518
// @author       oxjihun
// @match        https://*.puzzles-mobile.com/*
// @match        https://*.puzzle-norinori.com/*
// @match        https://*.puzzle-minesweeper.com/*
// @match        https://*.puzzle-slant.com/*
// @match        https://*.puzzle-lits.com/*
// @match        https://*.puzzle-galaxies.com/*
// @match        https://*.puzzle-tents.com/*
// @match        https://*.puzzle-battleships.com/*
// @match        https://*.puzzle-pipes.com/*
// @match        https://*.puzzle-hitori.com/*
// @match        https://*.puzzle-heyawake.com/*
// @match        https://*.puzzle-shingoki.com/*
// @match        https://*.puzzle-masyu.com/*
// @match        https://*.puzzle-stitches.com/*
// @match        https://*.puzzle-aquarium.com/*
// @match        https://*.puzzle-tapa.com/*
// @match        https://*.puzzle-star-battle.com/*
// @match        https://*.puzzle-kakurasu.com/*
// @match        https://*.puzzle-skyscrapers.com/*
// @match        https://*.puzzle-futoshiki.com/*
// @match        https://*.puzzle-words.com/*
// @match        https://*.puzzle-shakashaka.com/*
// @match        https://*.puzzle-kakuro.com/*
// @match        https://*.puzzle-jigsaw-sudoku.com/*
// @match        https://*.puzzle-killer-sudoku.com/*
// @match        https://*.puzzle-binairo.com/*
// @match        https://*.puzzle-nonograms.com/*
// @match        https://*.puzzle-loop.com/*
// @match        https://*.puzzle-sudoku.com/*
// @match        https://*.puzzle-light-up.com/*
// @match        https://*.puzzle-bridges.com/*
// @match        https://*.puzzle-shikaku.com/*
// @match        https://*.puzzle-nurikabe.com/*
// @match        https://*.puzzle-dominosa.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    var switcher;
    if (new URL(location.href).hostname.slice(-18) === "puzzles-mobile.com") {
        switcher = Layout.switchNightMode;
    } else {
        switcher = switchNightMode;
    }
    switcher(
        window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            switcher(e.matches);
        });
})();
