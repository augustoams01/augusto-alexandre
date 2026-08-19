import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { isExternalHref } from "../../lib/contact";

interface ButtonLinkProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  className?: string;
  ariaLabel?: string;
}

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowUpRight,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const classes = `button-base ${variants[variant]} ${className}`.trim();

  if (!href) {
    return (
      <span className={`${classes} cursor-not-allowed opacity-55`} aria-disabled="true">
        <span>{children}</span>
        <Icon aria-hidden="true" size={17} />
      </span>
    );
  }

  const external = isExternalHref(href);

  return (
    <a
      className={classes}
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" size={17} />
    </a>
  );
}
