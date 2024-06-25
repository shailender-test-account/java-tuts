import React from 'react';
import { TiTick } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { TbAwardFilled } from "react-icons/tb";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { motion } from 'framer-motion';


function About() {


    const aboutvariant = {
        visible: {
            opacity: 1,
            x: 0
        },

        hidden: {
            opacity: 0,
            x: -100,
        }

    }


    return (
        <div>

            <div className='w-full min-h-[600px]   flex flex-col lg:flex-row  mt-20'>
                <div className='w-[100%] lg:w-[50%] min-h-[600px]  '>
                    <div className=' w-full  lg:w-[500px] xl:w-[600px] h-[600px] relative bg-intro bg-cover bg-center bg-no-repeat  rounded-3xl '>
                        <motion.div variants={aboutvariant} initial="hidden" whileInView={"visible"} transition={{ duration: 1, ease: "easeInOut", }} viewport={{once:true}} className='w-[300px] md:w-[400px] lg:w-[400px] h-[100px] absolute  top-20 flex justify-center items-center text-[#ffffff]  left-3 lg:right-[-20px] bg-[#17cf97]'>
                            <IoPeople size={30} />
                            <p className='text-[20px] flex justify-center items-center'>Best Online & Offline Course</p>

                        </motion.div>
                        <motion.div variants={aboutvariant} initial="hidden" whileInView={"visible"} transition={{ duration: 1, ease: "easeInOut", }} viewport={{once:true}} className='w-[300px] md:w-[400px] lg:w-[400px] h-[100px] absolute flex justify-center items-center text-[#ffffff]   top-52 left-3  lg:left-20 bg-[#17cf97]'>
                            <TbAwardFilled size={30} />
                            <p className='text-[20px] flex justify-center items-center'>Most Qualified Trainers</p>

                        </motion.div>
                        <motion.div variants={aboutvariant} initial="hidden" whileInView={"visible"} transition={{ duration: 1, ease: "easeInOut", }} viewport={{once:true}} className='w-[300px] md:w-[400px] lg:w-[400px] h-[100px] absolute flex justify-center items-center text-[#ffffff] bottom-[150px] left-3 lg:right-[-20px] bg-[#17cf97]'>
                            <HiChatBubbleOvalLeft size={30} />
                            <p className='text-[20px] flex justify-center items-center' >50K+ Active Students</p>

                        </motion.div>

                    </div>

                </div>

                <div className='w-full  lg:w-[50%] min-h-[600px]  '>
                    <div className=' p-10 flex flex-col gap-y-5'>
                        <div className=' w-60 text-[#1b2430] font-serif font-[300px]'>
                            <h1 className='text-[18px]'>About Us</h1>
                        </div>

                        <div className='w-full md:w-[600px] lg:w-[400px] xl:w-[500px] '>
                            <h1 className='text-[#1b2430]'>Most Affordable Online & Offline Courses for Everyone</h1>
                            <p className='text-[gray]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis odio dolor, quis suscipit ipsum interdum sit amet. Nullam molestie suscipit sollicitudin integer nec lorem quis lacus.

                            </p>
                        </div>
                        <div>
                            <div className='w-400px h-[96] flex  items-center '>
                                <TiTick size={30} />
                                <p ><span className='#1b2430 text-[20px] font-bold '>100+ qualified</span> trainers from all over the world</p>



                            </div>
                            <div className='w-400px h-[96] flex  items-center '>
                                <TiTick size={30} />
                                <p ><span className='#1b2430 text-[20px] font-bold '>Courses Designed</span> with landing job in mind</p>



                            </div>
                            <div className='w-400px h-[96] flex  items-center '>
                                <TiTick size={30} />
                                <p ><span className='#1b2430 text-[20px] font-bold'>
                                    More than 50,000 </span> happy students worldwide</p>



                            </div>



                        </div>
                        <div>
                            <button className='w-[150px] h-[50px] text-[#ffffff] cursor-pointer bg-[#17cf97] hover:bg-[#3aa887]  font-serif'>Get Started</button>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default About;