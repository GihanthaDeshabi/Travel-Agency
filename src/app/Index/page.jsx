"use client";

// import { FontAwesomeIcon, FortAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import toursData from "../../context/ToursData.json";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
// import {ToursDetails } from "../ToursDetails/[id]/page.jsx";
import About01 from "../../../public/images/about-01.webp";
import About02 from "../../../public/images/about-02.webp";
import About03 from "../../../public/images/about-03.webp";
import Author01 from "../../../public/images/author-01.webp";
import Author02 from "../../../public/images/author-02.webp";
import Author03 from "../../../public/images/author-03.webp";
// import Author04 from "../../../public/images/author-04.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogPage01 from "../../assest/Blog-Page-01.webp";
import BlogPage02 from "../../assest/Blog-Page-02.webp";
import BlogPage03 from "../../assest/Blog-Page-03.webp";
import user from "../../assest/user.png";
import FAQ from "./FAQ";

export default function Index() {
  const [selectedTour, setSelectedTour] = useState(null);

  

  return (
    <>
      {/* hero */}
      <div className="hero h-screen min-h-screen z-10 flex items-center justify-center">
        <div className="hero-content relative text-center">
          <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold">
            Enjoy Your Best <br /> Travel
          </h1>
          <p className="pt-3 text-[#ffffff] md:pb-10 p-5">
            Planing for a trip ? we Will organize your trip with the best places
          </p>
          <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
            <a
              href="#"
              className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider "
            >
              View All Tours
            </a>
          </button>
        </div>
      </div>
      {/* tours */}
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14 ">
        <div className="travel-content text-center">
          <h1 className="unbounded-font text-4xl font-semibold pb-3">
            {" "}
            Find Out Best Travel Choice
          </h1>
          <p className="w-[60%] mx-auto text-[#193555">
            Discover the perfect travel option for your next journey with quick
            insights, smart comparisons, and tailored recommendations—making
            your trip easier, smoother, and more enjoyable.
          </p>
        </div>
        <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {toursData.map((tour) => (
            <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
              <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
                <Image
                  src={tour.images}
                  width={400}
                  height={300}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-gradient-to-t from-black/70 to-transparent">
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
                      Start From{" "}
                    </span>{" "}
                    {""}
                    <br />${tour.price}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
      {/* Testimonial */}
      {/*------------------------------------------------------------------------------------------------------ */}
      <div className="testimonials bg-gradient-to-br from-[#0e0700] to-[#1a1410] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="pb-10 testimonials-content flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 items-start w-full">
          <h2 className="xl:w-[50%] w-full text-white text-3xl md:text-4xl xl:text-5xl unbounded-font leading-tight">
            Discover A Mesmerizing Nature Landscape & Stunning Culture
          </h2>
          <div className="xl:w-[50%] w-full">
            <p className="text-gray-400 pb-5 text-sm md:text-base leading-relaxed">
              Discover a mesmerizing natural landscape and stunning culture that
              will captivate your senses. From breathtaking scenery to rich
              traditions, every moment offers a unique and unforgettable
              experience.
            </p>
            <button className="btn bg-white group hover:bg-[#193555] font-bold px-8 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="unbounded-font text-sm xl:text-md uppercase text-[#193555] group-hover:text-white transition-colors duration-300">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* Swiper Testimonials */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1199: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="testimonials-swiper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="tst-item bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-6 rounded-2xl h-[320px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10">
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                  "An absolutely amazing experience! The tour was
                  well-organized, and the destinations were breathtaking. I
                  highly recommend this to anyone looking for adventure and
                  culture."
                </p>
              </div>

              {/* User Info */}
              <div className="tst-user flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src={user}
                    fill
                    className="object-cover"
                    alt="Sarah Johnson"
                  />
                </div>
                <div>
                  <h4 className="text-white unbounded-font font-semibold text-sm">
                    Sarah Johnson
                  </h4>
                  <p className="text-gray-500 text-xs">Travel Blogger</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="tst-item bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-6 rounded-2xl h-[320px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10">
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                  "Every detail was perfect from start to finish. The landscapes
                  were stunning and the cultural experiences were truly
                  authentic. Best vacation ever!"
                </p>
              </div>

              {/* User Info */}
              <div className="tst-user flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src={user}
                    fill
                    className="object-cover"
                    alt="Michael Chen"
                  />
                </div>
                <div>
                  <h4 className="text-white unbounded-font font-semibold text-sm">
                    Michael Chen
                  </h4>
                  <p className="text-gray-500 text-xs">Adventure Enthusiast</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="tst-item bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-6 rounded-2xl h-[320px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10">
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                  "Exceptional service and unforgettable memories. The guides
                  were knowledgeable and friendly. I can't wait to book my next
                  trip with them!"
                </p>
              </div>

              {/* User Info */}
              <div className="tst-user flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src={user}
                    fill
                    className="object-cover"
                    alt="Emily Rodriguez"
                  />
                </div>
                <div>
                  <h4 className="text-white unbounded-font font-semibold text-sm">
                    Emily Rodriguez
                  </h4>
                  <p className="text-gray-500 text-xs">Photographer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="tst-item bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-6 rounded-2xl h-[320px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10">
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                  "A life-changing journey! The natural beauty combined with
                  rich cultural heritage made this trip truly special. Highly
                  professional team!"
                </p>
              </div>

              {/* User Info */}
              <div className="tst-user flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src={user}
                    fill
                    className="object-cover"
                    alt="David Kumar"
                  />
                </div>
                <div>
                  <h4 className="text-white unbounded-font font-semibold text-sm">
                    David Kumar
                  </h4>
                  <p className="text-gray-500 text-xs">Travel Writer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 5 */}
          <SwiperSlide>
            <div className="tst-item bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-6 rounded-2xl h-[320px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10">
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                  "Outstanding experience from booking to the final day. Every
                  location was carefully selected and the entire journey was
                  seamless. Five stars!"
                </p>
              </div>

              {/* User Info */}
              <div className="tst-user flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src={user}
                    fill
                    className="object-cover"
                    alt="Jessica Williams"
                  />
                </div>
                <div>
                  <h4 className="text-white unbounded-font font-semibold text-sm">
                    Jessica Williams
                  </h4>
                  <p className="text-gray-500 text-xs">Marketing Director</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 6 */}
          <SwiperSlide>
            <div className="tst-item bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-6 rounded-2xl h-[320px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-white/10">
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
                  "Incredible value for money! The tour exceeded all my
                  expectations. The blend of adventure and relaxation was
                  perfect. Will definitely return!"
                </p>
              </div>

              {/* User Info */}
              <div className="tst-user flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30">
                  <Image
                    src={user}
                    fill
                    className="object-cover"
                    alt="James Anderson"
                  />
                </div>
                <div>
                  <h4 className="text-white unbounded-font font-semibold text-sm">
                    James Anderson
                  </h4>
                  <p className="text-gray-500 text-xs">Business Owner</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
      {/* Experience */}
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[50px] bg-gradient-to-br from-[#0e0700] via-[#1a1410] to-[#000000] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#193555] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="experience-content flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 items-start w-full relative z-10">
          {/* Left Content */}
          <div className="xl:w-[50%] w-full">
            <div className="inline-block mb-4 animate-slide-in-left">
              {/* <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold border border-white/20">
          ✨ Premium Experience
        </span> */}
            </div>
            <h2 className="text-white text-3xl md:text-4xl xl:text-5xl leading-tight unbounded-font mb-6 animate-slide-in-left animation-delay-100">
              Enjoy Our Best Quality Tour & Experience
            </h2>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-8 animate-slide-in-left animation-delay-200">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <h3 className="text-3xl font-bold text-white unbounded-font group-hover:scale-110 transition-transform">
                  50+
                </h3>
                <p className="text-xs text-gray-400 mt-1">Destinations</p>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <h3 className="text-3xl font-bold text-white unbounded-font group-hover:scale-110 transition-transform">
                  1.2K+
                </h3>
                <p className="text-xs text-gray-400 mt-1">Happy Clients</p>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <h3 className="text-3xl font-bold text-white unbounded-font group-hover:scale-110 transition-transform">
                  15+
                </h3>
                <p className="text-xs text-gray-400 mt-1">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="xl:w-[40%] w-full animate-slide-in-right">
            <p className="text-gray-400 pb-6 text-sm md:text-base leading-relaxed">
              Experience world-class tour services designed to create
              unforgettable memories. Our expert guides, carefully curated
              destinations, and premium accommodations ensure every moment of
              your journey is exceptional. From breathtaking landscapes to
              immersive cultural experiences, we deliver excellence at every
              step.
            </p>

            {/* Feature List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm">Professional Tour Guides</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm">Luxury Accommodations</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm">24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm">Best Price Guarantee</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="btn bg-white group hover:bg-[#193555] font-bold px-8 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="unbounded-font text-sm xl:text-md uppercase text-[#193555] group-hover:text-white transition-colors duration-300">
                Learn More
              </span>
            </button>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-3 text-gray-400 text-xs">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-[#0e0700] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-[#0e0700] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-[#0e0700] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <span>Trusted by 1,200+ satisfied travelers</span>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      {/* --------------------------------------------------------------------------------------------------------------------*/}
      <FAQ />

      {/* contact banner  */}
      {/* ----------------------------------------------------------------------------------------------------------------------- */}
      <div className="contact-banner flex justify-center items-center">
        <div className="contact-banner-content relative text-center">
          <h1 className="xl:text-5xl lg:text-7xl text-4xl text-white unbounded-font font-bold">
            Get Closer with US & <br /> Get Special Promo
          </h1>
          <p className="pt-6 text-[#ffffffb3] pb-10 text-center max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Join our community and unlock exclusive travel deals, early bird
            discounts, and personalized tour packages. Subscribe to our
            newsletter and be the first to know about special promotions,
            seasonal offers, and amazing travel destinations across Asia.
          </p>
          <button className="btn bg-white group hover:bg-[#193555] font-bold px-8 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="unbounded-font text-sm xl:text-md uppercase text-[#193555] group-hover:text-white transition-colors duration-300">
              Contact US {/* ✅ Fixed typo: "LContact US" → "Contact US" */}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
