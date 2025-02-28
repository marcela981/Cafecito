"use client";

import { useCartStore } from '@/lib/stores/cartStore';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: string;
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

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CO').format(price).replace(/,/g, '.');
};

export default function ProductCard({
  id,
  image,
  title,
  price,
  origin,
  roastLevel,
  darkMode = false
}: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      image,
      origin,
    });
  };

  return (
    <div className={`group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
      darkMode ? 'bg-coffee-800' : 'bg-white'
    }`}>
      <div className="relative h-48">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
          quality={80}
        />
      </div>
        {roastLevel && (
          <div className="absolute top-2 left-2 flex items-center gap-1">
            <span className={`w-3 h-3 rounded-full ${roastColors[roastLevel]}`} />
            <span className="text-xs bg-black/90 px-2 py-1 rounded-full text-white">
              Tostado {roastLevel}
            </span>
          </div>
        )}
      </div>
      <div className={`p-4 bg-white ${darkMode ? 'text-coffee-900' : 'text-coffee-900'}`}>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className={`text-sm ${darkMode ? 'text-coffee-300' : 'text-coffee-600'}`}>
            Región: {origin}
          </span>
          <span className="text-xl font-bold">
            ${formatPrice(price)}
          </span>
        </div>
        <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-coffee-500 text-coffee-100 py-2 rounded-lg hover:bg-coffee-600 transition"
      >
        Añadir al Carrito
      </button>
        <Link
          href={`/producto/${id}`}
          className={`block text-center py-2 rounded-lg transition ${
            darkMode 
              ? 'bg-coffee-300 text-white hover:bg-coffee-700' 
              : 'bg-coffee-300 hover:bg-coffee-600 text-white'
          }`}
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}