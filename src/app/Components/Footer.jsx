"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail("");

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="footer bg-black px-[2%] sm:px-[8%] lg:px-[12%] pt-[50px] lg:pt-[90px] pb-8">
        <div className="footer-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Logo & Social Section */}
            <div className="lg:col-span-3">
              <div className="text-white logo text-2xl md:text-3xl uppercase font-semibold">
                <a
                  href="/"
                  className="unbounded-font hover:text-gray-300 transition-colors"
                >
                  Trave<span className="unbounded-font">Fly</span>
                </a>
              </div>
              <p className="mt-4 text-[#ffffffb3] text-sm md:text-base">
                Colombo, Sri Lanka
              </p>
              <p className="mt-2 text-[#ffffffb3] text-sm">
                Email: info@travefly.com
                <br />
                Phone: +94 123 456 789
              </p>
              <div className="footer-icons flex gap-4 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E4405F] transition-all duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#ffffffb3] text-lg group-hover:text-white transition"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-all duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#ffffffb3] text-lg group-hover:text-white transition"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-black transition-all duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-[#ffffffb3] text-lg group-hover:text-white transition"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-[#ffffffb3] text-lg group-hover:text-white transition"
                  />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
              {/* Pages Column */}
              <div className="space-y-4">
                <h2 className="text-white text-xl md:text-2xl unbounded-font font-semibold">
                  Pages
                </h2>
                <ul className="space-y-3 list-none">
                  <li>
                    <a
                      href="/about"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/destinations"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a
                      href="/support"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links Column */}
              <div className="space-y-4">
                <h2 className="text-white text-xl md:text-2xl unbounded-font font-semibold">
                  Resources
                </h2>
                <ul className="space-y-3 list-none">
                  <li>
                    <a
                      href="/privacy"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/career"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      Travel Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-[#ffffffb3] text-sm md:text-base hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Column */}
              <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                <h2 className="text-white text-xl md:text-2xl unbounded-font font-semibold">
                  Our Newsletter
                </h2>
                <p className="text-[#ffffffb3] text-sm md:text-base leading-relaxed">
                  Subscribe to get special offers, free giveaways, and exclusive
                  travel deals.
                </p>

                {/* Success Message */}
                {showSuccess && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 flex items-center gap-2 animate-slide-in-right">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500 text-xl"
                    />
                    <div>
                      <p className="text-green-400 text-sm font-semibold">
                        Successfully Subscribed!
                      </p>
                      <p className="text-green-300 text-xs">
                        Thank you for joining our newsletter.
                      </p>
                    </div>
                  </div>
                )}

                {/* Newsletter Form - Enhanced for Mobile */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Mobile: Stacked Layout */}
                  {/* <div className="flex flex-col gap-3 md:hidden">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-sm bg-white/5 border border-[#ffffff4d] rounded-lg text-white placeholder-[#ffffff80] outline-none focus:border-white/80 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-[#193555] font-bold px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                      <span className="unbounded-font text-sm uppercase text-[#193555] group-hover:text-white transition-colors duration-300">
                        Subscribe Now
                      </span>
                    </button>
                  </div> */}

                  {/* Desktop/Tablet: Inline Layout */}
                  {/* Desktop/Tablet: Inline Layout */}
                  <div className="flex flex-col gap-3 xs:hidden ">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3 text-sm bg-transparent text-white placeholder-[#ffffff80] outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-white hover:bg-[#193555] newsletter font-bold px-8 py-3 cursor-pointer transition-all duration-300 group whitespace-nowrap flex-shrink-5"
                    >
                      <span className="unbounded-font text-sm uppercase text-[#193555] group-hover:text-white transition-colors duration-300">
                        Subscribe
                      </span>
                    </button>
                  </div>
                </form>

                <p className="text-[#ffffff80] text-xs mt-2">
                  By subscribing, you agree to our Privacy Policy
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="border-t border-[#ffffff1a] mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#ffffffb3] text-sm text-center md:text-left">
                © {new Date().getFullYear()} TraveFly. Design and Devloped by
                Gihantha Deshabi. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <a
                  href="/sitemap"
                  className="text-[#ffffffb3] text-sm hover:text-white transition-colors"
                >
                  Sitemap
                </a>
                <a
                  href="/accessibility"
                  className="text-[#ffffffb3] text-sm hover:text-white transition-colors"
                >
                  Accessibility
                </a>
                <a
                  href="/cookies"
                  className="text-[#ffffffb3] text-sm hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
