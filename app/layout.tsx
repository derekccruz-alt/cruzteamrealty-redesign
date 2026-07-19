import { Playfair_Display, Geist as GeistFont } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const geist = GeistFont({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Cruz Team Realty — Derek & Gina Cruz | Temecula Valley Real Estate',
  description: 'Southwest Riverside County real estate. Derek & Gina Cruz — 27+ years of combined expertise in new construction, buyer representation, and local market authority.',
  openGraph: {
    title: 'Cruz Team Realty',
    description: 'Real estate expertise across Temecula Valley and Southwest Riverside County.',
    url: 'https://cruzteamrealty.com',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect fill="%237a9b7e" width="32" height="32"/><text x="50%" y="50%" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">C</text></svg>',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable}`}
    >
      <head>
        <meta name="theme-color" content="#f5f1eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className="bg-cream font-geist text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
