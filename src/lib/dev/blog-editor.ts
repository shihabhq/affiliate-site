import fs from "fs";
import path from "path";

// Server-side helpers behind the dev-only blog editor (/dev/blog-editor and
// /api/dev/*). Every caller is expected to have already checked
// process.env.NODE_ENV === "development" — these helpers don't re-check it,
// they just read/write src/content/blog/*.mdx on disk.

const BLOG_DIR = path.join(/*turbopackIgnore: true*/ process.cwd(), "src/content/blog");

export type EditablePost = {
  slug: string;
  metadata: Record<string, unknown>;
  body: string;
};

function splitMetadataAndBody(fileText: string): {
  metadataText: string;
  body: string;
} {
  const marker = "export const metadata = ";
  const start = fileText.indexOf(marker);
  if (start === -1) return { metadataText: "{}", body: fileText };

  const braceStart = fileText.indexOf("{", start);
  let depth = 0;
  let i = braceStart;
  for (; i < fileText.length; i++) {
    if (fileText[i] === "{") depth++;
    else if (fileText[i] === "}") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  const metadataText = fileText.slice(braceStart, i);
  const body = fileText.slice(i).replace(/^;?\s*/, "");
  return { metadataText, body };
}

export function readPost(slug: string): EditablePost | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, "utf8");
  const { metadataText, body } = splitMetadataAndBody(text);
  // Evaluating the post's own metadata object literal. This never runs
  // outside `next dev`, and it's the developer's own local file — the exact
  // same trust boundary as `next dev` itself already crosses when it
  // compiles this .mdx file.
  const metadata = new Function(`"use strict"; return (${metadataText});`)();
  return { slug, metadata, body };
}

export function listPosts(): { slug: string; title: string; date: string }[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .map((slug) => {
      const post = readPost(slug);
      return {
        slug,
        title: (post?.metadata.title as string) ?? slug,
        date: (post?.metadata.date as string) ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function writePost(
  slug: string,
  metadata: Record<string, unknown>,
  body: string,
): string {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(
      "Slug must be lowercase letters, numbers, and hyphens only.",
    );
  }
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  const metadataText = JSON.stringify(metadata, null, 2);
  const content = `export const metadata = ${metadataText};\n\n${body.trim()}\n`;
  fs.writeFileSync(file, content, "utf8");
  return file;
}

const UPLOAD_ROOT = path.join(/*turbopackIgnore: true*/ process.cwd(), "public/blog");

export function saveUpload(
  kind: "cover" | "inline",
  fileName: string,
  bytes: Buffer,
  slug?: string,
): string {
  const safeName = fileName
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");

  let destDir: string;
  let publicPath: string;
  if (kind === "inline") {
    if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
      throw new Error("A valid slug is required for inline images.");
    }
    destDir = path.join(UPLOAD_ROOT, "inline", slug);
    publicPath = `/blog/inline/${slug}/${safeName}`;
  } else {
    destDir = path.join(UPLOAD_ROOT, "covers");
    publicPath = `/blog/covers/${safeName}`;
  }

  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, safeName), bytes);
  return publicPath;
}
