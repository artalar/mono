export const renderInMono = (markup, className = "component-surface") => {
  if (!className) {
    return markup;
  }

  return `<div class="${className}">${markup}</div>`;
};
