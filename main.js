import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import "./sandbox.css";
import "./mono.css";

extend([a11yPlugin]);

let isSync = true;

document
  .getElementById("colorpicker-main")
  .addEventListener("input", (event) => {
    const main = colord(event.target.value);
    const back = contrast(main);

    document.body.style.setProperty("--mono-main", main.toHex());
    if (isSync) document.body.style.setProperty("--mono-back", back.toHex());
  });

document
  .getElementById("colorpicker-back")
  .addEventListener("input", (event) => {
    const back = colord(event.target.value);
    const main = contrast(back);

    document.body.style.setProperty("--mono-back", back.toHex());
    if (isSync) document.body.style.setProperty("--mono-main", main.toHex());
  });

document
  .getElementById("colorpicker-sync")
  .addEventListener("input", (event) => {
    isSync = event.target.checked;
  });

document.getElementById("colorreset").addEventListener("click", toDefault);

document.getElementById("colorinvert").addEventListener("click", (event) => {
  const back = document.body.style.getPropertyValue("--mono-main");
  const main = document.body.style.getPropertyValue("--mono-back");

  document.body.style.setProperty("--mono-main", main);
  document.body.style.setProperty("--mono-back", back);
  document.getElementById("colorpicker").value = main;
});

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

toDefault();
function toDefault() {
  document.body.style.setProperty("--mono-main", "#000000");
  document.body.style.setProperty("--mono-back", "#ffffff");
  document.getElementById("colorpicker-main").value = "#000000";
  document.getElementById("colorpicker-back").value = "#ffffff";
}
