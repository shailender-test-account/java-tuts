import React from "react";
import TCard from "./TCard";

const Testimonials = () => {
  return (
    <section>
      <section>
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center col-span-full xl:text-left">
                <span className="font-serif">Testimonials</span>
              <h2 className="text-4xl text-[#1b2430] font-bold">What Our <span className="text-[#17cf97]">Learners</span> Say</h2>
              <p className="dark:text-gray-600">
                Discover how our Java tutorials have empowered learners to
                achieve their goals. Hear firsthand success stories and feedback
                from our dedicated students.
              </p>
            </div>
            <div className="p-6 col-span-full">
              <div className="grid gap-4 grid-cols-4 group">
                <TCard/>
                <TCard/>
                <TCard/>
                <TCard/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
