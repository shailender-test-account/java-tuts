import React, { useEffect, useRef, useState } from 'react';
import Libraries from "../assets/javalibraries.jpg";
import Tools from "../assets/javatools.jpg";
import Intro from "../assets/intro.jpg";
import Esaylearn from "../assets/easylearn.jpg";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { motion, stagger, useAnimate } from 'framer-motion';
import List from './List';



function Whyjava() {
  return (
    <div>
      <div className=' w-full min-h-[600px] border-2 border-[red] ' >
        <div className=' grid grid-cols-2 box relative'>
          <div className='bg-[#1b2430] h-[600px] p-10'>
            <div>
              <h1 className='w-96  text-[#ffffff] font-serif font-bold'>Why Learn <span className='text-[#17cf97]'>Java</span></h1>
              
            </div>
            <div>
              <p className='text-[#ffffff] text-[13px] font-[200] font-serif'>Learning Java is a strategic choice for aspiring developers due to its versatility and widespread use in various applications, from web and mobile development to large-scale enterprise solutions. Its "write once, run anywhere" philosophy ensures code portability across platforms, enhancing your skills' relevance in the job market. With a robust ecosystem and strong community support, Java offers extensive resources and opportunities for career growth, making it a valuable investment in your professional development.</p>
            </div>
            

             <List/>
           

          </div>
          <div className=' h-[600px]'>
            <img className='w-full h-full' src={Esaylearn} alt="" />
          </div>


        </div>

      </div>

    </div>
  )
}

export default Whyjava;