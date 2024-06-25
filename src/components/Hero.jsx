import React from 'react';
import Carousel from './Carousel';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircle } from "react-icons/io5";
import { motion } from 'framer-motion';

function Hero() {

  
  const inyvariant={
    visible: { opacity: 1, y: 0, },
    hidden: { opacity: 0, y: -200,  }
  }



  const variants={
    visible: { opacity: 1, x: 0, },
    hidden: { opacity: 0, x: -200,  }
  }
  return (
    <div>
      <div className='w-full min-h-[600px] flex mt-10  flex-col lg:flex-row '>
        {/* content box */} 
        <div className='w-full lg:w-[50%]  p-10  font-serif flex flex-col justify-center  lg:px-10   gap-y-8   md:p-32'>
          <motion.div variants={variants} initial="hidden" whileInView={"visible"} transition={{ duration:1 ,ease:"easeInOut" ,type:"spring"}}
          viewport={{once:true}} className=' w-full md:w-60 lg:w-96  text-[#1b2430] text-[13px] md:text-[15px] font-bold '>
            WELCOME TO SOFTSYNTH
          </motion.div>
          <motion.div className='w-full md:w-[70%] md:min-h-[300px] lg:w-96   flex flex-col gap-5 ' variants={variants} initial="hidden" whileInView={"visible"} transition={{ duration:2,ease:"easeInOut" ,type:"spring"}} viewport={{once:true}}>
            <h1 className='text-[#1b2430] font-bold leading-normal text-[2rem] md:text-[3rem]  '>Choose From the Various Niches <span className='text-[#17cf97] font-bold'>To Learn Today</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos architecto molestiae magni quibusdam blanditiis deserun</p>

          </motion.div>

          <motion.div className='w-full md:w-[70%] lg:w-96  h-[100px] flex  items-start font-serif gap-3 ' variants={variants} initial="hidden" whileInView={"visible"} transition={{ duration:3,ease:"easeInOut" ,type:"spring"}} viewport={{once:true}}>
            <button className='w-[180px] h-[50px] bg-[#17cf97] text-[#ffffff] rounded-3xl flex justify-center items-center ]'>Get Started</button>
            <button className=' flex justify-center items-center w-[180px] rounded-3xl h-[50px] bg-[#1b2430] text-[#ffffff] gap-2'>Try Demo <FaArrowRightLong /></button>

          </motion.div>

        </div>

        {/* carousel box */}
        <div className='w-full  gap-3  flex  flex-col gap-y-10 p-3 lg:flex-row'>

          {/* carousel */}
          <div className=' w-full flex flex-col justify-center items-center  lg:w-[50%] gap-y-8 lg:gap-y-5  z-[-1] '>
            <motion.div variants={inyvariant} initial="hidden" whileInView={"visible"} transition={{ duration:1,ease:"easeInOut" ,type:"spring"}} 
            viewport={{once:true}} className=' w-[400px] min-h-[400px] lg:min-h-[600px] md:w-full lg:mt-10 '>
              <Carousel />
            </motion.div>
            <motion.div variants={inyvariant} initial="hidden" whileInView={"visible"} transition={{ duration:1.5,ease:"easeInOut" ,type:"spring"}} viewport={{once:true}}  className='w-[100%] h-[180px] bg-[#17cf97]   text-[#ffffff] rounded-3xl flex justify-center items-center font-serif font-semibold p-10'>
              Master Java with our comprehensive tutorials and roadmap
              and Get guidance from our team of educators

            </motion.div>

          </div>

          <div className='w-full  flex justify-center items-center lg:w-[50%] lg:h-full'>
            <motion.div variants={inyvariant} initial="hidden" whileInView={"visible"} transition={{ duration:1.8,ease:"easeInOut" ,type:"spring"}} viewport={{once:true}}  className='w-full h-[400px] lg:h-[100%] bg-hero-pattern bg-center bg-cover bg-no-repeat rounded-3xl flex justify-center items-center p-3'>
              <div className='w-[70px] h-[70px]  bg-[#ffffff]  rounded-full flex justify-center items-center'>
                <IoPlayCircle size={100} color='#1b2430'/>

              </div>

            </motion.div>

          </div>


        </div>



      </div>

    </div>
  )
}

export default Hero;














