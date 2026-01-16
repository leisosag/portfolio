import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { Navbar } from '@/components/ui/Navbar';

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
    <html lang="en">
      <body
        className={`${nunito.variable} bg-[#121012] leading-relaxed text-gray-400 antialiased selection:bg-rose-300 selection:text-fuchsia-900`}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex flex-col lg:justify-between">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[100%] lg:flex-col lg:justify-between">
              <div className="font-sans">
                <Navbar />
              </div>
            </header>
            <main id="content" className="pt-24 lg:w-[100%] lg:py-30">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
