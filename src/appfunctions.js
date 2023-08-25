"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementThemes = exports.themes = void 0;
const themes = (darkMode) => {
    const bodyBackground = darkMode ? "white" : "#2F2F2F";
    const bg = darkMode ? "#efefef" : "#111014";
    const heading = darkMode ? "black" : "white";
    const textColor = darkMode ? "black" : "white";
    return { bodyBackground, textColor, heading, bg };
};
exports.themes = themes;
const elementThemes = (bodyBackground, darkMode, textColor, heading) => {
    const headings = document.getElementsByTagName("h3");
    const text = document.querySelectorAll("div, p");
    document.body.style.backgroundColor = bodyBackground;
    const rootElement = document.getElementById("root");
    if (rootElement) {
        rootElement.style.backgroundColor = bodyBackground;
    }
    const track = document.querySelectorAll(".MuiSwitch-track");
    const trackColor = darkMode ? "#aaa" : "#2f2f2f";
    for (let i = 0; i < track.length; i++) {
        const trackElement = track[i];
        trackElement.style.backgroundColor = trackColor;
    }
    for (let i = 0; i < text.length; i++) {
        const textElement = text[i];
        textElement.style.color = textColor;
    }
    for (let i = 0; i < headings.length; i++) {
        const headingElement = headings[i];
        headingElement.style.color = heading;
    }
};
exports.elementThemes = elementThemes;
