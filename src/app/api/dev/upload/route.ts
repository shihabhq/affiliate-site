import { NextRequest, NextResponse } from "next/server";
import { saveUpload } from "@/lib/dev/blog-editor";

// Dev-only: saves an uploaded image under public/blog/covers/ or
// public/blog/inline/<slug>/. Guarded the same way as /api/dev/posts.

export async function POST(request: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const kind = form.get("kind") === "inline" ? "inline" : "cover";
  const slug = form.get("slug");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const publicPath = saveUpload(
      kind,
      file.name,
      bytes,
      typeof slug === "string" ? slug : undefined,
    );
    return NextResponse.json({ ok: true, path: publicPath });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 400 },
    );
  }
}
