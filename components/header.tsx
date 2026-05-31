'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = 'https://wa.me/212626556451?text=Bonjour%20AMBARA%2C%20je%20souhaite%20commander%20vos%20produits.';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-white/20 bg-white/40 backdrop-blur-xl shadow-xl' 
        : 'border-b border-white/20 bg-white/30 backdrop-blur-xl'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex-shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95">
          <div className="relative h-12 w-auto">
            <Image
              src="/ambara-logo.png"
              alt="AMBARA Logo"
              height={48}
              width={140}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
          <Link 
            href="#produits" 
            className="group relative text-sm font-medium text-foreground transition-colors"
          >
            Produits
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#bien-etre" 
            className="group relative text-sm font-medium text-foreground transition-colors"
          >
            Bien-être
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#histoire" 
            className="group relative text-sm font-medium text-foreground transition-colors"
          >
            Notre Histoire
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#contact" 
            className="group relative text-sm font-medium text-foreground transition-colors"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2 text-sm font-semibold text-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gold-dark active:scale-95"
          >
            <span>Commander</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex-shrink-0 transition-transform duration-300 active:scale-90"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute h-6 w-6 text-foreground transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`} />
            <X className={`absolute h-6 w-6 text-foreground transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/20 bg-white/30 backdrop-blur-xl px-4 py-3 md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-1">
            <Link href="#produits" className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors">
              Produits
            </Link>
            <Link href="#bien-etre" className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors">
              Bien-être
            </Link>
            <Link href="#histoire" className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors">
              Notre Histoire
            </Link>
            <Link href="#contact" className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors">
              Contact
            </Link>
            <div className="my-1.5 h-px bg-gold/20"></div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-foreground transition-all hover:bg-gold-dark active:scale-95"
            >
              Commander
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
