'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-beige-light to-background pt-24">
      {/* Decorative background elements with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gold/10 blur-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute -left-32 bottom-32 h-64 w-64 rounded-full bg-brown/5 blur-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className={`inline-block rounded-full bg-gold/10 px-4 py-2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="text-sm font-semibold text-gold">100% Naturel • Made in Morocco</span>
              </div>
              <h1 className={`text-balance text-5xl font-bold leading-tight text-foreground sm:text-6xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Ce n&apos;est pas du miel.
                <br />
                <span className="text-gold">C&apos;est une expérience</span>
              </h1>
              <p className={`text-pretty text-lg leading-relaxed text-brown-light transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Découvrez l&apos;or liquide du Maroc. AMBARA vous accompagne au quotidien avec des produits 100% naturels, riches en goût et en bienfaits.
              </p>
            </div>

            <div className={`flex flex-col gap-4 sm:flex-row transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button className="group relative inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3 text-base font-semibold text-foreground shadow-lg transition-all hover:shadow-2xl hover:bg-gold-dark active:scale-95">
                <span>Découvrir nos produits</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group relative rounded-full border-2 border-gold bg-transparent px-8 py-3 text-base font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold-dark active:scale-95">
                <span className="flex items-center gap-2">
                  En savoir plus
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </span>
              </button>
            </div>

            {/* Trust badges */}
            <div className={`flex items-center gap-8 pt-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gold">100%</span>
                <span className="text-xs text-brown">Naturel</span>
              </div>
              <div className="h-12 w-px bg-muted"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gold">🇲🇦</span>
                <span className="text-xs text-brown">Marocain</span>
              </div>
              <div className="h-12 w-px bg-muted"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gold">✓</span>
                <span className="text-xs text-brown">Artisanal</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-[500px] w-full max-w-sm">
              {/* Decorative circle with floating animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-2xl animate-pulse"></div>
              
              {/* Product Image */}
              <div className="relative h-full w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-14-gNGx79R16nw8gCU8clfQuNlou5hWu9.jpg"
                  alt="AMBARA Miel Premium"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
