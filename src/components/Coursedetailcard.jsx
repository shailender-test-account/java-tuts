// import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

 function Coursedetailcard() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ["Core Java", "Web Development with Java", "Data Structures with Java", "Front-end Development","Database Management System","Java Frameworks"];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
   
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0
      }
    );
  }, [open]);

  return (
    <div className="App  w-full min-h-[400px] flex flex-col gap-5" ref={scope}>
      <motion.button className="w-56 h-12 mx-[30px] bg-[#17cf97] text-[#ffffff] font-serif font-[300]" onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
        All Courses
      </motion.button>
      <ul className=" w-full flex flex-col gap-y-3">
        {items.map((item, index) => (
          <motion.li className=" w-60 shadow-2xl text-[#ffffff] hover:text-[#17cf97] hover:shadow-slate-700  duration-500 ease-linear cursor-pointer text-[15px] p-3" key={index}>{item}</motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Coursedetailcard;