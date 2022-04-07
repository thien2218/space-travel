import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { images } from '../public/constants';

export const getStaticProps = async () => {
   const res = await fetch('http://localhost:3000/api');
   const data = await res.json();

   return {
      props: {
         crew: data.crew || {},
      }
   }
}

const Crew = ({ crew }) => {
   const [active, setActive] = useState(0);
   const member = crew[active];

   return (
      <main id='main' className="grid-container grid-container--crew flow">
         <h1 className='numbered-title'><span aria-hidden='true'>02</span>meet your crew</h1>

         <div className='crew-image'>
            <Image src={images.crew[active]} alt='Crew member' />
         </div>

         <article className='crew-info'>
            <h2 className="role uppercase ff-serif fs-600">{member.role}</h2>
            <p className="ff-serif fs-700 uppercase">{member.name}</p>
            <p className="text-accent">{member.bio}</p>
         </article>

         <div className='dot-indicator flex'>
            {crew.map((mem, index) => (
               <button onClick={() => setActive(index)} key={index} aria-selected={`${active == index}`}><span className="sr-only">{mem.name}</span></button>
            ))}
         </div>
      </main>
   )
}

export default Crew