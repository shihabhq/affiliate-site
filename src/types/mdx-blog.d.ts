// Types every blog post .mdx file's exports. See @types/mdx's own
// declare module '*.mdx' doc comment: augmenting it requires redeclaring
// the default export too, since this replaces (not merges with) that one.
import type { Element, MDXProps } from "mdx/types";
import type { BlogMetadata } from "@/lib/blog";

declare module "*.mdx" {
  export const metadata: BlogMetadata;
  export default function MDXContent(props: MDXProps): Element;
}
