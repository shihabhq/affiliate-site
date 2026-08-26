import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogEditorClient from "./BlogEditorClient";

// Dev-only blog authoring UI. Guarded so it (and the /api/dev/* routes it
// talks to) simply don't exist outside `next dev` — see AGENTS notes in
// src/lib/dev/blog-editor.ts.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function BlogEditorPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <BlogEditorClient />;
}
