import React from "react";

//import React, { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const professionals = [
  {
    name: "Aarav Patel",
    role: "Software Engineer at Google",
    bio: "Loves mentoring students and teaching web development.",
  },
  {
    name: "Meera Kapoor",
    role: "UX Designer at Adobe",
    bio: "Passionate about user research and design thinking.",
  },
  {
    name: "Rohan Singh",
    role: "Data Analyst at Deloitte",
    bio: "Helps students explore data-driven careers.",
  },
  {
    name: "Aishwarya",
    role:"how to get good gpa",
    bio:"scores good in less amount of time",
  }
];

const Shadowpro = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Shadow a Professional
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Observe and learn from industry professionals in your field of interest. Gain real-world insights by shadowing their daily work.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {professionals.map((pro, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {pro.name}
              </h2>
              <p className="text-gray-700 italic">{pro.role}</p>
              <p className="mt-2 text-gray-600">{pro.bio}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                Request Shadow Session
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shadowpro;
