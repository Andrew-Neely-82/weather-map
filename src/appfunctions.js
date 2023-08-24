export function themes(darkMode) {
  const bodyBackground = darkMode ? "white" : "#2F2F2F";
  const bg = darkMode ? "#efefef" : "#111014";
  const heading = darkMode ? "black" : "white";
  const textColor = darkMode ? "black" : "white";
  return { bodyBackground, textColor, heading, bg };
}

export function elementThemes (bodyBackground, darkMode, textColor, heading) {
  const headings = document.getElementsByTagName("h3");
  const text = document.querySelectorAll("div, p");

  document.body.background = bodyBackground;
  document.getElementById("root").style.background = bodyBackground;

  const track = document.querySelectorAll(".MuiSwitch-track");
  const trackColor = darkMode ? "#aaa" : "#2f2f2f";

  for (let i = 0; i < track.length; i++) {
    track[i].style.background = trackColor;
  }

  for (let i = 0; i < text.length; i++) {
    text[i].style.color = textColor;
  }

  for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = heading;
  }
}
