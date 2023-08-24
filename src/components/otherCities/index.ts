interface Theme {
  color: string;
  background: string;
}

interface ThemeStylesInterface {
  light: Theme;
  dark: Theme;
}

export const themeStyles: ThemeStylesInterface = {
  light: { color: "#000", background: "#fff" },
  dark: { color: "#fff", background: "#1b1b1d" },
};
