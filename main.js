import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import "./sandbox.css";
import "./mono.css";

extend([a11yPlugin]);

toDefault();
function toDefault() {
  document.body.style.setProperty("--mono-main", "#000000");
  document.body.style.setProperty("--mono-back", "#ffffff");
  document.getElementById("colorpicker").value = "#000000";
}

document.getElementById("colorpicker").addEventListener("input", (event) => {
  const main = event.target.value;
  const back = colord(main).invert().toHex();

  document.body.style.setProperty("--mono-main", main);
  document.body.style.setProperty("--mono-back", back);
});
document.getElementById("colorreset").addEventListener("click", toDefault);

document.getElementById("colorinvert").addEventListener("click", (event) => {
  console.log(document.body.style);
  const back = document.body.style.getPropertyValue("--mono-main");
  const main = colord(back).invert().toHex();

  document.body.style.setProperty("--mono-main", main);
  document.body.style.setProperty("--mono-back", back);
  document.getElementById("colorpicker").value = main;
});
