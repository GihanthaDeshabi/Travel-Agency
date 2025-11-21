"use client";

import React from "react";
import FAQ from "../Index/FAQ";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import user from "../../assest/user.png";
import FAQWhite from "./FAQWhite";

export default function page() {
  return (
    <>
      {/* pagetitle */}
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          FAQ
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
            <Link href="#"> FAQ</Link>
          </li>
        </ul>
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
      <FAQWhite />
    </>
  );
}
