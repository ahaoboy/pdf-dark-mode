// ==UserScript==
// @name         pdf-dark-mode
// @namespace    http://tampermonkey.net/
// @version      2024-01-01
// @description  pdf-dark-mode
// @author       ahaoboy
// @match        file://**/*.pdf
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var cover = document.createElement("div");
  let css = `
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    mix-blend-mode: difference;
    z-index: 1;
`
  cover.setAttribute("style", css);
  document.body.appendChild(cover);
})();