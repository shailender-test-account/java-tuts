import React, { useState } from 'react';
import Logo from "../assets/bluelogo.png";
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
            height: 130,
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#1b2430",


        },

        hidden: {
            height: 100,

        }

    }

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
                <div className=' w-13  h-14 flex justify-center items-center'>
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
                {/* <ul className={nav ? ('w-full h-full fixed  z-5 bg-[#1b2430] text-[#dddcdc]  top-0 left-0 flex flex-col  gap-y-3 p-3 duration-500 ease-in-out') : ('w-full h-full fixed top-0 left-[-150px] duration-500 ease-in-out')}>

                    <div className=' w-12 h-10 flex justify-center items-center'>
                        <img className='w-full h-full' src={Logo} alt="" />
                    </div>


                    <li>

                        <Link to="/" >
                            Home

                        </Link>

                    </li>

                    <li>

                        <Link to="about" >
                            About

                        </Link>

                    </li>
                    <li>

                        <Link to="courses">
                            Courses

                        </Link>

                    </li>

                    <li>

                        <Link to="roadmap" >
                            Roadmap

                        </Link>

                    </li>

                    <li>

                        <Link to="blog" >
                            Blog

                        </Link>

                    </li>


                    <li>

                        <Link to="contact" >
                            Contact

                        </Link>

                    </li>





                </ul> */}

            </motion.nav>

        </div>
    )
}

export default Navbar;