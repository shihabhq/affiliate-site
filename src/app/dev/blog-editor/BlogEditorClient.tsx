"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type PostListItem = { slug: string; title: string; date: string };

type FormState = {
  slug: string;
  title: string;
  displayTitle: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  language: "bn" | "en";
  coverImage: string;
  coverImageAlt: string;
  body: string;
};

const today = () => new Date().toISOString().slice(0, 10);

function emptyForm(): FormState {
  return {
    slug: "",
    title: "",
    displayTitle: "",
    description: "",
    date: today(),
    category: "How-To",
    readTime: "5 min read",
    language: "bn",
    coverImage: "",
    coverImageAlt: "",
    body: "",
  };
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogEditorClient() {
  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [isEditingExisting, setIsEditingExisting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const refreshPosts = () => {
    fetch("/api/dev/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data.posts ?? []))
      .catch(() => setStatus("Couldn't load post list."));
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  const loadPost = async (slug: string) => {
    setStatus(null);
    const res = await fetch(`/api/dev/posts?slug=${encodeURIComponent(slug)}`);
    if (!res.ok) {
      setStatus(`Couldn't load "${slug}".`);
      return;
    }
    const data = await res.json();
    setForm({
      slug: data.slug,
      title: data.metadata.title ?? "",
      displayTitle: data.metadata.displayTitle ?? "",
      description: data.metadata.description ?? "",
      date: data.metadata.date ?? today(),
      category: data.metadata.category ?? "",
      readTime: data.metadata.readTime ?? "",
      language: data.metadata.language === "en" ? "en" : "bn",
      coverImage: data.metadata.coverImage ?? "",
      coverImageAlt: data.metadata.coverImageAlt ?? "",
      body: data.body ?? "",
    });
    setIsEditingExisting(true);
  };

  const startNewPost = () => {
    setForm(emptyForm());
    setIsEditingExisting(false);
    setStatus(null);
  };

  const insertSnippet = (snippet: string) => {
    const el = bodyRef.current;
    if (!el) {
      setForm((f) => ({ ...f, body: `${f.body}\n\n${snippet}\n` }));
      return;
    }
    const { selectionStart, selectionEnd, value } = el;
    const next =
      value.slice(0, selectionStart) +
      `\n${snippet}\n` +
      value.slice(selectionEnd);
    setForm((f) => ({ ...f, body: next }));
    requestAnimationFrame(() => el.focus());
  };

  const uploadImage = async (
    file: File,
    kind: "cover" | "inline",
  ): Promise<string | null> => {
    if (kind === "inline" && !form.slug) {
      setStatus("Set a slug before uploading inline images.");
      return null;
    }
    const fd = new FormData();
    fd.append("file", file);
    fd.append("kind", kind);
    if (kind === "inline") fd.append("slug", form.slug);
    const res = await fetch("/api/dev/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (!res.ok) {
      setStatus(data.error ?? "Upload failed.");
      return null;
    }
    return data.path as string;
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const path = await uploadImage(file, "cover");
    if (path) setForm((f) => ({ ...f, coverImage: path }));
    e.target.value = "";
  };

  const handleInlineUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const path = await uploadImage(file, "inline");
    if (path) {
      insertSnippet(`<BlogImage src="${path}" alt="..." caption="..." />`);
    }
    e.target.value = "";
  };

  const handleSave = async () => {
    setStatus(null);
    const slug = form.slug || slugify(form.title);
    if (!slug) {
      setStatus("Give the post a title or a slug first.");
      return;
    }
    if (!form.coverImage) {
      setStatus("Add a cover image before saving.");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/dev/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug,
        metadata: {
          title: form.title,
          ...(form.displayTitle ? { displayTitle: form.displayTitle } : {}),
          description: form.description,
          date: form.date,
          category: form.category,
          readTime: form.readTime,
          language: form.language,
          coverImage: form.coverImage,
          coverImageAlt: form.coverImageAlt,
        },
        body: form.body,
      }),
    });
    const data = await res.json();
    setSaving(false);
    if (!res.ok) {
      setStatus(data.error ?? "Save failed.");
      return;
    }
    setForm((f) => ({ ...f, slug }));
    setIsEditingExisting(true);
    setStatus(`Saved to ${data.file}`);
    refreshPosts();
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-white border border-gray-border rounded-xl p-4 h-fit">
          <p className="text-xs font-bold text-gray-text uppercase tracking-wide mb-3">
            Dev only — Blog Editor
          </p>
          <button
            onClick={startNewPost}
            className="w-full mb-4 bg-purple-primary hover:bg-purple-hover text-white text-sm font-semibold py-2 rounded-lg transition-colors"
          >
            + New post
          </button>
          <ul className="space-y-1">
            {posts.map((p) => (
              <li key={p.slug}>
                <button
                  onClick={() => loadPost(p.slug)}
                  className={`w-full text-left text-xs px-2 py-1.5 rounded-md hover:bg-bg-light transition-colors ${
                    form.slug === p.slug && isEditingExisting
                      ? "bg-bg-light font-semibold text-purple-primary"
                      : "text-dark"
                  }`}
                >
                  {p.title || p.slug}
                </button>
              </li>
            ))}
            {posts.length === 0 && (
              <li className="text-xs text-gray-text">No posts yet.</li>
            )}
          </ul>
          <Link
            href="/blog"
            className="block mt-4 text-xs text-purple-primary hover:text-purple-hover underline"
          >
            View /blog →
          </Link>
        </aside>

        {/* Form */}
        <main className="bg-white border border-gray-border rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h1 className="text-lg font-bold text-dark">
              {isEditingExisting ? `Editing: ${form.slug}` : "New post"}
            </h1>
            <div className="flex items-center gap-3">
              {form.slug && (
                <a
                  href={`/blog/${form.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-purple-primary hover:text-purple-hover underline"
                >
                  Preview →
                </a>
              )}
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-purple-primary hover:bg-purple-hover disabled:opacity-50 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
              >
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>

          {status && (
            <p className="text-xs bg-bg-light border border-gray-border rounded-lg px-3 py-2 text-dark">
              {status}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Title (English — for SEO: <title>, OG, search results)">
              <input
                className="input"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    title: e.target.value,
                    slug: isEditingExisting ? f.slug : slugify(e.target.value),
                  }))
                }
              />
            </Field>
            <Field label="Display title (Bangla — shown to readers as the H1, optional)">
              <input
                className="input"
                value={form.displayTitle}
                onChange={(e) =>
                  setForm((f) => ({ ...f, displayTitle: e.target.value }))
                }
                placeholder="খালি রাখলে উপরের Title দেখানো হবে"
              />
            </Field>
          </div>

          <Field label="Slug">
            <input
              className="input"
              value={form.slug}
              onChange={(e) =>
                setForm((f) => ({ ...f, slug: slugify(e.target.value) }))
              }
              disabled={isEditingExisting}
            />
          </Field>

          <Field label="Description (English — meta description, ≤160 chars)">
            <textarea
              className="input"
              rows={2}
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
            />
          </Field>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Date">
              <input
                type="date"
                className="input"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              />
            </Field>
            <Field label="Category">
              <input
                className="input"
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value }))
                }
              />
            </Field>
            <Field label="Read time">
              <input
                className="input"
                value={form.readTime}
                onChange={(e) =>
                  setForm((f) => ({ ...f, readTime: e.target.value }))
                }
              />
            </Field>
            <Field label="Language">
              <select
                className="input"
                value={form.language}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    language: e.target.value as "bn" | "en",
                  }))
                }
              >
                <option value="bn">Bengali (বাংলা)</option>
                <option value="en">English</option>
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Cover image (16:9)">
              <input
                type="file"
                accept="image/*"
                className="text-xs"
                onChange={handleCoverUpload}
              />
              {form.coverImage && (
                <p className="text-xs text-gray-text mt-1">{form.coverImage}</p>
              )}
            </Field>
            <Field label="Cover image alt text">
              <input
                className="input"
                value={form.coverImageAlt}
                onChange={(e) =>
                  setForm((f) => ({ ...f, coverImageAlt: e.target.value }))
                }
              />
            </Field>
          </div>

          <Field label="Body (Markdown / MDX)">
            <div className="flex flex-wrap gap-2 mb-2">
              <SnippetButton
                label="+ Inline image"
                onClick={() => document.getElementById("inline-upload")?.click()}
              />
              <input
                id="inline-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleInlineUpload}
              />
              <SnippetButton
                label="+ CourseCTA"
                onClick={() =>
                  insertSnippet(
                    '<CourseCTA courseId="web-dev-bootcamp" note="..." />',
                  )
                }
              />
              <SnippetButton
                label="+ OfferCTA"
                onClick={() =>
                  insertSnippet(
                    '<OfferCTA title="..." image="/courses/xxx.png" link="trk.udemy.com/xxxxx" note="..." />',
                  )
                }
              />
              <SnippetButton
                label="+ FinalCTA"
                onClick={() => insertSnippet("<FinalCTA />")}
              />
            </div>
            <textarea
              ref={bodyRef}
              className="input font-mono"
              rows={18}
              value={form.body}
              onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
              placeholder={"লেখা শুরু করুন...\n\n## একটি সেকশন\n\nবাংলায় লিখুন।"}
            />
          </Field>
        </main>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-gray-border);
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: var(--color-dark);
        }
        .input:focus {
          outline: 2px solid var(--color-purple-primary);
          outline-offset: -1px;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-gray-text mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}

function SnippetButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs bg-bg-light border border-gray-border hover:border-purple-primary px-3 py-1.5 rounded-md transition-colors"
    >
      {label}
    </button>
  );
}
