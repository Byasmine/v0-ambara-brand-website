'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Granola Original',
    description: 'Orge, noix, miel et fleur d\'oranger. Le classique revisité avec les saveurs traditionnelles.',
    price: '89 MAD',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-16-mMEb8fx4nOyd2ZEw4FR5U4cmN0Yju8.jpg',
    highlights: ['100% Naturel', 'Sans additifs', 'Marocain'],
  },
  {
    id: 2,
    name: 'Granola Noix & Pistache',
    description: 'Noix, pistache et orange. Une explosion de goûts et d\'énergies pour votre vitalité.',
    price: '109 MAD',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-5-KXEV7yZP801Olk9p6Osnz1qLrUVI0U.jpg',
    highlights: ['Protéines', 'Énergie', 'Gourmand'],
  },
  {
    id: 3,
    name: 'Granola Dark & Cacao',
    description: 'Café torréfié et cacao. Pour les amateurs de saveurs profondes et sophistiquées.',
    price: '119 MAD',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-4-X3JYf82sO71hLaTNJSk1N0hglRtPLo.jpg',
    highlights: ['Riche en saveur', 'Antioxydants', 'Premium'],
  },
];

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const whatsappLink = 'https://wa.me/212626556451?text=';

  const addToWhatsApp = (productName: string, price: string) => {
    const message = encodeURIComponent(
      `Bonjour AMBARA,\n\nJe souhaite commander :\n- ${productName} (${price})\n\nMerci!`
    );
    window.open(`${whatsappLink}${message}`, '_blank');
  };
  return (
    <section id="produits" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <div className="inline-block rounded-full bg-gold/10 px-4 py-2">
            <span className="text-sm font-semibold text-gold">Notre gamme</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Trois saveurs,
            <br />
            <span className="text-gold">trois expériences</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-brown-light">
            Chaque granola AMBARA est une combinaison artisanale de miel pur marocain et d&apos;ingrédients naturels sélectionnés.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group rounded-2xl border border-muted bg-white p-6 transition-all duration-300 hover:border-gold hover:shadow-2xl hover:-translate-y-2 ${
                hoveredId === product.id ? 'border-gold shadow-2xl -translate-y-2' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Product Image */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-beige">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="mt-2 text-sm text-brown-light">{product.description}</p>
                  <p className="mt-3 text-2xl font-bold text-gold">{product.price}</p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold transition-all group-hover:bg-gold/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => addToWhatsApp(product.name, product.price)}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-foreground transition-all hover:bg-gold-dark hover:shadow-lg active:scale-95"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
