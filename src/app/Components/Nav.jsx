"use client";

import { FontAwesomeIcon, FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    FaPhone,
    faEnvelope,
    faUser,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { useEffect , useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [isOpen , setIsOpen ] =useState(false);
    const [isScrolled , setIsScrolled ] =useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll" , handleScroll);
        return () => {
            window.removeEventListener("scroll" , handleScroll);
        };
    } , []);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white py-3 backdrop-blur shadow-md scrolled' : 'py-0'}`}>
        <div className={`nav-top w-full flex justify-between items-center gap-3 px[2%] sm:px-[8%] lg:px=[12%] overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-[200px] opacity-100 py-3'}`}>
         <ul className="hidden lg:flex items-center gap-3 text-[#727272] ">
            <li className=" text-sm">
                <FontAwesomeIcon icon={faPhone} className="pr-1 text-[#727272] "/>
                <span>+94 701234567</span>
            </li>

            <li className=" text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-[#8192a0] "/>
                <span>Booking@travefly.com</span>
            </li>
         </ul>

         <div className="flex items-center justify-between lg:justify-center gap-3 text-[#727272] w-full lg:w-auto ">
            <ul className="flex items-center gap-3">
                <li>
                    <FontAwesomeIcon icon={faFacebook} className="text-[#8192a0]"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFlickr} className="text-[#8192a0]"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faXTwitter} className="text-[#8192a0]"/>
                </li>   
            </ul>

            <ul className="flex items-center gap-4 ps-2">
                <li className=" lg:text-md text-sm cursor-pointer">
                    <i className="ri-lock-line pr-1 text-[#8192a0]"></i>
                    <span>Login</span>
                </li>
                <li className=" lg:text-md text-sm cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="text-[#8192a0]"/>
                    <span>Sign Up</span>
               </li>
            </ul>
         </div>
        </div>
{/* --------------------------------------------------------------------------------- */}



        <div className={`w-full px-[2%] sm:px-[8%] lg:px-[12%] text-start lg:text-center relative flex justify-between lg:justify-center nav-menu-container transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="lg:hidden flex logo text-2xl uppercase font-semibold "> 
                <a href="#" className=" unbounded-font"> Travel <span className=" unbounded-font">Agency</span></a>
            </div>
            <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-5 relative">
                <li>
                    <Link href="/" className="active font-[500] hover:text-black transition-colors duration-500"> Home </Link>
                </li>
                <li>
                    <Link href="/About" className=" font-[500] text-[#697e8a] hover:text-black transition-colors duration-500"> About </Link>
                </li>
                <li>
                    <Link href="/Tours" className=" font-[500] text-[#697e8a] hover:text-black transition-colors duration-500"> Tours </Link>
                </li>
                <div className="logo text-3xl uppercase font-semibold">
                    <Link href="/" className=" unbounded-font"> Trave <span className=" unbounded-font">Fly</span></Link>
                </div>
                <li>
                    <Link href="/Faq" className=" font-[500] text-[#697e8a] hover:text-black transition-colors duration-500"> FAQ </Link>
                </li>
                <li>
                    <Link href="/Blog" className=" font-[500] text-[#697e8a] hover:text-black transition-colors duration-500"> Blogs </Link>
                </li>
                <li>
                    <Link href="/Contact" className=" font-[500] text-[#697e8a] hover:text-black transition-colors duration-500"> Contact </Link>
                </li>
            </ul>
{/* ----------------------------------------------------------------------------------------------------- */}
            <div className="justify-center flex items-center">
               <div className="toggle-btn lg:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-[#193555] text-xl"/>
               </div> 
            </div>

            <ul className={`lg:hidden flex flex-col bg-[#f7f7f7] shadow-md absolute items-start ps-10 gap-6 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out  ${isOpen ? 'max-h-[500px] top-full mt-3 opacity-100 py-6' : 'max-h-0 opacity-0 top-full py-0 '}`}>
                <li>
                    <a href="#" className="font-[500px] hover:text-black">Home</a>
                </li>
                <li>
                    <a href="/About" className="font-[500px] hover:text-black">About</a>
                </li>
                <li>
                    <a href="/Tours" className="font-[500px] hover:text-black">Tours</a>
                </li>
                <li>
                    <a href="/Faq" className="font-[500px] hover:text-black">FAQ</a>
                </li>
                <li>
                    <a href="/Blog" className="font-[500px] hover:text-black">Blogs</a>
                </li>
                <li>
                    <a href="/Contact" className="font-[500px] hover:text-black">Contact</a>
                </li>
            </ul>

        </div>

    </nav>
  )
}
