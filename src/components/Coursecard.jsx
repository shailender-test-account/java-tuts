import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";



function Coursecard(props) {

   const varients={
    visible:{
      opacity:1,
      scale:1,
      brightness:0.5
      
    },

    hidden:{
      opacity:0,
      scale:2,
      brightness:1
    }
   }

  return (
    <div>
      <div className=" relative col-span-2 group  h-[200px] bg-[#1b2430]  hover:text-[#ffffff]  cursor-pointer duration-500 ease-linear  flex flex-col justify-center items-center gap-5 overflow-hidden">
        <div >
          {props.image}
        </div>
        <div className=' p-2 flex justify-center  items-center w-full '>
          <h1 className='text-[#ffffff] font-serif font-bold text-[13px]'>{props.title}</h1>
        </div>

        <motion.div variants={varients} initial="hidden" whileHover="visible" transition={{duration:0.5 ,ease:"easeInOut"}} className=' absolute left-0 top-0 bg-[#104cba] w-full h-full flex flex-col justify-center items-center '>
          <p  className='w-[200px] flex justify-center items-center font-serif font-bold text-[#ffffff]'>{props.des}</p>
          <button className='w-[100px] h-[40px]  gap-1 bg-[rgba(84,166,204,0.5)]  hover:bg-blue-500 text-[#ffffff] flex justify-center items-center text-[13px]'>Read More <FaArrowRightLong/></button>
          

        </motion.div>

      </div>

    </div>
  )
}

export default Coursecard;