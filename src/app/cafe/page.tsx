import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { featuredCoffees } from '@/lib/data/coffeeProducts';

type CoffeeTypeCardProps = {
  region: string;
  types: string[];
  image: string;
  characteristics: string[];
};

export default function CafePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section Café */}
      <section className="relative h-96 bg-coffee-900 text-white">
        <div className="container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestro Café Premium
            </h1>
            <p className="text-xl md:text-2xl text-coffee-200">
              Selección de las mejores variedades colombianas
            </p>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-coffee-500">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nuestros Exclusivos"
            subtitle="Los favoritos de nuestros clientes"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCoffees.map((coffee) => (
              <ProductCard
                key={coffee.id}
                image={coffee.image}
                title={coffee.title}
                price={coffee.price}
                origin={coffee.origin}
                roastLevel={coffee.roastLevel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tipos por Región */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Orígenes y Características"
            subtitle="Descubre la diversidad de nuestras regiones cafetaleras"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoffeeTypeCard
              region="Eje Cafetero"
              types={['Supremo', 'Excelso', 'Gourmet']}
              image="/images/regiones/eje-cafetero.jpg"
              characteristics={[
                'Altitud: 1,200 - 2,000 m.s.n.m',
                'Notas: Frutos rojos, chocolate',
                'Cuerpo: Balanceado'
              ]}
            />
            <CoffeeTypeCard
              region="Huila"
              types={['Especial', 'Tostado Oscuro']}
              image="/images/regiones/huila.jpg"
              characteristics={[
                'Altitud: 1,500 - 2,300 m.s.n.m',
                'Notas: Cítricos, caramelo',
                'Acidez: Brillante'
              ]}
            />
            <CoffeeTypeCard
              region="Santander"
              types={['Tradicional', 'Orgánico']}
              image="/images/regiones/santander.jpg"
              characteristics={[
                'Altitud: 800 - 1,600 m.s.n.m',
                'Notas: Nueces, cacao',
                'Cuerpo: Completo'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Más vendidos */}
      <section className="py-16 bg-coffee-900 text-white">
        <div className="container mx-auto px-4 text-coffee-100">
          <SectionHeader
            title="Los Más Populares"
            subtitle="Lo que nuestros clientes prefieren"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCoffees.slice(0,4).map((coffee) => (
              <ProductCard
                key={coffee.id}
                image={coffee.image}
                title={coffee.title}
                price={coffee.price}
                origin={coffee.origin}
                darkMode
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const CoffeeTypeCard = ({
  region,
  types,
  image,
  characteristics,
}: CoffeeTypeCardProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
    <div className="relative h-48">
      <Image
        src={image}
        alt={region}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-coffee-300 mb-2">{region}</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {types.map((type) => (
          <span
            key={type}
            className="px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm"
          >
            {type}
          </span>
        ))}
      </div>
      <ul className="space-y-2 text-coffee-300">
        {characteristics.map((char, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-coffee-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {char}
          </li>
        ))}
      </ul>
    </div>
  </div>
);