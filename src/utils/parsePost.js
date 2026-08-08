/**
 * Parse a Markdown file with YAML-style frontmatter.
 *
 * Frontmatter format:
 * ---
 * title: My Post
 * date: 2026-08-01
 * description: A short excerpt
 * ---
 *
 * Returns { slug, title, date, description, content }.
 */
export function parsePost(raw, filename) {
  const slug = filename.replace(/^.*[\\/]/, "").replace(/\.md$/, "");
  const lines = raw.split("\n");

  // No frontmatter delimiter found – treat entire file as content
  if (lines[0]?.trim() !== "---") {
    return {
      slug,
      title: slug,
      date: "",
      description: "",
      content: raw,
    };
  }

  const endIndex = lines.slice(1).findIndex((line) => line.trim() === "---");
  if (endIndex === -1) {
    return { slug, title: slug, date: "", description: "", content: raw };
  }

  const fm = {};
  for (let i = 1; i < endIndex + 1; i++) {
    const m = lines[i].match(/^(\w+):\s*(.+)$/);
    if (m) fm[m[1]] = m[2].trim();
  }

  const content = lines.slice(endIndex + 2).join("\n").trim();

  return {
    slug,
    title: fm.title || slug,
    date: fm.date || "",
    description: fm.description || "",
    content,
  };
}
