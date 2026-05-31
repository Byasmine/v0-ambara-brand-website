'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = 'https://wa.me/212626556451?text=Bonjour%20AMBARA%2C%20je%20souhaite%20commander%20vos%20produits.';

  return (
    <header className="sticky top-0 z-50 border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <div className="relative h-12 w-12">
            <Image
              src="/ambara-logo.png"
              alt="AMBARA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">AMBARA</span>
            <span className="text-xs text-muted-foreground">Nutrition Marocaine</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <Link href="#produits" className="text-sm font-medium transition-all hover:text-gold hover:underline underline-offset-4">
            Produits
          </Link>
          <Link href="#bien-etre" className="text-sm font-medium transition-all hover:text-gold hover:underline underline-offset-4">
            Bien-être
          </Link>
          <Link href="#histoire" className="text-sm font-medium transition-all hover:text-gold hover:underline underline-offset-4">
            Notre Histoire
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-all hover:text-gold hover:underline underline-offset-4">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#20BA5A] hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <button className="rounded-lg bg-gold px-6 py-2 text-sm font-semibold text-foreground transition-all hover:bg-gold-dark hover:shadow-lg active:scale-95">
            Commander
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-muted bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="#produits" className="text-sm font-medium transition-colors hover:text-gold">
              Produits
            </Link>
            <Link href="#bien-etre" className="text-sm font-medium transition-colors hover:text-gold">
              Bien-être
            </Link>
            <Link href="#histoire" className="text-sm font-medium transition-colors hover:text-gold">
              Notre Histoire
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-gold">
              Contact
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2 text-sm font-semibold text-white transition-all hover:bg-[#20BA5A]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button className="w-full rounded-lg bg-gold py-2 text-sm font-semibold text-foreground transition-all hover:bg-gold-dark active:scale-95">
              Commander
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
