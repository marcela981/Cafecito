import Image from 'next/image';
import Link from 'next/link';

type CoffeeHeroProps = {
  title: string;
  subtitle: string;
};

export default function CoffeeHeroSection({ title, subtitle }: CoffeeHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/hero-bg.jpg"
          alt="Plantación de café colombiano"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-700/60" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-center md:text-left ">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="/cafe"
                className="bg-coffee-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-coffee-600 transition transform hover:scale-105"
              >
                Explorar Variedades
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}