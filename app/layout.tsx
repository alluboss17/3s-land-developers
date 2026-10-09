import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://3s-land-developers.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: '3S Land Developers | Abakash Lake View Society',
    template: '%s | 3S Land Developers',
  },

  description:
    'Discover Abakash Lake View Society by 3S Land Developers. Explore the development, inquire about plot options, and arrange a site visit in Keraniganj, Dhaka.',

  applicationName: '3S Land Developers',

  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: '3S Land Developers',
    title: '3S Land Developers | Abakash Lake View Society',
    description:
      'Explore Abakash Lake View Society, project progress, plot inquiries, and contact information for 3S Land Developers.',
    images: [
      {
        url: '/images/wide.jpg',
        width: 1000,
        height: 600,
        alt: 'Development area at Abakash Lake View Society',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '3S Land Developers | Abakash Lake View Society',
    description:
      'Explore Abakash Lake View Society and contact 3S Land Developers for plot information.',
    images: ['/images/wide.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}