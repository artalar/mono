import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import "./sandbox.css";
import "./mono.css";

extend([a11yPlugin]);

document.getElementById("colorpicker").addEventListener("input", (event) => {
  const main = event.target.value;
  const back = colord(main).invert().toHex();

  document.body.style.setProperty("--mono-main", main);
  document.body.style.setProperty("--mono-back", back);
});
document.getElementById("colorreset").addEventListener("click", (event) => {
  document.body.style.setProperty("--mono-main", "black");
  document.body.style.setProperty("--mono-back", "white");
  document.getElementById("colorpicker").value = "black";
});
