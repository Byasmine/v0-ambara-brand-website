import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Granola Original',
    description: 'Orge, noix, miel et fleur d\'oranger. Le classique revisité.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-16-mMEb8fx4nOyd2ZEw4FR5U4cmN0Yju8.jpg',
    highlights: ['100% Naturel', 'Sans additifs', 'Marocain'],
  },
  {
    id: 2,
    name: 'Granola Noix & Pistache',
    description: 'Noix, pistache et orange. Une explosion de goûts et d\'énergies.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-5-KXEV7yZP801Olk9p6Osnz1qLrUVI0U.jpg',
    highlights: ['Protéines', 'Énergie', 'Gourmand'],
  },
  {
    id: 3,
    name: 'Granola Dark & Cacao',
    description: 'Café torréfié et cacao. Pour les amateurs de saveurs profondes.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-4-X3JYf82sO71hLaTNJSk1N0hglRtPLo.jpg',
    highlights: ['Riche en saveur', 'Antioxydants', 'Premium'],
  },
];

export function Products() {
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
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-muted bg-white p-6 transition-all duration-300 hover:border-gold hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-beige">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm text-brown-light">{product.description}</p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full rounded-lg bg-gold/10 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-foreground">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
