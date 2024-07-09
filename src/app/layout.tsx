import type { Metadata } from 'next';
import { Darker_Grotesque, Space_Grotesk } from 'next/font/google';
import Header from './_noPages/views/header/Header';
import Footer from './_noPages/views/footer/Footer';
import './global.css';

// If loading a variable font, you don't need to specify the font weight
const darkerGrotesqueFont = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-darkerGrotesqueFont',
  display: 'swap',
});

const spaceGrotesqueFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesqueFont',

  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio Lucía Rossini',
  description: 'Portafolio de Lucía Rossini. Diseñadora UX / UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${darkerGrotesqueFont.variable} ${spaceGrotesqueFont.variable}`}
    >
      <head>
        <link rel='icon' type='image/svg' href='../favicon.svg' />
      </head>
      <body>
        <header>
          <Header />
        </header>

        <main>{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

//Usar variables css en global.css en vez de un config y styles. Body tambien
