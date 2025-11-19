"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function FAQItem({ item, isOpen, toggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={toggle}
        className="w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold text-white"
      >
        <span>{item.question}</span>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </button>

      <div
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef}>
          <p className="text-gray-400 px-2 pb-4">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
