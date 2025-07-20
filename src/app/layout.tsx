import '@/lib/array-extensions';
import type { Metadata } from 'next';
import { IconBar } from '@/components/layout/iconbar';
import { Navbar } from '@/components/layout/navbar';
import { Provider } from '@/components/ui/provider';
import { fonts } from '@/lib/fonts';
import 'nextra-theme-docs/style.css';
import './globals.css';
const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      className={`${fonts.manrope.variable} ${fonts.codeFont.variable}`}
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Provider defaultTheme="dark" enableSystem={false}>
          <IconBar position="fixed" top="40%" left="1%" />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Rohan Mohapatra | Eat. Sleep. Code. Repeat.'
  // icons: '/images/avataaars.png'
};

export default RootLayout;
