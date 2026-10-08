import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // 1. Import your Footer component
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3S Land Developers | Obokash Lake View Society",
  description: "Premium, hassle-free land plots in Keraniganj. 20 years of trusted reputation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-200">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer /> {/* 2. Render your Footer globally here */}
        </LanguageProvider>
      </body>
    </html>
  );
}