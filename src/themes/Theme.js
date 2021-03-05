import themesCollection from "./themesCollection";

export default class Theme {

  defaultTheme = 'defaultLight';
  attachEl = null;
  currentThemeName = null;

  constructor(payload) {
    const { attachEl, themeName } = payload;
    this.attachEl = attachEl;
    this.currentThemeName = themeName;
    this._setColors();
  }

  _setColors() {
    const theme = themesCollection[this.currentThemeName || this.defaultTheme];
    Object.keys(theme.colors).forEach(key => {
      this.attachEl.style.setProperty(`--color-${key}`, theme.colors[key])
    })
  }

  setTheme(themeName) {
    this.currentThemeName = themeName;
    this._setColors();
  }


}
