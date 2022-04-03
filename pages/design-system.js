import React from 'react'

const DesignSystem = () => {
   return (
      <div className='container text-white'>

         <h1 className='uppercase'>Design system</h1>

         <section id="colors" style={{ margin: '4rem 0' }} className='flow'>
            <h2 className='numbered-title'><span>01</span> colors</h2>

            <div className='grid' style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
               <div className='flow'>
                  <div className='text-white bg-dark fs-500 ff-serif' style={{ padding: '3rem 1rem 1rem', border: '1px solid #fff' }}>#0B0D17</div>
                  <p><span className='text-accent'>RGB</span> 11, 13, 23</p>
                  <p><span className='text-accent'>HSL</span> 230°, 35%, 7%</p>
               </div>
               
               <div className='flow'>
                  <div className='text-dark bg-accent fs-500 ff-serif' style={{ padding: '3rem 1rem 1rem', border: '1px solid #fff' }}>#D0D6F9</div>
                  <p><span className='text-accent'>RGB</span> 208, 214, 249</p>
                  <p><span className='text-accent'>HSL</span> 231°, 77%, 90%</p>
               </div>
               
               <div className='flow'>
                  <div className='text-dark bg-white fs-500 ff-serif' style={{ padding: '3rem 1rem 1rem', border: '1px solid #fff' }}>#FFFFFF</div>
                  <p><span className='text-accent'>RGB</span> 255, 255, 255</p>
                  <p><span className='text-accent'>HSL</span> 0°, 0%, 100%</p>
               </div>
            </div>
         </section>

         <section id="typography" style={{ margin: "4rem 0" }} className='flow'>
            <h2 className='numbered-title'><span>02</span> typography</h2>
            
            <div className="flex">
               <div className='flow' style={{ flexBasis: "100%", "--flow-space": "4rem" }}>
                  <div>
                     <p className='text-accent'>Heading 1 - Bellefair Regular - 150px</p>
                     <p className='ff-serif fs-900 uppercase'>Earth</p>
                  </div>

                  <div>
                     <p className='text-accent'>Heading 2 - Bellefair Regular - 100px</p>
                     <p className='ff-serif fs-800 uppercase'>Venus</p>
                  </div>

                  <div>
                     <p className='text-accent'>Heading 3 - Bellefair Regular - 56px</p>
                     <p className='ff-serif fs-700 uppercase'>Jupiter & Saturn</p>
                  </div>

                  <div>
                     <p className='text-accent'>Heading 4 - Bellefair Regular - 32px</p>
                     <p className='ff-serif fs-600 uppercase'>Uranus, Neptune, & Pluto</p>
                  </div>
                  
                  <div>
                     <p className='text-accent'>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                     <p className='fs-500 uppercase text-accent ff-sans-cond letter-spacing-1'>So, you want to travel to space</p>
                  </div>
               </div>
               
               <div className='flow' style={{ flexBasis: "100%", "--flow-space": "4rem"  }}>
                  <div>
                     <p className='text-accent'>Subheading 1 - Bellefair Regular - 28px</p>
                     <p className='fs-500 ff-serif uppercase'>384,400 km</p>
                  </div>

                  <div>
                     <p className='text-accent'>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                     <p className='fs-200 ff-sans-cond letter-spacing-3 uppercase'>Avg. Distance</p>
                  </div>

                  <div>
                     <p className='text-accent'>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                     <p className='fs-300 ff-sans-cond letter-spacing-2 uppercase'>Europa</p>
                  </div>

                  <div>
                     <p className='text-accent'>Body Text</p>
                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                  </div>
               </div>
            </div>
         </section>

         <section className='flow' id="interactive-elements">
            <h2 className='numbered-title'><span>03</span> Interactive elements</h2>
            
            <div>
               <nav>
                  <ul class="flex primary-navigation underlined-indicator">
                     <li className='uppercase ff-sans-cond letter-spacing-2 fs-300 active'>
                        <a href="#"><span>00</span>Active</a>
                     </li>

                     <li className='uppercase ff-sans-cond letter-spacing-2 fs-300'>
                        <a href="#"><span>01</span>Hovered</a>
                     </li>

                     <li className='uppercase ff-sans-cond letter-spacing-2 fs-300 no-pointer-events'>
                        <a href="#"><span>02</span>Idle</a>
                     </li>
                  </ul>
               </nav>
            </div>
            
            <div class="flex" style={{ marginTop: '5rem' }}>
               <div>
                  <a href="#" className='large-btn uppercase ff-serif text-dark bg-white fs-600'>Explore</a>
               </div>
               
               <div style={{ marginBottom: '50vh', '--flow-space': '4rem' }} className='flow'>
                  {/* Tabs */}
                  <div className='tab-list underlined-indicator flex'>
                     <button aria-selected='true' className='uppercase text-accent ff-sans-cond letter-spacing-2'>Moon</button>
                     <button aria-selected='false' className='uppercase text-accent ff-sans-cond letter-spacing-2'>Mars</button>
                     <button aria-selected='false' className='uppercase text-accent ff-sans-cond letter-spacing-2'>Europa</button>
                  </div>

                  {/* Dots */}
                  <div className='dot-indicator flex'>
                     <button aria-selected='true'><span className="sr-only">Crew name</span></button>
                     <button aria-selected='false'><span className="sr-only">Crew name</span></button>
                     <button aria-selected='false'><span className="sr-only">Crew name</span></button>
                  </div>

                  {/* Numbers */}
                  <div className='number-indicator grid'>
                     <button className='ff-serif fs-600' aria-selected='true'>1</button>
                     <button className='ff-serif fs-600' aria-selected='false'>2</button>
                     <button className='ff-serif fs-600' aria-selected='false'>3</button>
                  </div>
               </div>
            </div>
         </section>

      </div>
   )
}

export default DesignSystem