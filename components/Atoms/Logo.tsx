import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Growing Older — home"
    >
      <Image
        src="/logo-mark.svg"
        width={38}
        height={38}
        alt=""
        className="h-9 w-9 rounded-[11px]"
        priority
      />
      <span
        className={`font-serif text-[1.3rem] font-semibold leading-none tracking-tight ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        Growing<span className="text-leaf"> Older</span>
      </span>
    </Link>
  );
};

export default Logo;
