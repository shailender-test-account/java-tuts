// import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion ,useInView} from "framer-motion";

function List() {
  

  const items = [{ heading: "Versitalty" }, { heading: "CODE ONE ,RUN ANYWHERE" }, { heading: "EASY TO LEARN" }, { heading: "FAST CODING" }];

  const Variants={
    visible:{
      opacity:1,
      scale:1

    },
    hidden:{
      opacity:0,
      scale:0
    }
  }



 
 

  return (
    <div className="List">
      <ul className="border-2 border-[red]">
        {items.map((item, index) => (
          <motion.li   className="text-[#ffffff] font-bold font-serif text-[20px]" key={index}>{item.heading}</motion.li>
        ))}
      </ul>
    </div>
  );
}

export default List;
