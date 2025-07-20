import { JetBrains_Mono, Manrope } from 'next/font/google';

const codeFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '200', '300', '400', '800'],
  variable: '--font-heading'
});

export const fonts = {
  codeFont,
  manrope
};
