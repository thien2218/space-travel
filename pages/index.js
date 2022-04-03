import Link from 'next/link';
import Image from 'next/image';
import { images } from '../public/constants';

export default function Home() {
   return (
      <div className='home'>
         <header className="primary-header flex">
            <div className="logo">
               <Image src={images.logo} layout='fixed' alt="Space logo" />
            </div>

            {/* <nav>
               <ul class="flex primary-navigation underlined-indicator">
                  <li className='uppercase ff-sans-cond letter-spacing-2 fs-300 active'>
                     <Link href='/'><a><span>00</span>Home</a></Link>
                  </li>
                  <li className='uppercase ff-sans-cond letter-spacing-2 fs-300'>
                     <Link href='/destination'><a><span>01</span>Destination</a></Link>
                  </li>
                  <li className='uppercase ff-sans-cond letter-spacing-2 fs-300'>
                     <Link href='/crew'><a><span>02</span>Crew</a></Link>
                  </li>
                  <li className='uppercase ff-sans-cond letter-spacing-2 fs-300'>
                     <Link href='/technology'><a><span>03</span>Technology</a></Link>
                  </li>
               </ul>
            </nav> */}
         </header>

         <div className="grid-container grid-container--home">
            <div>
               <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to<br/><span className='fs-900 text-white ff-serif'>Space</span></h1>
               
               <p className='text-accent'>Let`s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we`ll give you a truly out of this world experience!</p>
            </div>

            <div><a href="#" className='large-btn uppercase ff-serif text-dark bg-white grid'>Explore</a></div>
         </div>
      </div>
   )
}
