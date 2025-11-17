"use client"
import React from 'react'


export default function BookingSidebar({ tour }) {
  return (
    <div className="xl:w-[30%] lg:w-[40%] w-full bg-gray-50 rounded-xl p-6 sticky top-5">
      <h3 className="text-2xl font-semibold mb-4 unbounded-font">Book This Tour</h3>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Price:</span>
          <span className="font-semibold">${tour.price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Location:</span>
          <span className="font-semibold">{tour.location}</span>
        </div>
      </div>
      <button className="w-full bg-[#193555] text-white py-3 rounded-md font-semibold hover:bg-[#1a4470] transition-colors">
        Book Now
      </button>
    </div>
  );
}