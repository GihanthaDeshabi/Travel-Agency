"use client";
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "1. What should I prepare for a trip to Asia?",
    answer: "When preparing for an Asia trip, ensure your passport is valid for at least 6 months, obtain necessary visas, get recommended vaccinations, purchase comprehensive travel insurance, and pack appropriate clothing for the climate."
  },
  {
    question: "2. What is the best time to visit Asia?",
    answer: "The best time varies by region. Generally, November to February offers pleasant weather across most of Southeast Asia. For East Asia, spring (March-May) and autumn (September-November) are ideal."
  },
  {
    question: "3. Do I need vaccinations before traveling to Asia?",
    answer: "Yes, certain vaccinations are recommended depending on your destination. Common ones include Hepatitis A and B, Typhoid, Japanese Encephalitis, and routine vaccines like MMR and Tetanus."
  },
  {
    question: "4. How much money should I budget for a trip to Asia?",
    answer: "Budget varies greatly by country and travel style. Southeast Asian countries can cost $30-50 per day for budget travelers, $80-150 for mid-range, and $200+ for luxury."
  },
  {
    question: "5. Is it safe to travel alone in Asia?",
    answer: "Asia is generally safe for solo travelers, especially in popular tourist destinations. Countries like Japan, Singapore, and South Korea have very low crime rates. Always practice common sense and stay aware."
  },
  {
    question: "6. What are the must-visit destinations in Asia?",
    answer: "Top destinations include Tokyo and Kyoto in Japan, Bali for beaches, Bangkok and Chiang Mai in Thailand, Ha Long Bay in Vietnam, Angkor Wat in Cambodia, Singapore, and the Himalayas in Nepal."
  }
];

function FAQItem({ item, index, isOpen, toggle }) {
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
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
      <button
        onClick={() => toggle(index)}
        className="w-full cursor-pointer text-left flex justify-between items-center p-5 lg:p-6 font-semibold text-white hover:text-gray-300 transition-colors"
      >
        <span className="text-base md:text-lg pr-4">{item.question}</span>
        <FontAwesomeIcon 
          icon={isOpen ? faAngleUp : faAngleDown} 
          className={`ml-2 text-yellow-400 transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef}>
          <p className="text-gray-400 text-sm md:text-base px-5 lg:px-6 pb-5 lg:pb-6 leading-relaxed border-t border-white/10 pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-gradient-to-br from-[#000000] via-[#1a1410]  relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#193555] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12 animate-slide-in-left">
          <div className="inline-block mb-4">
           
          </div>
          <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold mb-4 unbounded-font leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Find answers to common questions about traveling to Asia. Still have questions? Feel free to contact us!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mx-auto w-full lg:w-[80%]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={isOpen}
                toggle={toggle}
              />
            );
          })}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="btn bg-white group hover:bg-[#193555] font-bold px-8 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="unbounded-font text-sm xl:text-md uppercase text-[#193555] group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
            </button>
        </div>
      </div>
    </div>
  );
}