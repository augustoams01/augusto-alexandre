import { Code2, Heart } from "lucide-react";
import { navigation, siteConfig } from "../data/portfolio";
import { SocialLinks } from "./ui/SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-container footer-content">
        <a className="footer-name" href="#inicio" aria-label="Augusto Alexandre — voltar ao início">
          AUGUSTO <span>ALEXANDRE</span>
        </a>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <SocialLinks includeWhatsapp={false} />

        <div className="footer-bottom">
          <p>© 2026 {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="footer-built"><Code2 size={14} aria-hidden="true" /> Desenvolvido com React + TypeScript <Heart size={12} aria-hidden="true" /></p>
        </div>
      </div>
    </footer>
  );
}
