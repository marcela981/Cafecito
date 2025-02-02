import { useCartStore } from '@/lib/stores/cartStore';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  origin: string;
  roastLevel?: 'light' | 'medium' | 'dark';
  darkMode?: boolean;
};

const roastColors = {
  light: 'bg-yellow-300',
  medium: 'bg-orange-500',
  dark: 'bg-coffee-100'
};

export default function ProductCard({
  image,
  title,
  price,
  origin,
  roastLevel,
  darkMode = false
}: ProductCardProps) {
  return (
    <div className={`group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
      darkMode ? 'bg-coffee-800' : 'bg-white'
    }`}>
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {roastLevel && (
          <div className="absolute top-2 left-2 flex items-center gap-1">
            <span className={`w-3 h-3 rounded-full ${roastColors[roastLevel]}`} />
            <span className="text-xs bg-black/90 px-2 py-1 rounded-full">
              Tostado {roastLevel}
            </span>
          </div>
        )}
      </div>
      <div className={`p-4 ${darkMode ? 'text-white' : 'text-coffee-900'}`}>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className={`text-sm ${darkMode ? 'text-coffee-300' : 'text-coffee-600'}`}>
            Región: {origin}
          </span>
          <span className="text-xl font-bold">
            ${new Intl.NumberFormat('es-CO').format(price)}
          </span>
        </div>
        <button 
          onClick={() => addItem({ id, title, price, image })}
          className="mt-4 w-full bg-coffee-500 text-white py-2 rounded-lg hover:bg-coffee-600 transition"
        >
          Añadir al Carrito
        </button>
        <Link
          href={`/producto/${id}`}
          className={`block text-center py-2 rounded-lg transition ${
            darkMode 
              ? 'bg-coffee-600 hover:bg-coffee-700' 
              : 'bg-coffee-300 hover:bg-coffee-600 text-white'
          }`}
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}