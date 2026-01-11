import path from "path";


export function toEnumKey(filePath: string) {
  const baseName = path.basename(filePath, ".svg")
    .replace(/[^a-zA-Z0-9]/g, "_"); // normalize ALL non-alphanumeric chars to underscores

  return baseName
    .split(/_+/) // split on one or more underscores
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}