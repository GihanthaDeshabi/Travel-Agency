"use client";

// import { FontAwesomeIcon, FortAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-brand-svg-icons";
import Link from "next/link";
import toursData from "../../context/ToursData.json";
import { useState } from "react";


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
                testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
            </p>
        </div>
    </div>
    </>
  )
}
