import type { Metadata } from 'next';
import { Darker_Grotesque, Space_Grotesk } from 'next/font/google';
import Header from './_noPages/views/header/Header';
import Footer from './_noPages/views/footer/Footer';
import './global.css';

const darkerGrotesqueFont = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-darkerGrotesque',
});

const spaceGrotesqueFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-spaceGrotesque',
});

export const metadata: Metadata = {
  title: 'Portfolio Andrés Altamura',
  description:
    'Portafolio de Esteban Andrés Altamura. Desarrollador frontend Next, React, Typescript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body
        className={`${darkerGrotesqueFont.variable} ${spaceGrotesqueFont.variable}`}
      >
        {/* <header>
          <Header />
        </header> */}

        <main>{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

//Usar variables css en global.css en vez de un config y styles. Body tambien
