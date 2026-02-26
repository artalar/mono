import { expect, userEvent, within } from "storybook/test";

import "./components.css";
import { renderInMono } from "../utils/renderInMono";

const renderActions = (markup) => renderInMono(markup);

export default {
  title: "Components/Actions"
};

export const Links = {
  render: () =>
    renderActions(`
      <div class="component-column">
        <a href="#docs">Read docs</a>
        <a href="#guides">Explore guides</a>
      </div>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const docsLink = canvas.getByRole("link", { name: "Read docs" });
    await expect(docsLink).toBeVisible();
    await userEvent.hover(docsLink);
  }
};

export const Buttons = {
  render: () =>
    renderActions(`
      <div class="component-inline">
        <button type="button">Primary action</button>
        <button type="button">Secondary action</button>
      </div>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = canvas.getByRole("button", { name: "Primary action" });
    await expect(primaryButton).toBeVisible();
    primaryButton.focus();
    await expect(primaryButton).toHaveFocus();
    await userEvent.click(primaryButton);
  }
};
