import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leila Sosa Gonzalez | Frontend Engineer',
  description:
    'Leila Sosa Gonzalez is a frontend engineer specializing in React, TypeScript, and design systems.',
};

// Restore the saved theme before the first paint.
const restoreTheme =
  "try { if (localStorage.getItem('portfolio-theme') === 'dark') document.documentElement.dataset.theme = 'dark'; } catch {}";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
