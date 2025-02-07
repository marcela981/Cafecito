import { Metadata } from 'next';
import type { CoffeeProduct } from '@/lib/data/coffeeProducts';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  productData?: {
    price: string;
    currency: string;
    availability: 'in_stock' | 'out_of_stock';
  };
};

// Extend the Metadata type with our custom property.
type ExtendedMetadata = Metadata & {
  additionalMetaTags?: { name?: string; property?: string; content: string }[];
};

export const generateMetadata = ({
  title,
  description,
  path,
  image = '/images/og-default.jpg',
  type = 'website',
  productData,
}: SeoProps): ExtendedMetadata => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cafecito.com';
  const canonicalUrl = `${siteUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const metadata: ExtendedMetadata = {
    title: `${title} - Café premium`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Cafecito',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_CO',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    additionalMetaTags: [
      { name: 'fb:app_id', content: process.env.FB_APP_ID || '' },
      { name: 'instagram:creator', content: '@cafecito_ok' },
    ],
  };

  if (productData) {
    metadata.additionalMetaTags!.push(
      { property: 'og:type', content: 'product' },
      { property: 'product:price:amount', content: productData.price },
      { property: 'product:price:currency', content: productData.currency },
      {
        property: 'product:availability',
        content:
          productData.availability === 'in_stock'
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
      }
    );
  }

  return metadata;
};

export const StructuredData = ({ product }: { product?: CoffeeProduct }) => {
  const schema = product ? productSchema(product) : websiteSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cafecito",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${process.env.NEXT_PUBLIC_SITE_URL}/cafe?search={search_term}`,
    "query-input": "required name=search_term"
  }
});

const productSchema = (product: CoffeeProduct) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.title,
  "image": product.image,
  "description": `Café premium de ${product.origin}`,
  "brand": {
    "@type": "Brand",
    "name": "Cafecito"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "COP",
    "availability": "https://schema.org/InStock"
  }
});