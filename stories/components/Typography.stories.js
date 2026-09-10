import "./components.css";
import { renderInMono } from "../utils/renderInMono";

const renderTypography = (markup) => renderInMono(markup);

export default {
  title: "Components/Typography"
};

export const Headings = {
  render: () =>
    renderTypography(`
      <div class="component-column">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
      </div>
    `)
};

export const Paragraph = {
  render: () =>
    renderTypography(`
      <p>
        Paragraph text demonstrates spacing, rhythm and readability for article-like content.
      </p>
    `)
};

export const Blockquote = {
  render: () =>
    renderTypography(`
      <blockquote>
        <p>The quote style keeps text distinct while staying semantic.</p>
      </blockquote>
    `)
};

export const Bold = {
  render: () =>
    renderTypography(`
      <span>Use <b>bold</b> text when semantic emphasis is enough.</span>
    `)
};

export const Strong = {
  render: () =>
    renderTypography(`
      <span>Use <strong>strong</strong> for importance in copy.</span>
    `)
};

export const CodeInline = {
  render: () =>
    renderTypography(`
      <span>Inline code sample: <code>font-size: 1rem;</code></span>
    `)
};

export const Preformatted = {
  render: () =>
    renderTypography(`
      <pre>body {<code> font-family: monospace;</code>}</pre>
    `)
};
