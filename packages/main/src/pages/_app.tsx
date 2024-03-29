import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '../components/layout';
import { theme } from '../theme';
import { fonts } from '../lib/fonts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

if (!Array.prototype.unique) {
  Array.prototype.unique = function () {
    return [...new Set(this)];
  };
}

if (!Array.prototype.split) {
  Array.prototype.split = function <T>(this: Array<T>, index: number) {
    const result = [this.slice(0, index), this.slice(index)];
    // return the new array
    return result;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/avataaars.png" />
        <style jsx global>
          {`
            :root {
              --font-heading: ${fonts.inter.style.fontFamily};
              --font-mono: ${fonts.notoSansMono.style.fontFamily};
            },
          `}
        </style>
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
