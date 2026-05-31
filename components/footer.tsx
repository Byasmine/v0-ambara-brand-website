import Link from 'next/link';
import { Facebook, Instagram, Music, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-muted bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
                <span className="text-sm font-bold text-foreground">A</span>
              </div>
              <div>
                <div className="text-lg font-bold">AMBARA</div>
                <div className="text-xs text-gold">Moroccan Nutrition</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Miel pur et granola artisanal marocain pour accompagner votre quotidien avec bien-être et gourmandise.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gold">Produits</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Granola Original
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Granola Noix & Pistache
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Granola Dark & Cacao
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Miels Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gold">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#histoire" className="transition-colors hover:text-gold">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gold">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Suivre */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gold">Suivez l&apos;aventure</h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Retrouvez-nous sur les réseaux</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ambara.officiel1?igsh=MnN5M2w1OThrcGZ0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@ambara.official1?_r=1&_t=ZS-96pUDMop3GU"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="transition-colors hover:text-gold"
                >
                  <Music className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            © 2024 AMBARA. Tous droits réservés. Made with ♥ in Morocco.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="transition-colors hover:text-gold">
              Politique de confidentialité
            </Link>
            <Link href="#" className="transition-colors hover:text-gold">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
