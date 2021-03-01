import themesCollection from "./themesCollection";

export default class Theme {

  defaultTheme = 'defaultLight'
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
    console.log(this.attachEl, 'this.attachEl');
    Object.keys(theme).forEach(key => {
      this.attachEl.setAttribute(`--color-${key}`, theme[key])
    })
  }

  setTheme(themeName) {
    this.currentThemeName = themeName;
    this._setColors();
  }


}
