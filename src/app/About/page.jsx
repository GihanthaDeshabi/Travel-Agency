"use client";
import React from "react";
import About01 from "../../../public/images/about-01.webp";
import About02 from "../../../public/images/about-02.webp";
import About03 from "../../../public/images/about-03.webp";
import Author01 from "../../../public/images/author-01.webp";
import Author02 from "../../../public/images/author-02.webp";
import Author03 from "../../../public/images/author-03.webp";
import TourCompany01 from "../../../public/images/Tour-Company-01.webp";
import TourCompany02 from "../../../public/images/Tour-Company-02.webp";
import Adventure01 from "../../../public/images/adventure-01.webp";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faAngleRight,
  faLocationDot,
  faPlay,
  faShield,
  faUserTie,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import FAQ from "../Index/FAQ";

export default function page() {
  //

  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          About Us
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
            <Link href="#"> About Us</Link>
          </li>
        </ul>
      </div>
      {/* about */}
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-10">
          {/* Left Section */}
          <div className="lg:w-[50%] w-full">
            <div className="about-section flex flex-col">
              {/* About Heading */}
              <div className="about-heading mb-8 lg:mb-0">
                {/* ✅ 1. Removed "About Our Journey" badge */}

                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight unbounded-font">
                  Begin Your New Life Experience With Exploring New Destinations
                </h1>
                <p className="mb-4 text-[#64748b] text-base leading-relaxed">
                  Begin your new life experience by exploring exciting
                  destinations around the world. Every journey opens the door to
                  new cultures, unforgettable memories, and unique adventures.
                </p>
                <p className="text-[#64748b] text-base leading-relaxed">
                  Whether you seek peaceful beaches, vibrant cities, or
                  breathtaking mountains, traveling helps you discover more
                  about the world and yourself. Your next great experience is
                  only one journey away.
                </p>

                {/* Stats Counter - Mobile/Tablet */}
                <div className="grid grid-cols-3 gap-4 mt-8 lg:hidden">
                  <div className="text-center p-4 bg-gradient-to-br from-[#193555]/5 to-transparent rounded-xl">
                    <h3 className="text-3xl font-bold text-[#193555] unbounded-font">
                      50+
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Destinations</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#193555]/5 to-transparent rounded-xl">
                    <h3 className="text-3xl font-bold text-[#193555] unbounded-font">
                      1.2K+
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#193555]/5 to-transparent rounded-xl">
                    <h3 className="text-3xl font-bold text-[#193555] unbounded-font">
                      15+
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Years Exp.</p>
                  </div>
                </div>
              </div>

              {/* About Image - Desktop Only */}
              {/* ✅ 4. Made image smaller and better positioned */}
              <div className="about-image mt-12 hidden lg:block relative h-[400px]">
                <div className="absolute left-[-35%] w-[105%] h-[500px] rounded-r-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={About01}
                    alt="about image"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[50%] w-full space-y-6">
            {/* ✅ 2. Changed Customer Love Card to Black */}
            <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Author Section */}
                <div className="author-sec flex-shrink-0">
                  <div className="flex -space-x-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full border-3 border-white shadow-lg overflow-hidden ring-2 ring-white/20">
                      <Image
                        src={Author01}
                        alt="author"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-14 h-14 rounded-full border-3 border-white shadow-lg overflow-hidden ring-2 ring-white/20">
                      <Image
                        src={Author02}
                        alt="author2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-14 h-14 rounded-full border-3 border-white shadow-lg overflow-hidden ring-2 ring-white/20">
                      <Image
                        src={Author03}
                        alt="author3"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-14 h-14 rounded-full border-3 border-white shadow-lg overflow-hidden ring-2 ring-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <span className="text-sm font-bold">+9K</span>
                    </div>
                  </div>
                  <h2 className="text-white text-4xl font-bold unbounded-font">
                    1,234<span className="text-yellow-400">+</span>
                  </h2>
                </div>

                {/* Customers Text */}
                <div className="customers flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 leading-tight">
                    Customers Love The Tour Experiences
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Customers love the tour experiences for their seamless
                    planning, unforgettable moments, and personalized service.
                    Each journey is crafted to deliver comfort and adventure.
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-300">(4.9/5)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Travel Image */}
            <div className="about-travel rounded-3xl overflow-hidden shadow-xl group">
              <div className="relative h-[280px] md:h-[320px]">
                <Image
                  src={About02}
                  alt="about2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-2xl mt-10"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* About Place Section */}
            <div className="about-place grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ✅ 3. Image Card - Removed play button (not a video) */}
              <div className="rounded-3xl overflow-hidden shadow-xl group relative h-[300px] md:h-[350px]">
                <Image
                  src={About03}
                  alt="about3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Simple overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg font-semibold">
                      Explore Beautiful Places
                    </h4>
                  </div>
                </div>
              </div>

              {/* ✅ 2. Asian Trip Card - Changed to Black */}
              <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[300px] md:min-h-[350px] lg:h-[350px] hover:shadow-2xl transition-shadow duration-300">
                <div className="flex-1">
                  <div className="inline-block mb-3">
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      Special Offer
                    </span>
                  </div>
                  <h2 className="text-white text-xl md:text-xl lg:text-xl font-bold mb-3 md:mb-4 leading-tight">
                    Join Our Asian Travel Trip
                  </h2>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-xs leading-relaxed">
                    Discover the rich culture, beautiful landscapes, and
                    unforgettable adventures across Asia. From vibrant cities to
                    peaceful natural wonders.
                  </p>
                </div>

                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 mt-4 w-full lg:w-full md:w-full self-start">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tour company */}
      {/* -------------------------------------------------------------------------------------------------------- */}
      <div className="tour-company px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] flex flex-col items-center justify-center ">
        <div className="tour-content">
          <h1 className="text-3xl lg:text-5xl text-center font-semibold mb-5 ">
            We Are The Most Popular Travel & Tour Company
          </h1>
          <p className="text-[#7a7a7a] text-center text-[15px] ">
            With over 15 years of experience and thousands of satisfied
            travelers, we've established ourselves as the leading travel agency
            in Asia. Our expert guides, personalized itineraries, and commitment
            to exceptional service make us the preferred choice for
            unforgettable adventures across the continent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10">
          {/* Card 1 - Luxury Vehicles */}
          <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <i className="ri-car-line text-white text-xl md:text-2xl"></i>

            <div className="tour-text">
              <h2 className="font-bold text-2xl md:text-3xl text-[#193555] unbounded-font">
                50+
              </h2>
              <span className="text-[#7a7a7a] text-sm md:text-base">
                Luxury Vehicles
              </span>
            </div>
          </div>

          {/* Card 2 - Professional Guides */}
          <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <i className="ri-team-line text-white text-xl md:text-2xl"></i>

            <div className="tour-text">
              <h2 className="font-bold text-2xl md:text-3xl text-[#193555] unbounded-font">
                35+
              </h2>
              <span className="text-[#7a7a7a] text-sm md:text-base">
                Professional Guides
              </span>
            </div>
          </div>

          {/* Card 3 - Hotels & Accommodations */}
          <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <i className="ri-hotel-line text-white text-xl md:text-2xl"></i>

            <div className="tour-text">
              <h2 className="font-bold text-2xl md:text-3xl text-[#193555] unbounded-font">
                200+
              </h2>
              <span className="text-[#7a7a7a] text-sm md:text-base">
                Hotels & Accommodations
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-10 ">
          <div className="w-full lg:w-2/3">
            <Image src={TourCompany01} alt="tour" className="rounded-2xl" />
          </div>
          <div className="w-full lg:w-1/3">
            <Image
              src={TourCompany02}
              alt="tour2"
              className="rounded-2xl h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
      {/* faq */}
      {/* ------------------------------------------------------------------------------------------------- */}
      <FAQ />

      <div className="banner-section bg-gradient-to-tr from-[#000000] via-[#1a1410] py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%] relative overflow-hidden">
        {/* Animated Background Elements - Same as FAQ */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#193555] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="banner relative mx-auto w-full lg:w-[90%] xl:w-[85%] max-w-[1400px] h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl z-10">
          {/* Play Button */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/50 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-xl group-hover:scale-110">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-white text-3xl lg:text-4xl ml-1"
              />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="banner-overlay"></div>

          {/* Optional: Banner Title */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 lg:p-10">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 unbounded-font">
              Experience the Journey
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Watch our exclusive travel documentary and discover the beauty of
              Asia
            </p>
          </div>
        </div>
      </div>

      {/* adventure */}
      {/* --------------------------------------------------------------------------------------------------------- */}
      <div className="adventure flex flex-col lg:flex-row px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] gap-10 lg:gap-16">
        {/* Left Side - Content */}
        <div className="w-full lg:w-[45%] adventure-content">
          <h2 className="text-4xl md:text-5xl mb-4 font-semibold unbounded-font">
            Adventure Gives New Experiences
          </h2>
          <p className="text-[#7a7a7a] mb-8 text-sm md:text-base leading-relaxed">
            Step out of your comfort zone and embrace the unknown. Every
            adventure opens doors to new cultures, perspectives, and
            unforgettable moments that transform the way you see the world and
            yourself.
          </p>

          {/* Adventure Features */}
          <div className="space-y-6">
            {/* Safe Traveling */}
            <div className="adventure-section flex items-start gap-5">
              <div className="adventure-icons flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#193555] rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-white text-xl md:text-2xl"
                  />
                </div>
              </div>
              <div className="adventure-text flex-1">
                <h3 className="mb-2 font-semibold text-lg md:text-xl">
                  Safe Traveling
                </h3>
                <p className="text-[#7a7a7a] text-sm md:text-base leading-relaxed">
                  Your safety is our priority. We ensure secure transportation,
                  verified accommodations, and 24/7 support throughout your
                  journey.
                </p>
              </div>
            </div>

            {/* Professional Guides */}
            <div className="adventure-section flex items-start gap-5">
              <div className="adventure-icons flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#193555] rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="text-white text-xl md:text-2xl"
                  />
                </div>
              </div>
              <div className="adventure-text flex-1">
                <h3 className="mb-2 font-semibold text-lg md:text-xl">
                  Expert Guides
                </h3>
                <p className="text-[#7a7a7a] text-sm md:text-base leading-relaxed">
                  Travel with experienced local guides who bring destinations to
                  life with insider knowledge and authentic stories.
                </p>
              </div>
            </div>

            {/* Best Destinations */}
            <div className="adventure-section flex items-start gap-5">
              <div className="adventure-icons flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#193555] rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-white text-xl md:text-2xl"
                  />
                </div>
              </div>
              <div className="adventure-text flex-1">
                <h3 className="mb-2 font-semibold text-lg md:text-xl">
                  Best Destinations
                </h3>
                <p className="text-[#7a7a7a] text-sm md:text-base leading-relaxed">
                  Explore handpicked locations that offer unique experiences,
                  breathtaking views, and unforgettable memories.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[55%] relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={Adventure01}
              alt="Adventure Experience"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Optional: Floating Badge */}
            {/* <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <p className="text-sm font-semibold text-[#193555]">
          ⭐ Top Rated Experience
        </p>
      </div> */}

            {/* Optional: Bottom Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-bold text-lg mb-1">Unforgettable Moments</h4>
              <p className="text-sm text-gray-600">
                Join 1,200+ travelers who discovered their perfect adventure
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
