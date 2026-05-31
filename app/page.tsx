import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { Benefits } from '@/components/benefits';
import { Lifestyle } from '@/components/lifestyle';
import { Story } from '@/components/story';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Lifestyle />
        <Story />
      </main>
      <Footer />
    </>
  );
}
