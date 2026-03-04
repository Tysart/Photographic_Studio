import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-sm border px-4 py-2 text-sm tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({ children, onClick, href, variant = "primary", className = "" }: ButtonProps) {
  const style =
    variant === "primary"
      ? "border-ink bg-ink text-paper hover:bg-[#34312c]"
      : "border-line bg-transparent text-ink hover:border-accent hover:text-accent";

  if (href) {
    return (
      <Link href={href} className={`${base} ${style} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}
