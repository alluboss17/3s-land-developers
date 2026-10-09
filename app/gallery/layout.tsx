import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'View site photographs showing land preparation, equipment, access areas, and development progress at Abakash Lake View Society.',
};

export default function GalleryLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}