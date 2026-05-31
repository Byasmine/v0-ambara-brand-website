'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">AMBARA</span>
              <span className="text-xs text-muted-foreground">Moroccan Nutrition</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
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
        </div>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-lg bg-gold px-6 py-2 text-sm font-semibold text-foreground transition-all hover:bg-gold-dark hover:shadow-lg">
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
            <button className="w-full rounded-lg bg-gold py-2 text-sm font-semibold text-foreground transition-all hover:bg-gold-dark">
              Commander
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
