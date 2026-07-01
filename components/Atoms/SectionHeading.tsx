interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${isCenter ? "justify-center" : ""}`}>{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold leading-[1.12] text-ink sm:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-inkSoft">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
