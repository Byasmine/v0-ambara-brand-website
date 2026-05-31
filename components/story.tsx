'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Story() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="histoire" className="relative bg-gradient-to-b from-background via-beige-light to-background py-20 sm:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -right-64 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="inline-block rounded-full bg-gold/10 px-4 py-2">
                <span className="text-sm font-semibold text-gold">Notre histoire</span>
              </div>
              <h2 className="text-balance text-4xl font-bold text-foreground">
                Né de la passion pour
                <br />
                <span className="text-gold">le Maroc</span>
              </h2>
            </div>

            <div className={`space-y-6 text-brown-light transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p>
                AMBARA est née d&apos;une conviction simple : les meilleures choses viennent des endroits où elles naissent naturellement. Entre les montagnes de l&apos;Atlas et les ruches des apiculteurs marocains, nous avons créé une marque qui incarne l&apos;essence du bien-être.
              </p>
              <p>
                Chaque pot, chaque sachet de granola est une histoire. Une histoire de tradition, de terre fertile, et de passion pour la qualité. Pas de compromis, pas d&apos;additifs. Juste l&apos;or liquide du Maroc combiné aux meilleurs ingrédients naturels.
              </p>
              <p>
                Notre mission ? Vous accompagner au quotidien avec des produits authentiques qui font du bien à votre corps et à votre âme. AMBARA, c&apos;est plus qu&apos;un produit. C&apos;est une expérience marocaine dans votre assiette.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="group cursor-default rounded-lg bg-gold/5 p-4 transition-all hover:bg-gold/10">
                <div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">100%</div>
                <div className="text-xs text-brown">Naturel</div>
              </div>
              <div className="group cursor-default rounded-lg bg-gold/5 p-4 transition-all hover:bg-gold/10">
                <div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">🇲🇦</div>
                <div className="text-xs text-brown">Artisanal</div>
              </div>
              <div className="group cursor-default rounded-lg bg-gold/5 p-4 transition-all hover:bg-gold/10">
                <div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">♥</div>
                <div className="text-xs text-brown">Passion</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative h-[500px] w-full max-w-sm hover:scale-105 transition-transform duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-1-fmLQWCWgZW98rHthqV5BcMqkFK2iU6.jpg"
                alt="AMBARA Marque Marocaine"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
