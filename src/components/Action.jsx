import React from 'react';
import { motion } from 'framer-motion';


function Action() {
   
  const myvariants={
    visible:{
      opacity:1,
      x:0
    },
    hidden:{
      opacity:0,
      x:-200
    }

  }


  return (
    <section className="py-5 relative px-[30px] md:px-0">
        <div className='absolute -z-10 content-[""] bottom-[-1px] left-0 h-[50%] bg-[#1b2430] w-full'></div>
        <motion.div variants={myvariants} initial="hidden" whileInView={"visible"} transition={{duration:3 , ease:"easeInOut" , type:"spring"}} className="container m-auto p-12 grid gap-4 grid-cols-5 border-2 bg-[#17cf97] border-none rounded-lg">
            <div className="col-span-5 md:col-span-3 mx-12">
                <p className='text-[#1b2430] flex items-center justify-center md:justify-normal font-[200]'>Ready to Start Your Journey?<div className='w-[50px] hidden sm:block ml-2 h-[1px] bg-[#1b2430]'></div></p>
                <h2 className='text-[#1b2430] font-bold min-[100px]:text-center sm:text-center md:text-left font-serif tracking-[2px]'>Join thousands of others who have become successful Java developers</h2>
            </div>
            <div className="col-span-5 md:col-span-2 flex justify-center items-center">
                <button className='bg-[#1b2430] text-[#ffffff] p-2 px-4 tracking-[2px] rounded-full'>Enroll Now</button>
            </div>
        </motion.div>
    </section>
  )
}

export default Action