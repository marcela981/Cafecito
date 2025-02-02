export type CoffeeProduct = {
    id: string;
    title: string;
    price: number;
    origin: string;
    image: string;
    roastLevel: 'light' | 'medium' | 'dark';
  };
  
  export const featuredCoffees: CoffeeProduct[] = [
    {
      id: '1',
      title: 'Café Supremo Eje Cafetero',
      price: 18900,
      origin: 'Quindío',
      image: '/images/products/instantaneo-oscuro.jpg',
      roastLevel: 'medium'
    },
    {
      id: '2',
      title: 'Soluble Tradicional',
      price: 17900,
      origin: 'Antioquia',
      image: '/images/products/soluble-tradicional.jpg',
      roastLevel: 'dark'
    },
    {
      id: '3',
      title: 'Tostado Oscuro Huila',
      price: 30900,
      origin: 'Huila',
      image: '/images/products/grano-premium.jpg',
      roastLevel: 'dark'
    },
    {
      id: '4',
      title: 'Mezcla Especial de Altura',
      price: 25499,
      origin: 'Valle del Cauca',
      image: '/images/products/mezcla-especial.jpg',
      roastLevel: 'medium'
    }
  ];