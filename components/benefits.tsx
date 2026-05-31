import Image from 'next/image';
import { Leaf, Zap, Heart, Mountain } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Ingrédients Bruts',
    description: 'Sans additifs, sans conservateurs. Juste l\'essence pure de la nature marocaine.',
  },
  {
    icon: Mountain,
    title: 'Produits Locaux',
    description: 'De qualité premium. Chaque ingrédient est sélectionné avec soin dans les montagnes du Maroc.',
  },
  {
    icon: Zap,
    title: 'Énergie & Vitalité',
    description: 'Pour un quotidien plein de peps. L\'association parfaite du miel et du granola.',
  },
  {
    icon: Heart,
    title: 'Plaisir & Équilibre',
    description: 'Savourez la vie authentiquement. Le goût naturel du Maroc sans culpabilité.',
  },
];

export function Benefits() {
  return (
    <section id="bien-etre" className="relative bg-gradient-to-b from-background via-beige to-background py-20 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 top-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Image */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="relative h-[400px] w-full max-w-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-15-metfF7uowIWyrzPXhqypNai73qmfwq.jpg"
                alt="AMBARA bien-manger naturellement"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-gold/10 px-4 py-2">
                <span className="text-sm font-semibold text-gold">Bien-manger</span>
              </div>
              <h2 className="text-balance text-4xl font-bold text-foreground">
                Bien manger
                <br />
                <span className="text-gold">naturellement</span>
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-brown-light">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
