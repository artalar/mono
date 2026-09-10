import { expect, within } from "storybook/test";

import initialPageDocument from "../index.html?raw";
import { extractBodyMarkup } from "./utils/html";
import { renderInMono } from "./utils/renderInMono";

const initialOverviewMarkup = extractBodyMarkup(initialPageDocument);

export default {
  title: "Overview/Home",
  parameters: {
    layout: "fullscreen"
  }
};

export const InitialLanding = {
  render: () => renderInMono(initialOverviewMarkup, ""),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("heading", { level: 1, name: "mono - Brutalism in UI" })
    ).toBeVisible();
    await expect(canvas.getByRole("link", { name: "Github" })).toBeVisible();
    await expect(canvas.getByRole("button", { name: "mix" })).toBeVisible();
  }
};
