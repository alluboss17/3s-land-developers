import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Abakash Lake View Society',
  description:
    'Explore the featured development from 3S Land Developers and inquire about plot options, current availability, and site visits.',
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}