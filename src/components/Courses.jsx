import React from 'react';
import Coursecard from './Coursecard';
import { FaJava } from "react-icons/fa6";
import { BsFiletypeJava } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { SiAzuredevops } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
// import Databasemanagment from "../assets/data-management.png";
// import Frontend from "../assets/data-management.png";
// import Integration from "../assets/integration.png";
// import web from "../assets/world-wide-web.png";



function Courses() {
  return (
    <div>
      <div className='w-full  mt-5  min-h-[600px] flex flex-col  items-center'>
        <div className=' w-56 flex flex-col justify-center items-center mt-5'>
          <h3 className='text-[#17cf97]  font-bold text-[18px] font-serif '>Courses We Offer</h3>
          <div className='w-56 h-1 bg-[#17cf97] rounded-md'></div>
        </div>

        {/* cards */}
        {/* we can use shrutibalasa plugin like this grid-auto-fit-[25rem] for responsive ness of cards deck */}

        <div className='w-full min-h-[400px] mt-4 px-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <Coursecard
            title="Core Java"
            image={<FaJava size={50} color='#17cf97' />}
            des="Master Java with our comprehensive tutorials and roadmap"

          />
          <Coursecard
            title="Advanced Java"
            image={<BsFiletypeJava size={50} color='#17cf97'/>}
            des="Master Java with our comprehensive tutorials and roadmap"

          />
          <Coursecard
            title="Front-End Development"
            image={<GrReactjs size={50} color='#17cf97'/>}
            des="Master Java with our comprehensive tutorials and roadmap"
          />
          <Coursecard
            title="Web Development with Java"
            image={<TbWorldWww size={50} color='#17cf97'/>}
            des="Master Java with our comprehensive tutorials and roadmap"

          />
          <Coursecard
            title="Database Management"
            image={<FaDatabase size={50} color='#17cf97' />}
            des="Master Java with our comprehensive tutorials and roadmap"

          />

          <Coursecard
            title="Integration"
            image={<SiAzuredevops size={50} color='#17cf97'/>}
            des="Master Java with our comprehensive tutorials and roadmap"

          />



        </div>


      </div>




    </div>

  )
}

export default Courses;