"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      {/* Page Banner */}
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          Contact Us
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
            <Link href="#"> Contact</Link>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-page px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        {/* Get In Touch Section */}
        <div className="text-center mb-12">
          <h2 className="unbounded-font text-3xl lg:text-4xl font-semibold mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-[#7a7a7a] max-w-2xl mx-auto">
            Have questions about your next adventure? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-section p-6 sm:p-8 lg:p-12 rounded-[20px] bg-[#0e0700] flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-[40%]">
            <h3 className="unbounded-font text-2xl text-white mb-8">
              Contact Information
            </h3>

            <div className="contact-content mb-8 flex items-start gap-4">
              <div className="bg-[#ff6600] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FontAwesomeIcon icon={faLocationDot} className="text-white text-lg" />
              </div>
              <div>
                <span className="uppercase text-[#7a7a7a] text-sm font-medium tracking-wider">
                  Office Address
                </span>
                <p className="text-white mt-2 text-lg">
                  123 Travel Street, <br />
                  Colombo 00700, <br />
                  Sri Lanka
                </p>
              </div>
            </div>

            <div className="contact-content mb-8 flex items-start gap-4">
              <div className="bg-[#ff6600] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
              </div>
              <div>
                <span className="uppercase text-[#7a7a7a] text-sm font-medium tracking-wider">
                  Phone Number
                </span>
                <p className="text-white mt-2 text-lg">
                  +94 701 235 478
                </p>
                <p className="text-white text-lg">
                  +94 112 345 678
                </p>
              </div>
            </div>

            <div className="contact-content mb-8 flex items-start gap-4">
              <div className="bg-[#ff6600] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
              </div>
              <div>
                <span className="uppercase text-[#7a7a7a] text-sm font-medium tracking-wider">
                  Email Address
                </span>
                <p className="text-white mt-2 text-lg">
                  info@travefly.com
                </p>
                <p className="text-white text-lg">
                  support@travefly.com
                </p>
              </div>
            </div>

            <div className="contact-content pt-6 border-t border-[#2a2a2a]">
              <p className="text-lg text-white mb-4 unbounded-font">
                Follow Us
              </p>
              <div className="contact-icons flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#ff6600] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#ff6600] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#ff6600] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#ff6600] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-white text-lg" />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#1a1a1a] rounded-xl">
              <p className="text-[#7a7a7a] text-sm">
                <span className="text-white font-semibold">Office Hours:</span><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-[60%]">
            <h3 className="unbounded-font text-2xl text-white mb-8">
              Send Us A Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#7a7a7a] focus:outline-none focus:border-[#ff6600] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#7a7a7a] focus:outline-none focus:border-[#ff6600] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#7a7a7a] focus:outline-none focus:border-[#ff6600] transition-colors"
                    placeholder="+94 701 234 567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#7a7a7a] focus:outline-none focus:border-[#ff6600] transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#7a7a7a] focus:outline-none focus:border-[#ff6600] transition-colors resize-none"
                  placeholder="Tell us about your travel plans or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#ffffff] text-black font-semibold rounded-lg hover:bg-[#e55a00] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>

              <p className="text-[#7a7a7a] text-sm mt-4">
                * Required fields. We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-12 rounded-[20px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63241844427!2d79.77380029999999!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Page