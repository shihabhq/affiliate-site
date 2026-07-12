type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-10 bg-purple-primary rounded-full mt-3 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-4 text-gray-text text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
