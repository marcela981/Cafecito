import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96">
        <Image
          src="/images/about/hero.jpg"
          alt="Plantación de café colombiano"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-coffee-900/60 flex items-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-coffee-100 black:text-white">
              Raíces Cafeteras
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-coffee-100 black:text-white">
              Cultivando tradición desde el corazón de Colombia
            </p>
          </div>
        </div>
      </div>

      {/* Nuestra Historia */}
      <section className="py-16 bg-coffee-300 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="De la Montaña a tu Taza"
            subtitle="Tres generaciones de pasión cafetera"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/historia.jpg"
                alt="Familia caficultora"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6 text-coffee-700">
              <p className="text-lg">
                Desde 1950, nuestra familia ha cultivado café en las tierras altas del Eje Cafetero. 
                Lo que comenzó como un pequeño cultivo familiar hoy es un legado que une tradición 
                con innovación.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-coffee-900 mb-2">+70 años</h3>
                  <p className="text-coffee-100">De experiencia cafetera</p>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-coffee-900 mb-2">1,200 m</h3>
                  <p className="text-coffee-100">Altitud promedio de cultivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regiones Cafetaleras */}
      <section className="py-16 bg-coffee-100 text-white">
        <div className="container mx-auto px-4  ">
          <SectionHeader
            title="Nuestras Tierras"
            subtitle="Donde el café alcanza su máxima expresión"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-coffee-300">
            <RegionCard 
              title="Eje Cafetero"
              image="/images/regiones/eje-cafetero.jpg"
              characteristics={[
                'Cuna del café colombiano',
                'Variedades: Castillo, Caturra',
                'Notas: Chocolate, frutos secos'
              ]}
            />
            <RegionCard 
              title="Huila"
              image="/images/regiones/huila.jpg"
              characteristics={[
                'Suelos volcánicos',
                'Aroma intenso',
                'Notas: Cítricos, caramelo'
              ]}
            />
            <RegionCard 
              title="Antioquia"
              image="/images/regiones/antioquia.jpg"
              characteristics={[
                'Cultivos de ladera',
                'Acidez balanceada',
                'Notas: Flores silvestres'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Compromisos */}
      <section className="py-16 bg-coffee-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nuestros Pilares"
            subtitle="La esencia de nuestro trabajo"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <CommitmentCard
              icon="/icons/leaf.svg"
              title="Sostenibilidad"
              description="Agricultura regenerativa y comercio justo"
            />
            <CommitmentCard
              icon="/icons/quality.svg"
              title="Calidad Premium"
              description="Selección manual de los mejores granos"
            />
            <CommitmentCard
              icon="/icons/community.svg"
              title="Comunidad"
              description="Apoyo a 150 familias caficultoras"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

type RegionCardProps = {
  title: string;
  image: string;
  characteristics: string[];
};

const RegionCard = ({ title, image, characteristics }: RegionCardProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-coffee-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {characteristics.map((char, index) => (
          <li key={index} className="flex items-center text-coffee-600">
            <svg 
              className="w-4 h-4 mr-2 text-coffee-500 flex-shrink-0" 
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

type CommitmentCardProps = {
  icon: string;
  title: string;
  description: string;
};

const CommitmentCard = ({ icon, title, description }: CommitmentCardProps) => (
  <div className="text-center p-6 border border-coffee-700 rounded-xl">
    <div className="mb-4 flex justify-center">
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-coffee-300">{description}</p>
  </div>
);