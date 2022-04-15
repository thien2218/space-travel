import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { images } from '../public/constants';
import Data from '../db.json';

const Crew = ({ changeTab }) => {
   const [active, setActive] = useState(0);
   const crew = Data.crew;

   return (
      <main id='main' className="grid-container grid-container--crew flow">
         <h1 className='numbered-title'><span aria-hidden='true'>02</span>meet your crew</h1>

         <picture className='crew-image'>
            <Image src={images.crew[active]} alt='Crew member' />
         </picture>

         <article className='crew-info'>
            <h2 className="role uppercase ff-serif fs-600">{crew[active].role}</h2>
            <p className="ff-serif fs-700 uppercase">{crew[active].name}</p>
            <p className="text-accent">{crew[active].bio}</p>
         </article>

         <div className='dot-indicator flex' onKeyDown={e => changeTab(e, 4)} >
            {crew.map((mem, index) => (
               <button onClick={() => setActive(index)} key={index} aria-selected={`${active == index}`}><span className="sr-only">{mem.name}</span></button>
            ))}
         </div>
      </main>
   )
}

export default Crew