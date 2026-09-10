import "../mono.css";
import "../sandbox.css";

const applyMonoBranding = () => {
  const previewDocumentBody = document.body;
  if (!previewDocumentBody) {
    return;
  }

  previewDocumentBody.classList.add("mono-all");
  previewDocumentBody.style.setProperty("--mono-main", "#111111");
  previewDocumentBody.style.setProperty("--mono-back", "#eeeeee");
  previewDocumentBody.style.margin = "0";
};

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
  },
  decorators: [
    (story) => {
      applyMonoBranding();
      return story();
    }
  ]
};

export default preview;