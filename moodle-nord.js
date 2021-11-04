// ==UserScript==
// @name         Moodle Nord Toggle
// @author       AT
// @match        https://moodle.bfh.ch/*
// ==/UserScript==

let keys = {
    d: false,
    action: false,
};

let url = "https://amartabakovic.github.io/moodle-nord/stylesheet.css";

let fileref = document.createElement("link");
fileref.rel = "stylesheet";
fileref.type = "text/css";
fileref.href = url;
fileref.id = "moou";
fileref.crossorigin = "anonymous";
document.head.append(fileref);

let currentTheme = localStorage.getItem("dark-mode-storage") || '';

setTheme(currentTheme);

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    currentTheme = mode;

    if (mode == "dark") {
        document.getElementById("moou").disabled = false;

    } else if (mode == "light") {
        document.getElementById("moou").disabled = true;

    }
}

addEventListener("keydown", (event) => {
    if (event.key === "d") {
        keys.d = true;
    }
    if (event.metaKey || event.ctrlKey) {
        keys.action = true;
    }

    if (keys.d && keys.action) {
        if (currentTheme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

});

addEventListener("keyup", (event) => {
    if (event.key === "d") {
        keys.d = false;
    }
    if (event.metaKey || event.ctrlKey) {
        keys.action = false;
    }
});
