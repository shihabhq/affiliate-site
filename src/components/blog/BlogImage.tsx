import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  /** Defaults to a 16:9-ish size; override for a taller screenshot etc. */
  width?: number;
  height?: number;
  caption?: string;
};

// Inline image for blog post bodies (used inside MDX as <BlogImage />).
// Not a fixed aspect ratio like course/cover thumbnails — screenshots vary,
// so width/height can be overridden per image.
export default function BlogImage({
  src,
  alt,
  width = 1200,
  height = 675,
  caption,
}: BlogImageProps) {
  return (
    <figure className="not-prose my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto rounded-xl border border-gray-border"
        sizes="(max-width: 768px) 100vw, 720px"
      />
      {caption && (
        <figcaption className="text-xs text-gray-text text-center mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
