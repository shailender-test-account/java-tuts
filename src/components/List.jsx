import React from 'react';
import { motion } from 'framer-motion';


const List = () => {

  const Listvariants={
    visible:{
      opacity:1,
      x:0,
      scale:1,
    },

    hidden:{
      opacity:0,
      x:-50,
      scale:0.25
    }

  }
  return (
    <div>
      <div  className='w-full min-h-[500px]  flex flex-col gap-5'>
        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:1 , ease:"easeInOut" , type:"spring"}} >
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Versatility</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>

        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:1.2 , ease:"easeInOut" , type:"spring"}}>
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Robust Ecosystem</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>


        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:1.4 , ease:"easeInOut" , type:"spring"}}>
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Write Once, Run Anywhere</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>

        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:1.6 , ease:"easeInOut" , type:"spring"}}>
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Community Support</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>

        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:1.8 , ease:"easeInOut" , type:"spring"}}>
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Scalability</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>

        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:2 , ease:"easeInOut" , type:"spring"}}>
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Professional Development</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>

        <motion.div variants={Listvariants} initial="hidden" whileInView={"visible"} transition={{duration:2.2 , ease:"easeInOut" , type:"spring"}}>
          <h1 className='text-[20px] text-[#ffffff] font-bold font-serif'>Stability</h1>
          <div className='w-56 md:w-96 lg:w-96 h-[2px] bg-[#17cf97] rounded-md'></div>
        </motion.div>

      </div>
    </div>
  )
}

export default List;

