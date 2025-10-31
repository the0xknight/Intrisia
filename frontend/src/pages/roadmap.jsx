import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const careers = [
  {
    title: "Software Developer",
    steps: ["Learn C / Python / JavaScript", "Build Projects", "Learn DSA", "Internships", "Full-time Job"],
  },
  {
    title: "Graphic Designer",
    steps: ["Learn Canva / Photoshop", "Understand Color Theory", "Portfolio Creation", "Freelance / Internship"],
  },
  {
    title: "Data Scientist",
    steps: ["Learn Python & Statistics", "Master Pandas & NumPy", "Build ML Models", "Participate in Kaggle Competitions"],
  },
  {
    title: "Digital Marketer",
    steps: ["Learn SEO & SEM", "Understand Social Media Marketing", "Create Campaigns", "Analyze Metrics"],   
  },{
    title: "Civil Engineer",
    steps: ["Learn AutoCAD & STAAD Pro", "Understand Structural Analysis", "Internships", "Site Visits"],
  },
  {
    title: "Teacher",
    steps: ["Earn a Degree in Education", "Classroom Management Skills", "Student Engagement Techniques", "Teaching Practice"], 
  },{
    title: "Nurse",
    steps: ["Complete Nursing Program", "Gain Clinical Experience", "Obtain Licensure", "Specialize if Desired"],
  },
  { 
    title: "Accountant",
    steps: ["Learn Accounting Principles", "Master Excel & Accounting Software", "Internships", "Certifications (CPA, CMA)"], 
  },{
    title: "Chef",
    steps: ["Culinary School", "Learn Cooking Techniques", "Gain Kitchen Experience", "Create Signature Dishes"], 
  },{
    title: "Mechanical Engineer",
    steps: ["Learn CAD Software", "Understand Thermodynamics", "Internships", "Work on Engineering Projects"], 
  },{
    title: "Marketing Manager",
    steps: ["Learn Marketing Fundamentals", "Understand Consumer Behavior", "Create Marketing Strategies", "Analyze Campaign Performance"],
  },{
    title: "Civil Engineer",
    steps: ["Learn AutoCAD & STAAD Pro", "Understand Structural Analysis", "Internships", "Site Visits"],
  },
   
];

const Roadmap = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Career Roadmaps</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {careers.map((career, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">{career.title}</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {career.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
