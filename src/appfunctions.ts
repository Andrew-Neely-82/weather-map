interface Theme {
  bodyBackground: string;
  textColor: string;
  heading: string;
  bg: string;
}

export const themes = (darkMode: boolean): Theme => {
  const bodyBackground = darkMode ? "white" : "#2F2F2F";
  const bg = darkMode ? "#efefef" : "#111014";
  const heading = darkMode ? "black" : "white";
  const textColor = darkMode ? "black" : "white";
  return { bodyBackground, textColor, heading, bg };
};

interface ElementThemes {
  (bodyBackground: string, darkMode: boolean, textColor: string, heading: string): void;
}

interface ElementThemes {
  (bodyBackground: string, darkMode: boolean, textColor: string, heading: string): void;
}

export const elementThemes: ElementThemes = (bodyBackground, darkMode, textColor, heading) => {
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
    const trackElement = track[i] as HTMLElement;
    trackElement.style.backgroundColor = trackColor;
  }

  for (let i = 0; i < text.length; i++) {
    const textElement = text[i] as HTMLElement;
    textElement.style.color = textColor;
  }

  for (let i = 0; i < headings.length; i++) {
    const headingElement = headings[i] as HTMLElement;
    headingElement.style.color = heading;
  }
};
