"use client";

// import { FontAwesomeIcon, FortAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import toursData from "../../context/ToursData.json";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import {ToursDetails } from "../ToursDetails/[id]/page.jsx";

export default function Index() {
    const [selectedTour, setSelectedTour] = useState(null);

  return (
    <>

    <div className="hero h-screen min-h-screen z-10 flex items-center justify-center">
      <div className="hero-content relative text-center">
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold">Enjoy Your Best <br/> Travel</h1>
        <p className="pt-3 text-[#ffffff] md:pb-10 p-5">Planing for a trip ? we Will organize your trip with the best places</p>
        <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
            <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider ">View All Tours</a>
        </button>
      </div>
    </div>

    {/* -------------------------------------------------------------------------------------------------- */}
    <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14 ">
        <div className="travel-content text-center">
            <h1 className="unbounded-font text-4xl font-semibold pb-3"> Find Out Best Travel Choice</h1>
            <p className="w-[60%] mx-auto text-[#193555">
                Discover the perfect travel option for your next journey with quick insights, smart comparisons, and tailored recommendations—making your trip easier, smoother, and more enjoyable.
            </p>
        </div>
        <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {toursData.map((tour) => (
               <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
                <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
                    <Image src={tour.images} width={400} height={300} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"  />

                    <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent" >
                    <div className="">
                        <h2 className="text-xl font-semibold unbounded-font pb-1">
                            {tour.title}
                        </h2>
                        <p className="text-[#ffffff91] text-xs flex items-center gap-1">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {tour.location}
                        </p>
                    </div>
                    <h4 className="text-xl font-semibold unbounded-font text-right">
                       <span className=" text-[#ffffff91 text-xs font-normal">
                        Start From </span> {""}<br/>                       
                        ${tour.price}                       
                    </h4>

                    </div>
                </div>
               </Link>
            ))
            }
        </div>
    </div>
    </>
  )
}
