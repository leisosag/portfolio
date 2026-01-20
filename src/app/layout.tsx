import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { ClientNavbar } from '@/components/ui/ClientNavbar';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Leila Sosa Gonzalez',
  description: 'Frontend developer',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} bg-bg-main leading-relaxed text-gray-400 antialiased selection:bg-purple-300 selection:text-purple-900`}
      >
        <ClientNavbar />
        <main className="mx-auto min-h-screen max-w-screen-xl px-6 pt-24 md:px-12 lg:pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
