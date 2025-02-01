import CoffeeHeroSection from '@/components/CoffeeHeroSection';
import Image from 'next/image';



interface ProcessStepProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  origin: string;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section Mejorado */}
      <CoffeeHeroSection 
        title="Café 100% Colombiano" 
        subtitle="De las montañas del Eje Cafetero a tu mesa" 
      />

      {/* Sección Nuestro Proceso */}
      <section className="py-16 bg-coffee-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-coffee-900">
            Nuestra Tradición Cafetera
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep 
              image="/images/cultivo.jpg"
              title="Cultivo Artesanal"
              description="Cosechado a mano en las tierras altas de Colombia"
            />
            <ProcessStep 
              image="/images/tostado.jpg"
              title="Tostado Perfecto"
              description="Tostado lento para resaltar los sabores únicos"
              reverse
            />
            <ProcessStep 
              image="/images/molido.jpg"
              title="Molienda Personalizada"
              description="Selecciona el grosor ideal para tu método de preparación"
            />
          </div>
        </div>
      </section>

      {/* Sección Colección Premium */}
      <section className="py-16 bg-coffee-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestra Selección Premium
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="/images/products/grano-premium.jpg"
              title="Café en Grano Premium"
              price={30.000}
              origin="Huila"
            />
            <ProductCard 
              image="/images/products/soluble-tradicional.jpg"
              title="Soluble Tradicional"
              price={17.000}
              origin="Antioquia"
            />
            <ProductCard 
              image="/images/products/instantaneo-oscuro.jpg"
              title="Instantáneo Tostado Oscuro"
              price={18.900}
              origin="Quindío"
            />
            <ProductCard 
              image="/images/products/mezcla-especial.jpg"
              title="Mezcla Especial"
              price={22.499}
              origin="Valle del Cauca"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// Componente de Paso del Proceso
const ProcessStep = ({ image, title, description, reverse = false }: ProcessStepProps) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-col-reverse' : ''} gap-4`}>
    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold text-coffee-800 mb-2">{title}</h3>
      <p className="text-coffee-600">{description}</p>
    </div>
  </div>
);

const ProductCard = ({ image, title, price, origin }: ProductCardProps) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-coffee-900">{title}</h3>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-coffee-600 font-medium">{origin}</span>
        <span className="text-xl font-bold text-coffee-900">${price}</span>
      </div>
      <button className="mt-4 w-full bg-coffee-500 text-white py-2 rounded-lg hover:bg-coffee-600 transition">
        Ver Detalles
      </button>
    </div>
  </div>
);


