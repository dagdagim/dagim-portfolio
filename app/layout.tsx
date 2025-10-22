import './globals.css'
import './override.css'
import { ThemeProvider } from './context/ThemeContext';

const rawLogoPath = '/Generated Image October 21, 2025 - 11_33PM.png';
const logoPath = encodeURI(rawLogoPath).replace(/,/g, '%2C');
const iconHref = `${logoPath}?v=3`;
const faviconSvgPath = '/Generated_Image_October_21__2025_-_11_33PM-removebg-preview.svg';
const faviconHref = `${faviconSvgPath}?v=1`;

export const metadata = {
  title: 'Dagim Bekele — Senior Software & AI Engineer',
  description: 'Portfolio of Dagim Bekele, showcasing intelligent software and AI solutions across mobile, web, and cloud.',
  icons: {
    icon: [
      { url: faviconHref, type: 'image/svg+xml', rel: 'icon' },
      { url: iconHref, type: 'image/png', sizes: '32x32', rel: 'icon alternate' },
      { url: iconHref, type: 'image/png', sizes: '192x192', rel: 'icon alternate' },
    ],
    apple: [{ url: iconHref }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
