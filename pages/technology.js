import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { images } from '../public/constants';
import Data from '../db.json';

const Technology = ({ changeTab }) => {
   const [active, setActive] = useState(0);
   const [view, setView] = useState('portrait')
   const tech = Data.technology;

   useEffect(() => {
      if(window.innerWidth < 720) {
         setView('landscape');
      } else setView('portrait');

      window.addEventListener('resize', () => {
         if(window.innerWidth < 720) {
            setView('landscape');
         } else setView('portrait');
      })
   })
   
   return (
      <main id='main' className="grid-container grid-container--technology flow">
         <h1 className='numbered-title'><span aria-hidden='true'>03</span>space launch 101</h1>

         <div className="technology-image">
            <Image src={images.tech[view][active]} alt='Technology' />
         </div>

         <article className='technology-info flex'>
            <div className='number-indicator flex' onKeyDown={e => changeTab(e, 3)}>
               {tech.map((t, index) => (
                  <button key={index} onClick={() => setActive(index)} className='ff-serif fs-600' aria-selected={`${active==index}`}>{index+1}</button>
               ))}
            </div>

            <div className='technology-details'>
               <h2 className="text-accent uppercase ff-sans-cond fs-300 letter-spacing-2">the technology...</h2>
               <p className="uppercase ff-serif fs-700">{tech[active].name}</p>
               <p className="text-accent">{tech[active].description}</p>
            </div>
         </article>

      </main>
   )
}

export default Technology