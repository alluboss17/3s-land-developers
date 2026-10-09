import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about 3S Land Developers and its experience in housing, land development, land filling, and land trading.',
};

export default function AboutLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}