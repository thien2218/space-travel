import React from 'react'

const DesignSystem = () => {
   return (
      <div className='container text-white'>
         <h1 className='uppercase'>Design system</h1>

         <section id="colors">
            <h2 className='uppercase fs-500'><span>01</span> colors</h2>

            <div className='grid' style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
               <div>
                  <div className='text-white bg-dark fs-500 ff-serif' style={{ padding: '3rem 1rem 1rem', border: '1px solid #fff' }}>#0B0D17</div>
                  <p><span className='text-accent'>RGB</span> 11, 13, 23</p>
                  <p><span className='text-accent'>HSL</span> 230°, 35%, 7%</p>
               </div>
               
               <div>
                  <div className='text-dark bg-accent fs-500 ff-serif' style={{ padding: '3rem 1rem 1rem', border: '1px solid #fff' }}>#D0D6F9</div>
                  <p><span className='text-accent'>RGB</span> 208, 214, 249</p>
                  <p><span className='text-accent'>HSL</span> 231°, 77%, 90%</p>
               </div>
               
               <div>
                  <div className='text-dark bg-white fs-500 ff-serif' style={{ padding: '3rem 1rem 1rem', border: '1px solid #fff' }}>#FFFFFF</div>
                  <p><span className='text-accent'>RGB</span> 255, 255, 255</p>
                  <p><span className='text-accent'>HSL</span> 0°, 0%, 100%</p>
               </div>
            </div>
         </section>

         <section id="typography"  style={{ margin: "4rem 0" }}>
            <h2><span>02 </span>Typography</h2>
            <div className="flex">
               <div style={{ flexBasis: "100%" }}>
                     <div> 
                        <p>Heading 1 - Bellefair Regular - 150px</p>
                        <p>Earth</p>
                     </div>
                     <div> 
                        <p>Heading 2 - Bellefair Regular - 100px</p>
                        <p>Venus</p>
                     </div>
                     <div> 
                        <p>Heading 3 - Bellefair Regular - 56px</p>
                        <p>Jupiter & Saturn</p>
                     </div>
                     <div> 
                        <p>Heading 4 - Bellefair Regular - 32px</p>
                        <p>Uranus, Neptune, & Pluto</p>
                     </div>
                     <div> 
                        <p>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                        <p>So, you want to travel to space</p>
                     </div>
               </div>
               
               <div  style={{ flexBasis: "100%" }}>
                     <div> 
                        <p>Subheading 1 - Bellefair Regular - 28px</p>
                        <p>384,400 km</p>
                     </div>
                     <div> 
                        <p>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                        <p>Avg. Distance</p>
                     </div>
                     <div> 
                        <p>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                        <p>Europa</p>
                     </div>
                     <div> 
                        <p>Body Text</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                     </div>
               </div>
            </div>
         </section>

      </div>
   )
}

export default DesignSystem