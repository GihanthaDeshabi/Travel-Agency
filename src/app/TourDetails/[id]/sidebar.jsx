"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAngleRight,
  faUser,
  faUsers,
  faClose,
  faCheckCircle,
  faCalendar, // ✅ Added calendar icon
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import toursData from "../../../context/ToursData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

export default function Sidebar({ tour }) {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccess(true);
    
    // Auto-close success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <>
      <div className="xl:w-[30%] lg:w-[40%] w-full h-full sticky top-0 right-0 border-2 border-gray-100 rounded-md py-5 px-3 ">
        <h4 className="text-lg font-semibold pb-3">Booking Information</h4>
        <form method="post" className="">
          {/* ✅ Date Field */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-md font-[500]">Date:</label>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faCalendar}
                className="absolute top-3.5 left-3 text-gray-400"
              />
              <input
                type="date"
                className="border-2 border-gray-100 outline-0 rounded-md p-3 pl-10 w-full focus:border-[#193555] transition-colors"
                required
                min={new Date().toISOString().split('T')[0]} // ✅ Prevents selecting past dates
              />
            </div>
          </div>

          {/* Adult Field */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-md font-[500]">Adult:</label>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-3.5 left-3 text-gray-400"
              />
              <input
                type="number"
                placeholder="Number of adults"
                min="1"
                defaultValue="1"
                className="border-2 border-gray-100 outline-0 rounded-md p-3 pl-10 w-full focus:border-[#193555] transition-colors"
                required
              />
            </div>
          </div>

          {/* Child Field */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-md font-[500]">Child:</label>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faUsers}
                className="absolute top-3.5 left-3 text-gray-400"
              />
              <input
                type="number"
                placeholder="Number of children"
                min="0"
                defaultValue="0"
                className="border-2 border-gray-100 outline-0 rounded-md p-3 pl-10 w-full focus:border-[#193555] transition-colors"
                required
              />
            </div>
          </div>
        </form>

        <button
          type="button"
          className="btn text-white bg-[#193555] font-bold py-4 rounded-md cursor-pointer transition-colors duration-300 px-5 w-full hover:bg-[#1a4470]"
          onClick={() => setShowForm(true)}
        >
          <span className="text-sm xl:text-md uppercase transition-colors duration-300 tracking-wider">
            Book Now
          </span>
        </button>

        <h4 className="text-lg font-semibold mt-5 pb-2">
          Recommendation Tours
        </h4>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="travel-wrapper"
          navigation
        >
          {toursData.map((tour) => (
            <SwiperSlide key={tour.id}>
              <Link href={`/TourDetails/${tour.id}`}>
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
                      <span className="text-[#ffffff91] text-xs font-normal">
                        Start From
                      </span>
                      <br />${tour.price}
                    </h4>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Success Message Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-[60] p-4">
          <div 
            className="absolute inset-0 bg-black/50 cursor-pointer backdrop-blur-sm" 
            onClick={() => setShowSuccess(false)}
          ></div>
          
          <div className="bg-white w-full max-w-md z-10 relative rounded-2xl shadow-2xl p-8 text-center animate-bounce-in">
            <div className="mb-6">
              <FontAwesomeIcon 
                icon={faCheckCircle} 
                className="text-green-500 text-6xl animate-scale-in" 
              />
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-[#193555] mb-4 unbounded-font">
              Booking Submitted!
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for your booking request! We've received your information and 
              will contact you shortly to confirm your adventure.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-800">
                📧 A confirmation email has been sent to your inbox.
              </p>
            </div>
            
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-[#193555] text-white py-3 rounded-lg font-semibold hover:bg-[#1a4470] transition-colors"
            >
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 cursor-pointer backdrop-blur-sm" 
            onClick={() => setShowForm(false)}
          ></div>
          
          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors"
            aria-label="Close form"
          >
            <FontAwesomeIcon icon={faClose} className="text-2xl" />
          </button>

          {/* Form Container */}
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 relative rounded-2xl shadow-2xl">
            <h2 className="text-center unbounded-font pt-8 pb-4 text-2xl lg:text-4xl font-semibold text-[#193555]">
              Book Your Adventure
            </h2>
            
            <form method="post" onSubmit={handleSubmit} className="p-5 lg:p-10 space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="pb-2 text-sm font-semibold text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors"
                    required
                  />
                </div>
                
                <div className="flex flex-col">
                  <label className="pb-2 text-sm font-semibold text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-semibold text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-semibold text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors"
                  required
                />
              </div>

              {/* Date and People Count */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="pb-2 text-sm font-semibold text-gray-700">
                    Travel Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="pb-2 text-sm font-semibold text-gray-700">
                    Number of People <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors bg-white"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="flex flex-col">
                <label className="pb-3 text-sm font-semibold text-gray-700">
                  Preferred Contact Method <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="contact-method"
                      value="email"
                      className="w-5 h-5 text-[#193555] border-gray-300 rounded focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="contact-method"
                      value="phone"
                      className="w-5 h-5 text-[#193555] border-gray-300 rounded focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">Phone Call</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="contact-method"
                      value="sms"
                      className="w-5 h-5 text-[#193555] border-gray-300 rounded focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">Text Message</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="contact-method"
                      value="whatsapp"
                      className="w-5 h-5 text-[#193555] border-gray-300 rounded focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Best Time to Contact */}
              <div className="flex flex-col">
                <label className="pb-3 text-sm font-semibold text-gray-700">
                  Best Time to Contact
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact-time"
                      value="morning"
                      className="w-5 h-5 text-[#193555] border-gray-300 focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">Morning (8AM - 12PM)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact-time"
                      value="afternoon"
                      className="w-5 h-5 text-[#193555] border-gray-300 focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">Afternoon (12PM - 5PM)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact-time"
                      value="evening"
                      className="w-5 h-5 text-[#193555] border-gray-300 focus:ring-[#193555]"
                    />
                    <span className="text-gray-700">Evening (5PM - 8PM)</span>
                  </label>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-semibold text-gray-700">
                  Additional Message
                </label>
                <textarea
                  placeholder="Tell us about any special requirements or questions..."
                  rows={4}
                  className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Referral Field */}
              <div className="flex flex-col">
                <label className="pb-2 text-sm font-semibold text-gray-700">
                  How did you hear about us?
                </label>
                <select className="border-2 border-gray-200 focus:border-[#193555] outline-none rounded-lg p-3 transition-colors bg-white">
                  <option value="">Select an option...</option>
                  <option value="search">Search Engine (Google, Bing, etc.)</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="blog">Blog or Article</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-5 h-5 mt-0.5 text-[#193555] border-gray-300 rounded focus:ring-[#193555]"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link href="/privacy" className="text-[#193555] hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-[#193555] hover:underline">
                    Terms of Service
                  </Link>
                  <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#193555] text-white py-4 rounded-lg font-semibold hover:bg-[#1a4470] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider"
                >
                  Submit Booking Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}