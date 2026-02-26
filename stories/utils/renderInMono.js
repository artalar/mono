export const renderInMono = (markup, className = "component-surface") => {
  const classNames = ["mono-all", className].filter(Boolean).join(" ");
  return `<div class="${classNames}">${markup}</div>`;
};
