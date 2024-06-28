import React, { useEffect } from "react"
import Glide from "@glidejs/glide";
import fulldev from "../assets/frontsoft.jpg";
import database from "../assets/databasesoft.jpg";
import corejava from "../assets/javasoft.jpg";
import devopsn from "../assets/devopsnew.jpg";

function Skillcard() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  overflow-hidden p-10">
            <li className=" shadow-2xl  p-3">
              <div className="w-full h-[300px]">
                <img
                  src={fulldev}
                  className="m-auto h-full w-full max-w-full rounded-2xl  object-cover"
                />

              </div>
              <div className="w-full p-2">
                <h1 className="text-[#1b2430] text-[20px] font-bold font-serif">The Complete Java Development Bootcamp
                </h1>
                <p className=" text-[#1b2430] font-serif font-[200]">Updated July 2024</p>

              </div>
              
             

            </li>
            <li className="shadow-2xl p-3">
              <div className="w-full h-[300px]">
                <img
                  src={database}
                  className="m-auto w-full h-full rounded-2xl  object-cover"
                />

              </div>
              <div className="w-full p-2">
                <h1 className="text-[#1b2430] text-[20px] font-bold font-serif">Database Management System (DBMS) & SQL : Complete Pack-2024
                </h1>
                <p className=" text-[#1b2430] font-serif font-[200]">Updated July 2024</p>

              </div>
             

            </li>
            <li className="shadow-2xl p-3">
              <div className="w-full h-[300px]">

                <img
                  src={corejava}
                  className="m-auto w-full h-full rounded-2xl  object-cover"
                />

              </div>
              <div className="w-full p-2">
                <h1 className="text-[#1b2430] text-[20px] font-bold font-serif">Java from Zero to First Job, Practical Guide, 2000+ examples</h1>
                <p className=" text-[#1b2430] font-serif font-[200]">Updated July 2024</p>

              </div>
             
              
            </li>
            <li className="shadow-2xl p-3">
              <div className="w-full h-[300px]">
              <img
                src={devopsn}
                className="m-auto w-full h-full rounded-2xl  object-cover"
              />

              </div>

              <div className="w-full p-2">
                <h1 className="text-[#1b2430] text-[20px] font-bold font-serif">DevOps Beginners to Advanced with Projects</h1>
                <p className=" text-[#1b2430] font-serif font-[200]">Updated July 2024</p>

              </div>
              
              
            </li>
            {/* <li>
              <div className="w-[300px] h-[300px]">
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                />

              </div>

            </li> */}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#17cf97] text-[#ffffff] transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-[#17cf97] text-[#ffffff] transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  )
}
export default Skillcard