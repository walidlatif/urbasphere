import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light" | "orange";
  className?: string;
};

const variants = {
  primary: "bg-primary text-white hover:bg-on-tertiary-container",
  secondary: "border border-primary text-primary hover:bg-primary hover:text-white",
  light: "bg-white text-primary hover:bg-on-tertiary-container hover:text-white",
  orange: "bg-on-tertiary-container text-white hover:bg-white hover:text-primary"
};

export default function CTAButton({ children, href, variant = "primary", className = "" }: CTAButtonProps) {
  return (
    <Link
      className={`label-caps motion-surface group inline-flex items-center justify-center gap-3 px-8 py-4 uppercase ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
      <span className="motion-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
