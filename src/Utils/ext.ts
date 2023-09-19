export function extToString(fileName: string) {
  if (fileName.toLowerCase().indexOf(".ts") !== -1) return "typescript";
  if (
    fileName.toLowerCase().indexOf(".scss") !== -1 ||
    fileName.toLowerCase().indexOf(".sass") !== -1
  )
    return "sass";
  if (fileName.toLowerCase().indexOf(".js") !== -1) return "javascript";
  if (fileName.toLowerCase().indexOf(".json") !== -1) return "json";
  if (fileName.toLowerCase().indexOf(".md") !== -1) return "markdown";
  return "folder";
}
