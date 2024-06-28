import React from 'react';
import Skillcard from './Skilsscard';
import Coursedetailcard from './Coursedetailcard';



function Syllabus() {
    return (
        <div className='w-full min-h-[600px] p-10'>
            <div className='w-full flex flex-col '>
                <h1 className='text-[#1b2430] font-bold font-serif'>Learn Essential <span className='text-[#17cf97]'>Java Skills</span></h1>
                <p className='text-[#1b2430] font-[200] font-serif'>Java Courses: Master Java programming for building robust applications. Learn Java syntax, object-oriented programming, and Java development tools.</p>
            </div>
            <div>
                <h1 className='text-[#1b2430] font-bold font-serif text-[20px] '>Explore courses from experienced, real-world experts.</h1>
            </div>
            <div className='w-full h-[1px]  bg-[#17cf97] mt-10'>

            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 '>
                <div className='bg-[#1b2430] min-h-[700px]'>
                    <div className='w-full p-3'>
                        <h1 className='text-[#ffffff] font-serif font-bold  text-[20px]'>See what you can learn with Softsynth Java Bootcamp</h1>
                    </div>

                    <div className='w-full flex justify-center '>
                        <Coursedetailcard />

                    </div>
                    

                </div>
                <div className=' container mt-5 col-span-2'>
                    <Skillcard />



                </div>


            </div>










        </div>

    )
}

export default Syllabus;