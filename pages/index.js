import Link from 'next/link';

export default function Home() {
   return (
      <>
         <a href="#main" className='skip-to-main'>Skip to main</a>
         
         <main id='main' className="grid-container grid-container--home">
            <div className='intro flow'>
               <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to</h1>
               <h2 className='fs-900 text-white ff-serif uppercase'>Space</h2>

               <p className='text-accent'>Let`s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we`ll give you a truly out of this world experience!</p>
            </div>
         
            <div className='explore'><Link href="/destination"><a className='large-btn uppercase ff-serif text-dark bg-white grid'>Explore</a></Link></div>
         </main>
      </>
   )
}
