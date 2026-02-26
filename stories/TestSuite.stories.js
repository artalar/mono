import { expect, userEvent, within } from "storybook/test";

const typographyMarkup = `
<section>
  <h1>Typography</h1>
  <h2>Heading two</h2>
  <p>Paragraph content for mono styles.</p>
  <p>Inline <code>code</code> and <strong>strong</strong> text.</p>
  <blockquote><p>Quote example.</p></blockquote>
  <a href="#typography-link">Read docs</a>
</section>
`;

const actionMarkup = `
<section>
  <h2>Actions</h2>
  <a href="#action-link">Read docs</a>
  <button type="button">Primary action</button>
  <button type="button">Secondary action</button>
</section>
`;

const inputMarkup = `
<form>
  <fieldset>
    <legend>Preferences</legend>
    <label>
      <input type="checkbox" checked />
      Email updates
    </label>
    <label>
      <input type="radio" name="channel" checked />
      Email
    </label>
    <label>
      <input type="radio" name="channel" />
      Telegram
    </label>
    <label>
      Accent color
      <input type="color" value="#111111" />
    </label>
    <label>
      Spacing
      <input type="range" value="60" />
    </label>
  </fieldset>
</form>
`;

const dataMarkup = `
<section>
  <h2>Data</h2>
  <details open>
    <summary>Guidelines</summary>
    Keep semantic elements native.
  </details>
  <ul>
    <li>First item</li>
    <li>Second item</li>
  </ul>
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
</section>
`;

const layoutMarkup = `
<aside>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#docs">Docs</a></li>
    </ul>
  </nav>
</aside>
<main>
  <h2>Main content</h2>
  <p>Layout content goes here.</p>
</main>
<footer>
  <a href="#footer">Footer link</a>
</footer>
`;

export default {
  title: "Test Suite/Components"
};

export const Typography = {
  render: () => typographyMarkup,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("heading", { level: 1, name: "Typography" })).toBeVisible();
    await expect(canvas.getByText("Paragraph content for mono styles.")).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Read docs" })).toBeVisible();
  }
};

export const Actions = {
  render: () => actionMarkup,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = canvas.getByRole("button", { name: "Primary action" });
    await expect(primaryButton).toBeVisible();
    await userEvent.hover(canvas.getByRole("link", { name: "Read docs" }));
    primaryButton.focus();
    await expect(primaryButton).toHaveFocus();
    await userEvent.click(primaryButton);
  }
};

export const Inputs = {
  render: () => inputMarkup,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxInput = canvas.getByLabelText("Email updates");
    const emailRadioInput = canvas.getByLabelText("Email");
    const telegramRadioInput = canvas.getByLabelText("Telegram");

    await expect(checkboxInput).toBeChecked();
    await userEvent.click(checkboxInput);
    await expect(checkboxInput).not.toBeChecked();

    await expect(emailRadioInput).toBeChecked();
    await userEvent.click(telegramRadioInput);
    await expect(telegramRadioInput).toBeChecked();
    await expect(emailRadioInput).not.toBeChecked();

    const colorInput = canvas.getByLabelText("Accent color");
    colorInput.value = "#222222";
    colorInput.dispatchEvent(new Event("input", { bubbles: true }));
    await expect(colorInput.value).toBe("#222222");

    const rangeInput = canvas.getByLabelText("Spacing");
    rangeInput.value = "80";
    rangeInput.dispatchEvent(new Event("input", { bubbles: true }));
    await expect(rangeInput.value).toBe("80");
  }
};

export const DataStructures = {
  render: () => dataMarkup,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summaryElement = canvas.getByText("Guidelines");
    const detailsElement = canvasElement.querySelector("details");

    if (!detailsElement) {
      throw new Error("Details element not found.");
    }

    await expect(detailsElement.open).toBe(true);
    await userEvent.click(summaryElement);
    await expect(detailsElement.open).toBe(false);
    await userEvent.click(summaryElement);
    await expect(detailsElement.open).toBe(true);

    await expect(canvas.getByRole("list")).toBeVisible();
    await expect(canvas.getByRole("table")).toBeVisible();
  }
};

export const Layout = {
  render: () => layoutMarkup,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("navigation")).toBeVisible();
    await expect(canvas.getByRole("main")).toBeVisible();
    await expect(canvas.getByRole("contentinfo")).toBeVisible();
  }
};
