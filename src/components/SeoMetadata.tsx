import { Metadata } from 'next';

export const generateMetadata = ({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image?: string;
}): Metadata => ({
  title: `${title} | Cafecito`,
  description,
  openGraph: {
    title,
    description,
    images: image ? [image] : ['/images/og-default.jpg'],
    locale: 'es_CO',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: image ? [image] : ['/images/og-default.jpg']
  }
});