import { expect, userEvent, within } from "storybook/test";

import "./components.css";
import { renderInMono } from "../utils/renderInMono";

const renderForms = (markup) => renderInMono(markup);

export default {
  title: "Components/Forms"
};

export const InputCheckbox = {
  render: () =>
    renderForms(`
      <label>
        <input type="checkbox" checked />
        Receive updates
      </label>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxInput = canvas.getByLabelText("Receive updates");
    await expect(checkboxInput).toBeChecked();
    await userEvent.click(checkboxInput);
    await expect(checkboxInput).not.toBeChecked();
  }
};

export const InputRadio = {
  render: () =>
    renderForms(`
      <fieldset>
        <legend>Contact channel</legend>
        <label>
          <input type="radio" name="contact" checked />
          Email
        </label>
        <label>
          <input type="radio" name="contact" />
          Telegram
        </label>
      </fieldset>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailRadioInput = canvas.getByLabelText("Email");
    const telegramRadioInput = canvas.getByLabelText("Telegram");
    await expect(emailRadioInput).toBeChecked();
    await userEvent.click(telegramRadioInput);
    await expect(telegramRadioInput).toBeChecked();
  }
};

export const InputRange = {
  render: () =>
    renderForms(`
      <label>
        Contrast
        <input type="range" value="60" />
      </label>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rangeInput = canvas.getByLabelText("Contrast");
    rangeInput.value = "80";
    rangeInput.dispatchEvent(new Event("input", { bubbles: true }));
    await expect(rangeInput.value).toBe("80");
  }
};

export const InputColor = {
  render: () =>
    renderForms(`
      <label>
        Accent
        <input type="color" value="#111111" />
      </label>
    `),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const colorInput = canvas.getByLabelText("Accent");
    colorInput.value = "#222222";
    colorInput.dispatchEvent(new Event("input", { bubbles: true }));
    await expect(colorInput.value).toBe("#222222");
  }
};

export const Fieldset = {
  render: () =>
    renderForms(`
      <fieldset>
        <legend>Preferences</legend>
        <label>
          <input type="checkbox" checked />
          Compact mode
        </label>
      </fieldset>
    `)
};

export const Legend = {
  render: () =>
    renderForms(`
      <fieldset>
        <legend>Legend example</legend>
        <p>Legend text keeps groups understandable.</p>
      </fieldset>
    `)
};
