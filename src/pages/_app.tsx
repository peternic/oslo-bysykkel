import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Origo - Bysykkel</title>
        <meta name="description" content="Bysykkel oversikt" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
