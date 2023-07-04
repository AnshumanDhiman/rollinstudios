import React from 'react'
import './Plus.css'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import pimg from '../../assets/images/Stills-2/6.jpg'


export default function Plus() {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      
      const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      
      

  return (
    <>
  {/* <div className="flex">
    <div className="w-1/3 text-center text-4xl font-light">
        <span className=" text-[#FF0000] text-4xl font-bold ">
          <div ref={ref1}>
            {inView1 && <CountUp end={500} duration={2} />}
            +
          </div>
        </span>
       
        
        Happy Clients
    
    </div>
    <div className="w-1/3 text-center text-4xl font-light">
     
        <span className=" text-[#FF0000] text-4xl font-bold">
          <div ref={ref2}>
            {inView2 && <CountUp end={200} duration={2} />}
            +
          </div>
        </span>
       
        Achievements
    
    </div>
    <div className="w-1/3 text-center text-4xl font-light">
      
        <span className=" text-[#FF0000] text-4xl font-bold">
          <div ref={ref3}>
            {inView3 && <CountUp end={1000} duration={2} />}
            MN+
          </div>
        </span>
      
        Projects Views
      
    </div>
  </div> */}

<section class="mb-32 text-center lg:text-left"> 
  <div class="container mx-auto text-center lg:text-left xl:px-32">
    <div class="grid items-center lg:grid-cols-2">
      <div class="mb-12 lg:mb-0">
        <div
          class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#3D0000] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
          <h2 class="mb-6 text-4xl font-bold">Why is it so great?</h2>
          <p class="mb-12 text-neutral-500 dark:text-neutral-300">
            Nunc tincidunt vulputate elit. Mauris varius purus malesuada
            neque iaculis malesuada. Aenean gravida magna orci, non
            efficitur est porta id. Donec magna diam.
          </p>

          <div class="grid gap-x-6 md:grid-cols-3 text-center">
            <div class="mb-12 md:mb-0">
              <div ref={ref1} class="text-dark mb-4 text-3xl font-bold">
               {inView1 && <CountUp end={500} duration={2} />}
            +
              </div>
              <h5 class="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Happy Clients
              </h5>
            </div>

            <div class="mb-12 md:mb-0">
              <div ref={ref2} class="text-dark mb-4 text-3xl font-bold">
            {inView2 && <CountUp end={200} duration={2} />}
            +
            </div>
              <h5 class="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Achievements
              </h5>
            </div>

            <div class="mb-12 md:mb-0">
              <div ref={ref3} class="text-dark mb-4 text-3xl font-bold">
            {inView3 && <CountUp end={1000} duration={2} />}
            MN+
          </div>
              <h5 class="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Views
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div>
      <img  alt="" />
        <img src="img/dummy_image/2.jpg"
          class="w-[30rem] shadow-lg dark:shadow-black/20" alt="" />
      </div>
    </div>
  </div>

</section>



    </>
  )
}
