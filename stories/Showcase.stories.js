import { expect, within } from "storybook/test";

import "./showcase.css";

const showcaseMarkup = `
<div class="story-shell">
  <aside>
    <nav class="story-nav">
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#typography">Typography</a></li>
        <li><a href="#actions">Actions</a></li>
        <li><a href="#forms">Forms</a></li>
        <li><a href="#data">Data</a></li>
      </ul>
    </nav>
  </aside>

  <main class="story-main">
    <section id="overview" class="story-hero">
      <h1>MONO Storybook Showcase</h1>
      <p>
        Semantic HTML, brutalist feel, and accessible color contrast defaults.
        This page is the primary demo for <code>@artalar/mono</code>.
      </p>
      <div class="story-actions">
        <a href="https://github.com/artalar/mono" target="_blank">GitHub</a>
        <a href="https://www.npmjs.com/package/@artalar/mono" target="_blank">npm package</a>
        <a href="https://monocss.vercel.app" target="_blank">Live Storybook</a>
      </div>
    </section>

    <section id="typography" class="story-grid">
      <article class="story-card">
        <h2>Typography</h2>
        <h3>Readable defaults</h3>
        <p>
          Headings, paragraphs, inline <code>code</code>, <b>bold</b>, and
          <strong>strong</strong> are styled with semantic selectors only.
        </p>
        <pre>body {<code> font-family: monospace;</code>}</pre>
        <blockquote>
          <p>Good defaults should not block custom branding.</p>
        </blockquote>
      </article>

      <article class="story-card" id="actions">
        <h2>Links and Buttons</h2>
        <p>
          Use native controls and preserve keyboard usability.
          <a href="#forms"> Jump to forms</a>.
        </p>
        <div class="story-actions">
          <button type="button">Primary action</button>
          <button type="button">Secondary action</button>
        </div>
        <details open>
          <summary>Interaction guideline</summary>
          Keep hover, focus, and active states visible and predictable.
        </details>
      </article>
    </section>

    <section id="forms" class="story-grid">
      <article class="story-card">
        <h2>Form Controls</h2>
        <form class="story-form">
          <label>
            <input type="checkbox" checked />
            Newsletter updates
          </label>
          <label>
            <input type="radio" name="contact" checked />
            Contact by email
          </label>
          <label>
            <input type="radio" name="contact" />
            Contact by chat
          </label>
          <label>
            Contrast
            <input type="range" value="70" />
          </label>
          <label>
            Accent color
            <input type="color" value="#111111" />
          </label>
        </form>
      </article>

      <article class="story-card" id="data">
        <h2>Lists and Tables</h2>
        <ul>
          <li>Works with plain semantic markup</li>
          <li>No utility classes required</li>
          <li>Easy to combine with markdown content</li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Button</td>
              <td>Default</td>
            </tr>
            <tr>
              <td>Checkbox</td>
              <td>Checked</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>

    <footer class="story-footer">
      <a href="https://t.me/artalar" target="_blank">@artalar</a>
    </footer>
  </main>
</div>
`;

export default {
  title: "Showcase/Demo Page",
  parameters: {
    layout: "fullscreen"
  }
};

export const DemoPage = {
  render: () => showcaseMarkup,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("heading", { level: 1, name: "MONO Storybook Showcase" })
    ).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Primary action" })).toBeVisible();
    await expect(canvas.getByRole("table")).toBeVisible();
  }
};
