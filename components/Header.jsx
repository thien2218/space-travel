import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../public/constants';
import { useState } from 'react';

const Header = ({ pathname }) => {
   const [open, setOpen] = useState(false);

   return (
      <header className="primary-header flex">
         <div className="logo">
            <Image src={images.logo} layout='fixed' alt="Space logo" />
         </div>

         <button onClick={() => setOpen(!open)} className='mobile-nav-toggle' aria-controls='primary-nav' style={{ backgroundImage: `url(/assets/shared/icon-${open ? 'close' : 'hamburger'}.svg)` }}><span className="sr-only" aria-expanded='false'>Menu</span></button>

         <nav>
            <ul id='primary-nav' className={`flex primary-navigation underlined-indicator ${open ? 'slide-in' : ''}`}>
               <Link href='/'><li className={`uppercase ff-sans-cond letter-spacing-2 fs-300 active-${pathname==''}`}>
                  <a><span aria-hidden='true'>00</span>Home</a>
               </li></Link>
               <Link href='/destination'><li className={`uppercase ff-sans-cond letter-spacing-2 fs-300 active-${pathname=='destination'}`}>
                  <a><span aria-hidden='true'>01</span>Destination</a>
               </li></Link>
               <Link href='/crew'><li className={`uppercase ff-sans-cond letter-spacing-2 fs-300 active-${pathname=='crew'}`}>
                  <a><span aria-hidden='true'>02</span>Crew</a>
               </li></Link>
               <Link href='/technology'><li className={`uppercase ff-sans-cond letter-spacing-2 fs-300 active-${pathname=='technology'}`}>
                  <a><span aria-hidden='true'>03</span>Technology</a>
               </li></Link>
            </ul>
         </nav>
      </header>
   )
}

export default Header