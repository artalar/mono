import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import "./sandbox.css";
import "./mono.css";

extend([a11yPlugin]);

let isSync = true;

const pickerMain = document.getElementById("colorpicker-main");
pickerMain.addEventListener("input", (event) => {
  const main = colord(event.target.value);
  const back = contrast(main);

  document.body.style.setProperty("--mono-main", main.toHex());
  if (isSync) {
    document.body.style.setProperty("--mono-back", back.toHex());
    pickerBack.value = back.toHex();
  }
});

const pickerBack = document.getElementById("colorpicker-back");
pickerBack.addEventListener("input", (event) => {
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
  .addEventListener("input", (event) => {
    isSync = event.target.checked;
  });

document.getElementById("colormix").addEventListener("click", (event) => {
  const main = colord(
    `hsl(${random(360)}, ${random(100, 20)}%, ${random(90, 10)}%)`
  );
  const back = contrast(main);

  console.log(main.toHsl());

  document.body.style.setProperty("--mono-main", main.toHex());
  document.body.style.setProperty("--mono-back", back.toHex());
  pickerMain.value = main.toHex();
  pickerBack.value = back.toHex();
});

document.getElementById("colorinvert").addEventListener("click", (event) => {
  const back = document.body.style.getPropertyValue("--mono-main");
  const main = document.body.style.getPropertyValue("--mono-back");

  document.body.style.setProperty("--mono-main", main);
  document.body.style.setProperty("--mono-back", back);
  pickerMain.value = main;
  pickerBack.value = back;
});

document.getElementById("colorreset").addEventListener("click", toDefault);

function toDefault() {
  document.body.style.setProperty("--mono-main", "#000000");
  document.body.style.setProperty("--mono-back", "#ffffff");
  pickerMain.value = "#000000";
  pickerBack.value = "#ffffff";
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
