import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { images } from '../public/constants';

export const getStaticProps = async () => {
   const res = await fetch('http://localhost:3000/api');
   const data = await res.json();

   return {
      props: {
         destinations: data.destinations || {},
      }
   }
}

const Destination = ({ destinations }) => {
   const [active, setActive] = useState(0);

   return (
      <main id='main' className="grid-container grid-container--destination flow">
         <h1 className='numbered-title'><span aria-hidden='true'>01</span> pick your destination</h1>

         <div className='destination-image'>
            <Image src={images.planets[active]} alt='The moon' />
         </div>

         <div className='tab-list underlined-indicator flex'>
            {destinations.map((destination, index) => (
               <button key={index} onClick={() => setActive(index)} aria-selected={`${active == index}`} className='uppercase text-accent ff-sans-cond letter-spacing-2'>{destination.name}</button>
            ))}
         </div>

         <article className='destination-info'>
            <h2 className='fs-800 uppercase ff-serif'>{destinations[active].name}</h2>

            <p className='text-accent'>{destinations[active].description}</p>

            <div className='flex destination-meta'>
               <div>
                  <h3 className="fs-200 ff-sans-cond letter-spacing-3 uppercase text-accent">Avg. distance</h3>
                  <p className='fs-500 ff-serif uppercase'>{destinations[active].distance}</p>
               </div>
               
               <div>
                  <h3 className="fs-200 ff-sans-cond letter-spacing-3 uppercase text-accent">Est. travel time</h3>
                  <p className='fs-500 ff-serif uppercase'>{destinations[active].travel}</p>
               </div>
            </div>
         </article>
      </main>
   )
}

export default Destination