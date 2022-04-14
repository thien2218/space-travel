import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const pathname = router.pathname.slice(1);
   const changeTab = (e, l) => {
      const children = e.target.parentNode.children;
      const nextSib = e.target.nextElementSibling;
      const prevSib = e.target.previousElementSibling;

      if(e.key=='ArrowLeft') {

         if(prevSib == null) {
            children[l-1].focus();
         } else prevSib.focus();

      } else if(e.key=='ArrowRight') {

         if(nextSib == null) {
            children[0].focus();
         } else nextSib.focus();
         
      }
   }

   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <title>Space Travel</title>
         </Head>
         
         <div className={`${pathname == '' ? 'home' : pathname} height100`}>
            <Header pathname={pathname} />
            <Component changeTab={changeTab} {...pageProps} />
         </div>
      </>
   )
}

export default MyApp
