import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import "./sandbox.css";
import "./mono.css";

extend([a11yPlugin]);

const DEFAULT_MAIN = "#111111";
const DEFAULT_BACK = "#eeeeee";

const MEDIA_DARK = "(prefers-color-scheme: dark)";
const MEDIA_LIGHT = "(prefers-color-scheme: light)";

detectColorScheme();
function detectColorScheme() {
  if (!window.matchMedia) {
    return;
  }
  function listener({ matches, media }) {
    if (!matches) {
      // Not matching anymore = not interesting
      return;
    }
    if (media === MEDIA_DARK) {
      changeWebsiteTheme(DEFAULT_BACK, DEFAULT_MAIN);
    } else if (media === MEDIA_LIGHT) {
      changeWebsiteTheme(DEFAULT_MAIN, DEFAULT_BACK);
    }
  }
  const mqDark = window.matchMedia(MEDIA_DARK);
  mqDark?.addEventListener("change", listener);
  const mqLight = window.matchMedia(MEDIA_LIGHT);
  mqLight?.addEventListener("change", listener);
}

function changeWebsiteTheme(main, back) {
  document.body.style.setProperty("--mono-main", main);
  document.body.style.setProperty("--mono-back", back);
  pickerMain.value = main;
  pickerBack.value = back;
}

let isSync = true;

const pickerMain = document.getElementById("colorpicker-main");
pickerMain?.addEventListener("input", (event) => {
  const main = colord(event.target.value);
  const back = contrast(main);

  document.body.style.setProperty("--mono-main", main.toHex());
  if (isSync) {
    document.body.style.setProperty("--mono-back", back.toHex());
    pickerBack.value = back.toHex();
  }
});

const pickerBack = document.getElementById("colorpicker-back");
pickerBack?.addEventListener("input", (event) => {
  const back = colord(event.target.value);
  const main = contrast(back);

  document.body.style.setProperty("--mono-back", back.toHex());
  if (isSync) {
    document.body.style.setProperty("--mono-main", main.toHex());
    pickerMain.value = main.toHex();
  }
});

document
  .getElementById("colorpicker-sync")
  ?.addEventListener("input", (event) => {
    isSync = event.target.checked;
  });

document.getElementById("colormix")?.addEventListener("click", (event) => {
  const main = colord(
    `hsl(${random(360)}, ${random(100, 20)}%, ${random(90, 10)}%)`
  );
  const back = contrast(main);

  changeWebsiteTheme(main.toHex(), back.toHex());
});

document.getElementById("colorinvert")?.addEventListener("click", (event) => {
  const back = document.body.style.getPropertyValue("--mono-main");
  const main = document.body.style.getPropertyValue("--mono-back");

  changeWebsiteTheme(main, back);
});

document.getElementById("colorreset")?.addEventListener("click", toDefault);

function toDefault() {
  window.matchMedia(MEDIA_DARK).matches
    ? changeWebsiteTheme(DEFAULT_BACK, DEFAULT_MAIN)
    : changeWebsiteTheme(DEFAULT_MAIN, DEFAULT_BACK);
}

function contrast(color) {
  const isLight = color.isLight();
  let oposite = color;
  let i = 0;
  while (oposite.contrast(color) < 4.5) {
    oposite = isLight ? oposite.darken(0.2) : oposite.lighten(0.2);
    if (i++ > 10) break;
  }
  return oposite;
}

function random(n, min = 0) {
  return Math.max(min, Math.floor(Math.random() * n));
}

toDefault();
