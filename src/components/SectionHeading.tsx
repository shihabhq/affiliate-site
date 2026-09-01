type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Render as <h1> for the page's single main heading instead of a section <h2>.
   * Only pass "h1" on pages that don't already render their own <h1> elsewhere. */
  as?: "h1" | "h2";
};

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <Heading className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        {title}
      </Heading>
      <div className={`h-1 w-10 bg-purple-primary rounded-full mt-3 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-4 text-gray-text text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
