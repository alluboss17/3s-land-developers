import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact 3S Land Developers',
  description:
    'Contact 3S Land Developers by phone, WhatsApp, or email to ask about Abakash Lake View Society and arrange a site visit.',
};

export default function ContactLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}