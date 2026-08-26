"use client";

import { useRef, useState } from "react";
import CodeMirror, { type ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type BodyEditorProps = {
  value: string;
  onChange: (value: string) => void;
  slug: string;
  onUploadInlineImage: (file: File) => Promise<string | null>;
  onStatus: (message: string) => void;
};

const SNIPPETS = [
  {
    label: "+ CourseCTA",
    text: '<CourseCTA courseId="web-dev-bootcamp" note="..." />',
  },
  {
    label: "+ OfferCTA",
    text: '<OfferCTA title="..." image="/courses/xxx.png" link="trk.udemy.com/xxxxx" note="..." />',
  },
  { label: "+ FinalCTA", text: "<FinalCTA />" },
];

// The body field for the dev blog editor: a syntax-highlighted Markdown/MDX
// editor (CodeMirror) with drag-and-drop image upload, snippet buttons for
// this site's custom MDX components, and a live rendered-Markdown preview
// pane. The preview renders plain Markdown only — <CourseCTA />, <OfferCTA />,
// <FinalCTA /> show as literal text here since they're real React components,
// not Markdown; the "Preview →" link elsewhere in the page (which opens the
// actual /blog/[slug] route on the running dev server) is the accurate,
// fully-interactive preview.
export default function BodyEditor({
  value,
  onChange,
  slug,
  onUploadInlineImage,
  onStatus,
}: BodyEditorProps) {
  const cmRef = useRef<ReactCodeMirrorRef>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);

  const insertSnippet = (snippet: string) => {
    const view = cmRef.current?.view;
    if (!view) {
      onChange(`${value}\n\n${snippet}\n`);
      return;
    }
    const { from, to } = view.state.selection.main;
    const insert = `\n${snippet}\n`;
    view.dispatch({
      changes: { from, to, insert },
      selection: { anchor: from + insert.length },
    });
    view.focus();
  };

  const handleFiles = async (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      onStatus("Only image files can be dropped/uploaded here.");
      return;
    }
    if (!slug) {
      onStatus("Set a slug before adding inline images.");
      return;
    }
    setUploading(true);
    const path = await onUploadInlineImage(file);
    setUploading(false);
    if (path) {
      insertSnippet(`<BlogImage src="${path}" alt="..." caption="..." />`);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        <ToolbarButton
          label={uploading ? "Uploading…" : "+ Inline image"}
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            handleFiles(e.target.files);
            e.target.value = "";
          }}
        />
        {SNIPPETS.map((s) => (
          <ToolbarButton
            key={s.label}
            label={s.label}
            onClick={() => insertSnippet(s.text)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Editor pane — also the drop target for drag-and-drop images */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            handleFiles(e.dataTransfer.files);
          }}
          className={`rounded-lg border overflow-hidden transition-colors ${
            isDragOver
              ? "border-purple-primary ring-2 ring-purple-primary/30"
              : "border-gray-border"
          }`}
        >
          <CodeMirror
            ref={cmRef}
            value={value}
            height="480px"
            theme="light"
            extensions={[markdown()]}
            onChange={onChange}
            basicSetup={{ lineNumbers: false, foldGutter: false }}
            placeholder={
              "লেখা শুরু করুন...\n\n## একটি সেকশন\n\nবাংলায় লিখুন। ছবি এখানে ড্র্যাগ করেও ফেলতে পারেন।"
            }
          />
        </div>

        {/* Live preview pane */}
        <div
          className="rounded-lg border border-gray-border bg-bg-light p-4 overflow-y-auto"
          style={{ maxHeight: 480 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-text mb-3">
            Live preview — text/images/lists only.{" "}
            <span className="normal-case font-normal">
              CourseCTA / OfferCTA / FinalCTA render for real on the
              &quot;Preview →&quot; page.
            </span>
          </p>
          {value.trim() ? (
            <div className="preview-markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-xs text-gray-text italic">Nothing written yet.</p>
          )}
        </div>
      </div>

      <style>{`
        .preview-markdown h2 { font-weight: 700; color: var(--color-dark); margin: 1.25rem 0 0.5rem; font-size: 1.05rem; }
        .preview-markdown h3 { font-weight: 700; color: var(--color-dark); margin: 1rem 0 0.4rem; font-size: 0.95rem; }
        .preview-markdown p { color: var(--color-gray-text); line-height: 1.6; margin-bottom: 0.75rem; font-size: 0.875rem; }
        .preview-markdown ul, .preview-markdown ol { margin: 0 0 0.75rem 1.1rem; color: var(--color-gray-text); font-size: 0.875rem; }
        .preview-markdown li { margin-bottom: 0.25rem; }
        .preview-markdown a { color: var(--color-purple-primary); text-decoration: underline; }
        .preview-markdown img { max-width: 100%; border-radius: 0.5rem; border: 1px solid var(--color-gray-border); margin: 0.5rem 0; }
        .preview-markdown blockquote { border-left: 3px solid var(--color-purple-primary); padding-left: 0.75rem; color: var(--color-dark); font-size: 0.875rem; margin: 0.5rem 0; }
        .preview-markdown strong { color: var(--color-dark); font-weight: 700; }
      `}</style>
    </div>
  );
}

function ToolbarButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="text-xs bg-bg-light border border-gray-border hover:border-purple-primary disabled:opacity-50 px-3 py-1.5 rounded-md transition-colors"
    >
      {label}
    </button>
  );
}
