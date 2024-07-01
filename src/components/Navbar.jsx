import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';


function Navbar() {

    const [hidden, setHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }



    })



    const navvariant = {
        visible: {
            height: 105,
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#1b2430",


        },

        hidden: {
            height: 100,

        }

    }

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

    const [nav, setNav] = useState(false);


    const handelClick = () => {
        setNav(!nav);
    }

    const navItems = [
        { id: 1, text: 'Home', path: "/" },
        { id: 2, text: 'About', path: "about" },
        { id: 3, text: 'Courses', path: "courses" },
        { id: 5, text: 'Roadmap', path: "roadmap" },
        { id: 6, text: 'Blog', path: "blog" },
        { id: 7, text: 'Contact', path: "contact" },



    ]


    return (


        <div >
            <motion.nav variants={navvariant} animate={hidden ? "visible" : "hidden"} transition={{ duration: 1, ease: "linear", type: "spring" }} className='w-full p-5 h-20  flex justify-between items-center bg-[#1b2430] z-50'  >
                <div className=' w-13  h-14 flex justify-center items-center z-10'>
                    <img className='w-full h-full  px-2' src={Logo} alt="" />
                </div>


                {/* desktop navigation */}

                <div className=' lg:flex  h-20 hidden  '>
                    <ul className='flex h-full  justify-center items-center gap-x-12 text-[16px]'>
                        <li>

                            <Link to="/" className='font-serif  text-[#dddcdc]'>
                                Home

                            </Link>

                        </li>

                        <li>

                            <Link to="about" className='font-serif  text-[#dddcdc]'>
                                About

                            </Link>

                        </li>
                        <li>

                            <Link to="courses" className='font-serif  text-[#dddcdc]'>
                                Courses

                            </Link>

                        </li>

                        <li>

                            <Link to="roadmap" className='font-serif  text-[#dddcdc]'>
                                Roadmap

                            </Link>

                        </li>

                        <li>

                            <Link to="blog" className='font-serif  text-[#dddcdc]'>
                                Blog

                            </Link>

                        </li>


                        <li>

                            <Link to="contact" className='font-serif  text-[#dddcdc]'>
                                Contact

                            </Link>

                        </li>







                    </ul>

                </div>


                <div className=' w-32 h-full hidden lg:flex justify-center items-center'>
                    <button className=' w-[100px] h-[50px] bg-[#ffffff] text-[#005064] font-serif rounded-3xl'>Login</button>
                </div>













                <motion.div onClick={handelClick} className='w-10 h-full flex lg:hidden justify-center items-center z-10'>
                    {nav ? (<RxCross2 size={25} color='#ffffff' />) : (<CiMenuFries size={30} color='#FFFFFF' />)}

                </motion.div>


                {/* mobile navigation */}
                <motion.div variants={sidebar} animate={nav ? "open" : "closed"} className={nav ? 'w-full h-full  bg-[#1b2430] fixed top-0 left-0':'w-full h-full fixed top-[-100vh] left-0'}>


                    <ul className=' mt-36 flex flex-col gap-y-10'>
                        <li>

                            <Link to="/" className='font-serif text-[20px]  text-[#dddcdc] hover:text-[#17cf97]'>
                                Home

                            </Link>

                        </li>

                        <li>

                            <Link to="about" className='font-serif text-[20px]  text-[#dddcdc] hover:text-[#17cf97]'>
                                About

                            </Link>

                        </li>
                        <li>

                            <Link to="courses" className='font-serif text-[20px]  text-[#dddcdc] hover:text-[#17cf97]'>
                                Courses

                            </Link>

                        </li>

                        <li>

                            <Link to="roadmap" className='font-serif text-[20px]  text-[#dddcdc] hover:text-[#17cf97]'>
                                Roadmap

                            </Link>

                        </li>

                        <li>

                            <Link to="blog" className='font-serif text-[20px]  text-[#dddcdc] hover:text-[#17cf97]'>
                                Blog

                            </Link>

                        </li>


                        <li>

                            <Link to="contact" className='font-serif text-[20px]  text-[#dddcdc] hover:text-[#17cf97]'>
                                Contact

                            </Link>

                        </li>

                    </ul>

                </motion.div>


            </motion.nav>

        </div>
    )
}

export default Navbar;