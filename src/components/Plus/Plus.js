import React from 'react'

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';



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
  <div className="flex">
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
  </div>



    </>
  )
}
