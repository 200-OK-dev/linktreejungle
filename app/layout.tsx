import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: '@JungleGlass | Links',
  description: 'Discover my work and see where you can find me ✨',
  keywords: ['JungleGlass', 'links', 'portfolio', 'social media'],
  openGraph: {
    title: '@JungleGlass | Links',
    description: 'Discover my work and see where you can find me ✨',
    url: 'https://jungleglass.links',
    siteName: '@JungleGlass Links',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '@JungleGlass | Links',
    description: 'Discover my work and see where you can find me ✨',
    creator: '@JungleGlass',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'h-screen bg-background antialiased',
        inter.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}