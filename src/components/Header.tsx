import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "../data/portfolio";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-container">
        <div className="header-shell">
          <a className="brand-mark" href="#inicio" aria-label="Augusto Alexandre — voltar ao início">
            <span className="brand-mark__symbol">{siteConfig.initials}</span>
            <span className="brand-mark__name">{siteConfig.name}</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contato">
            <span>Vamos conversar</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Navegação mobile">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
                <span className="mobile-menu__index">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
