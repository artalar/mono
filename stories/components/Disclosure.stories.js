import { expect, userEvent, within } from "storybook/test";

import "./components.css";
import { renderInMono } from "../utils/renderInMono";

const renderDisclosure = (markup) => renderInMono(markup);

export default {
  title: "Components/Disclosure"
};

export const Details = {
  render: () =>
    renderDisclosure(`
      <details open>
        <summary>Read release notes</summary>
        This details block demonstrates default spacing and border behavior.
      </details>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summaryElement = canvas.getByText("Read release notes");
    const detailsElement = canvasElement.querySelector("details");

    if (!detailsElement) {
      throw new Error("Details element not found.");
    }

    await expect(detailsElement.open).toBe(true);
    await userEvent.click(summaryElement);
    await expect(detailsElement.open).toBe(false);
  }
};

export const Summary = {
  render: () =>
    renderDisclosure(`
      <details open>
        <summary>Summary text</summary>
        Summary style should be visually distinct and interactive.
      </details>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summaryElement = canvas.getByText("Summary text");
    await expect(summaryElement).toBeVisible();
  }
};
