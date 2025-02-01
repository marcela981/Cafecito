import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';

type CoffeeTypeCardProps = {
  region: string;
  types: string[];
  image: string;
  characteristics: string[];
};


export default function CafePage() {
  return (
    <main>
      {/* Sección Tipos de Café */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Variedades por Región"
            subtitle="Cada región ofrece características únicas"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoffeeTypeCard
              region="Eje Cafetero"
              types={['Supremo', 'Excelso', 'Gourmet']}
              image="/regiones/eje-cafetero.jpg"
              characteristics={['Acidez media', 'Cuerpo balanceado', 'Notas frutales']}
            />
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
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
    <div className="relative h-48">
      <Image
        src={image}
        alt={region}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-coffee-900 mb-2">{region}</h3>

      <div className="mb-4">
        {types.map((type) => (
          <span
            key={type}
            className="inline-block bg-coffee-100 text-coffee-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
          >
            {type}
          </span>
        ))}
      </div>

      <ul className="list-disc pl-5 text-coffee-600">
        {characteristics.map((char, index) => (
          <li key={index} className="mb-2">
            {char}
          </li>
        ))}
      </ul>
    </div>
  </div>
);