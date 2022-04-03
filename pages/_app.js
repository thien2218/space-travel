import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Space Travel</title>
         </Head>
         <Component {...pageProps} />
      </>
   )
}

export default MyApp
