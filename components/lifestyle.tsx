import Image from 'next/image';

export function Lifestyle() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <div className="inline-block rounded-full bg-gold/10 px-4 py-2">
            <span className="text-sm font-semibold text-gold">Moment AMBARA</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Intégrez AMBARA
            <br />
            <span className="text-gold">à votre quotidien</span>
          </h2>
        </div>

        {/* Lifestyle Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Main featured image */}
          <div className="relative overflow-hidden rounded-2xl border border-muted md:row-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page-12-52TQ6dMv2wjcyk4gC0SmmA5NP53gXU.jpg"
              alt="Petit déjeuner AMBARA"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
          </div>

          {/* Right column - stacked content */}
          <div className="space-y-6">
            {/* Usage card 1 */}
            <div className="rounded-2xl border border-muted bg-white p-8">
              <h3 className="mb-3 text-2xl font-bold text-foreground">Au petit-déjeuner</h3>
              <p className="text-brown-light">
                Versez le granola AMBARA sur votre yaourt ou lait. Arrosez de miel pur marocain. Une explosion de saveurs et d&apos;énergie pour bien commencer la journée.
              </p>
            </div>

            {/* Usage card 2 */}
            <div className="rounded-2xl border border-muted bg-white p-8">
              <h3 className="mb-3 text-2xl font-bold text-foreground">En collation</h3>
              <p className="text-brown-light">
                Les boules énergétiques AMBARA sont parfaites pour un coup de boost. Goût authentique, bienveillance nutritionnelle. Votre allié de l&apos;après-midi.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 rounded-2xl border border-gold bg-gradient-to-r from-beige to-background p-8 text-center md:p-12">
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Prêt à vivre l&apos;expérience AMBARA ?
          </h3>
          <p className="mb-8 text-brown-light">
            Rejoignez des milliers de clients satisfaits qui ont transformé leur quotidien avec AMBARA.
          </p>
          <button className="rounded-lg bg-gold px-8 py-3 text-base font-semibold text-foreground shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl">
            Commander maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
