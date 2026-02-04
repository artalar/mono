const path = require("node:path");
const fs = require("node:fs/promises");
const { test, expect } = require("@playwright/test");

const monoCssPath = path.resolve(__dirname, "..", "mono.css");
let monoCss = "";

const wrapperStyles = `
body { margin: 0; background: #eeeeee; }
.component-root { padding: 24px; display: inline-block; }
`.trim();

const bodyStyles = `
body { margin: 0; background: #eeeeee; }
`.trim();

const createWrapperHtml = (markup) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>${monoCss}</style>
    <style>${wrapperStyles}</style>
  </head>
  <body>
    <div class="mono-all component-root">${markup}</div>
  </body>
</html>`;

const createBodyHtml = (markup) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>${monoCss}</style>
    <style>${bodyStyles}</style>
  </head>
  <body class="mono-all">${markup}</body>
</html>`;

const layoutMarkup = `
<aside>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/docs">Docs</a></li>
    </ul>
  </nav>
</aside>
<main>
  <h1>Layout</h1>
  <p>Layout content</p>
</main>
<footer><a href="https://example.com">Footer</a></footer>
`.trim();

const tableMarkup = `
<table>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
`.trim();

const fieldsetMarkup = `
<fieldset>
  <legend>Legend</legend>
  <label>
    <input type="checkbox" checked />
    Option
  </label>
</fieldset>
`.trim();

const headingsMarkup = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
`.trim();

const components = [
  {
    name: "anchor",
    markup: `<a href="https://example.com">Link</a>`,
    selector: "a"
  },
  {
    name: "bold",
    markup: `<span>Text <b>bold</b> style</span>`,
    selector: "b"
  },
  {
    name: "blockquote",
    markup: `<blockquote><p>Blockquote content</p></blockquote>`,
    selector: "blockquote"
  },
  {
    name: "button",
    markup: `<button type="button">Ok</button>`,
    selector: "button"
  },
  {
    name: "checkbox",
    markup: `<label><input type="checkbox" checked /> Checked</label>`,
    selector: 'input[type="checkbox"]'
  },
  {
    name: "code",
    markup: `<span>Inline <code>font-size: 1rem;</code> snippet</span>`,
    selector: "code"
  },
  {
    name: "details",
    markup: `<details open><summary>Summary</summary>Details content</details>`,
    selector: "details"
  },
  {
    name: "summary",
    markup: `<details open><summary>Summary</summary>Details content</details>`,
    selector: "summary"
  },
  {
    name: "heading-h1",
    markup: headingsMarkup,
    selector: "h1"
  },
  {
    name: "heading-h2",
    markup: headingsMarkup,
    selector: "h2"
  },
  {
    name: "heading-h3",
    markup: headingsMarkup,
    selector: "h3"
  },
  {
    name: "heading-h4",
    markup: headingsMarkup,
    selector: "h4"
  },
  {
    name: "input-color",
    markup: `<input type="color" value="#111111" />`,
    selector: 'input[type="color"]'
  },
  {
    name: "input-radio",
    markup: `<label><input type="radio" name="radio" checked /> Selected</label>`,
    selector: 'input[type="radio"]'
  },
  {
    name: "input-range",
    markup: `<input type="range" value="60" />`,
    selector: 'input[type="range"]'
  },
  {
    name: "fieldset",
    markup: fieldsetMarkup,
    selector: "fieldset"
  },
  {
    name: "legend",
    markup: fieldsetMarkup,
    selector: "legend"
  },
  {
    name: "list-item",
    markup: `<ul><li>First</li></ul>`,
    selector: "li"
  },
  {
    name: "unordered-list",
    markup: `<ul><li>First</li><li>Second</li></ul>`,
    selector: "ul"
  },
  {
    name: "paragraph",
    markup: `<p>Paragraph content for mono.</p>`,
    selector: "p"
  },
  {
    name: "pre",
    markup: `<pre>body {<code> font-size: 1rem;</code>}</pre>`,
    selector: "pre"
  },
  {
    name: "strong",
    markup: `<span>Text <strong>strong</strong> style</span>`,
    selector: "strong"
  },
  {
    name: "table",
    markup: tableMarkup,
    selector: "table"
  },
  {
    name: "table-header",
    markup: tableMarkup,
    selector: "th",
    nth: 0
  },
  {
    name: "table-cell",
    markup: tableMarkup,
    selector: "td",
    nth: 0
  },
  {
    name: "layout-aside",
    markup: layoutMarkup,
    selector: "aside"
  },
  {
    name: "layout-main",
    markup: layoutMarkup,
    selector: "main"
  },
  {
    name: "layout-footer",
    markup: layoutMarkup,
    selector: "footer"
  },
  {
    name: "layout-body",
    markup: layoutMarkup,
    selector: "body",
    template: "body"
  }
];

test.beforeAll(async () => {
  monoCss = await fs.readFile(monoCssPath, "utf8");
});

for (const component of components) {
  test(component.name, async ({ page }) => {
    const html =
      component.template === "body"
        ? createBodyHtml(component.markup)
        : createWrapperHtml(component.markup);
    await page.setContent(html);
    const baseLocator = page.locator(component.selector);
    const locator =
      component.nth === undefined ? baseLocator : baseLocator.nth(component.nth);
    await expect(locator).toHaveScreenshot(`${component.name}.png`);
  });
}
