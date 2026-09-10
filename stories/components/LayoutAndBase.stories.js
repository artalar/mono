import { expect, within } from "storybook/test";

import "./components.css";
import { renderInMono } from "../utils/renderInMono";

const renderLayout = (markup, className = "component-surface") => renderInMono(markup, className);

export default {
  title: "Components/Layout and Base"
};

export const Base = {
  render: () =>
    renderLayout(`
      <h1>Base style</h1>
      <p>Base creates predictable defaults for semantic HTML tags.</p>
      <div class="component-inline">
        <a href="#base-link">Read docs</a>
        <button type="button">Action</button>
      </div>
    `)
};

export const Layout = {
  render: () =>
    renderLayout(
      `
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
          <p>Layout styles define spacing for aside, main and footer.</p>
        </main>
        <footer>
          <a href="#footer-link">Footer link</a>
        </footer>
      `,
      "component-surface component-layout"
    ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("navigation")).toBeVisible();
    await expect(canvas.getByRole("main")).toBeVisible();
    await expect(canvas.getByRole("contentinfo")).toBeVisible();
  }
};
