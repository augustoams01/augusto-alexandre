import type { LucideIcon } from "lucide-react";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig, type ContactKey } from "../../data/portfolio";
import { isExternalHref, normalizeContactHref } from "../../lib/contact";

interface SocialLinkDefinition {
  key: ContactKey;
  label: string;
  icon: LucideIcon;
}

const socialLinks: readonly SocialLinkDefinition[] = [
  { key: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
  { key: "github", label: "GitHub", icon: Github },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "email", label: "E-mail", icon: Mail },
];

interface SocialLinksProps {
  showLabels?: boolean;
  className?: string;
  includeWhatsapp?: boolean;
}

export function SocialLinks({
  showLabels = false,
  className = "",
  includeWhatsapp = true,
}: SocialLinksProps) {
  return (
    <div className={`social-links ${showLabels ? "social-links--labels" : ""} ${className}`}>
      {socialLinks
        .filter(({ key }) => includeWhatsapp || key !== "whatsapp")
        .map(({ key, label, icon: Icon }) => {
          const href = normalizeContactHref(key, siteConfig.contact[key]);
          const content = (
            <>
              <Icon size={showLabels ? 17 : 18} aria-hidden="true" />
              {showLabels ? <span>{label}</span> : <span className="sr-only">{label}</span>}
            </>
          );

          if (!href) {
            return (
              <span
                key={key}
                className="social-link social-link--disabled"
                aria-label={`${label} — link a configurar`}
                aria-disabled="true"
                title={`${label} — link a configurar`}
              >
                {content}
              </span>
            );
          }

          const external = isExternalHref(href);
          return (
            <a
              key={key}
              className="social-link"
              href={href}
              aria-label={`Acessar ${label}`}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            >
              {content}
            </a>
          );
        })}
    </div>
  );
}
