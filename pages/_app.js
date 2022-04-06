import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const pathname = router.pathname.slice(1);

   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Space Travel</title>
         </Head>
         
         <div className={`${pathname == '' ? 'home' : pathname}`}>
            <a href="#main" className='skip-to-main'>Skip to main</a>
            <Header pathname={pathname} />
            <Component {...pageProps} />
         </div>
      </>
   )
}

export default MyApp
