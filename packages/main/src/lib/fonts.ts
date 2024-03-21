import { Inter, Noto_Sans_Mono, Poppins } from 'next/font/google';

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '100', '200', '300', '400', '800', '900'],
  variable: '--font-poppins'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '100', '200', '300', '400', '800', '900'],
  variable: '--font-heading'
});

export const fonts = {
  notoSansMono,
  poppins,
  inter
};
