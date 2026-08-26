import { NextRequest, NextResponse } from "next/server";
import { listPosts, readPost, writePost } from "@/lib/dev/blog-editor";

// Dev-only: reads/writes files under src/content/blog/. Never available
// outside `next dev` — see the NODE_ENV check at the top of every handler.
// This is the write surface behind /dev/blog-editor.

function notFoundOutsideDev() {
  if (process.env.NODE_ENV === "development") return null;
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function GET(request: NextRequest) {
  const blocked = notFoundOutsideDev();
  if (blocked) return blocked;

  const slug = request.nextUrl.searchParams.get("slug");
  if (slug) {
    const post = readPost(slug);
    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(post);
  }
  return NextResponse.json({ posts: listPosts() });
}

export async function POST(request: NextRequest) {
  const blocked = notFoundOutsideDev();
  if (blocked) return blocked;

  const payload = await request.json().catch(() => null);
  const slug = payload?.slug;
  const metadata = payload?.metadata;
  const body = payload?.body;

  if (
    typeof slug !== "string" ||
    typeof body !== "string" ||
    typeof metadata !== "object" ||
    metadata === null
  ) {
    return NextResponse.json(
      { error: "Missing or invalid slug, metadata, or body" },
      { status: 400 },
    );
  }

  try {
    const file = writePost(slug, metadata, body);
    return NextResponse.json({ ok: true, file, slug });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 400 },
    );
  }
}
