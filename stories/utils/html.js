const bodyElementPattern = /<body[^>]*>([\s\S]*?)<\/body>/i;
const scriptElementPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

export const extractBodyMarkup = (htmlDocument) => {
  const bodyMatch = htmlDocument.match(bodyElementPattern);
  const documentBody = bodyMatch ? bodyMatch[1] : htmlDocument;
  return documentBody.replace(scriptElementPattern, "").trim();
};
