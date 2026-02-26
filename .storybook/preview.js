import "../mono.css";
import "../sandbox.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ["Showcase", "Test Suite"]
      }
    },
    a11y: {
      test: "error"
    }
  },
  decorators: [
    (story) =>
      `<div class="mono-all" style="min-height: 100vh; padding: 1.5rem; background: #eeeeee;">${story()}</div>`
  ]
};

export default preview;