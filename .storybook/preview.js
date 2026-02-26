import "../mono.css";
import "../sandbox.css";

const preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: [
          "Overview",
          ["Home"],
          "Components",
          ["Layout and Base", "Typography", "Actions", "Forms", "Disclosure", "Data Display"]
        ]
      }
    },
    a11y: {
      test: "error"
    }
  }
};

export default preview;