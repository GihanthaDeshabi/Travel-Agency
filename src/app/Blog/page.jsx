"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BlogPage01 from "../../assest/Blog-Page-01.webp";
import BlogPage02 from "../../assest/Blog-Page-02.webp";
import BlogPage03 from "../../assest/Blog-Page-03.webp";

export default function page() {
  return (
    <>
      {/* pagetitle */}
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          Tours
        </h2>
        <ul className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="/"> Home</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="absolute -left-6 top-0.5"
            />
            <Link href="#"> Tours</Link>
          </li>
        </ul>
      </div>
      {/* blog */}
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="w-full pb-5 ">
          <h1 className="unbounded-font text-4xl font-semibold pb-3">
            {" "}
            Our Latest Blogs
          </h1>
          <p className="text-[#193555]">
            Explore our latest blogs for fresh travel insights, helpful tips,
            and inspiring stories from around the world. Stay updated with new
            destinations, guides, and experiences curated just for you.{" "}
          </p>
        </div>

        <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="blog-card group cursor-pointer">
            <div className="overflow-hidden rounded-[20px] mb-4">
              <Image
                src={BlogPage01}
                alt="blog01"
                className="rounded-[20px] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-3 group-hover:text-[#193555] transition-colors">
              Tropical Bliss: Rejuvenate in Asia's Idyllic Beaches
            </h2>
            <p className="text-[#7a7a7a] text-sm leading-relaxed">
              Escape to paradise and discover Asia's most breathtaking beaches.
              From the crystal-clear waters of Thailand's Phi Phi Islands to the
              pristine shores of Bali, experience ultimate relaxation surrounded
              by stunning natural beauty. Let the gentle waves and golden
              sunsets restore your mind, body, and soul in these tropical
              havens.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#193555] font-semibold text-sm mt-4 group-hover:gap-3 transition-all"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="blog-card group cursor-pointer">
            <div className="overflow-hidden rounded-[20px] mb-4">
              <Image
                src={BlogPage02}
                alt="blog02"
                className="rounded-[20px] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-3 group-hover:text-[#193555] transition-colors">
              Asia's Thrilling Adventures: Hiking, Trekking And More
            </h2>
            <p className="text-[#7a7a7a] text-sm leading-relaxed">
              Embark on exhilarating adventures across Asia's diverse
              landscapes. Trek through the majestic Himalayas, hike ancient
              trails in Nepal, or explore the lush jungles of Vietnam. Whether
              you're scaling mountain peaks or discovering hidden waterfalls,
              Asia offers endless opportunities for adventure seekers and nature
              enthusiasts alike.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#193555] font-semibold text-sm mt-4 group-hover:gap-3 transition-all"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="blog-card group cursor-pointer">
            <div className="overflow-hidden rounded-[20px] mb-4">
              <Image
                src={BlogPage03}
                alt="blog03"
                className="rounded-[20px] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-3 group-hover:text-[#193555] transition-colors">
              Unforgettable Experiences: Asia's Must-Visit Destinations
            </h2>
            <p className="text-[#7a7a7a] text-sm leading-relaxed">
              Journey through Asia's most iconic destinations and create
              memories that last a lifetime. From the ancient temples of Angkor
              Wat to the bustling streets of Tokyo, immerse yourself in rich
              cultures and traditions. Experience the perfect blend of history,
              cuisine, and modern marvels that make Asia an unforgettable travel
              destination.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#193555] font-semibold text-sm mt-4 group-hover:gap-3 transition-all"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
