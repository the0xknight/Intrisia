import React, { useState } from "react";

const careerData = [
  {
    title: "Software Engineer",
    description:
      "Designs, builds, and maintains software systems and applications.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    title: "Graphic Designer",
    description:
      "Creates visual concepts to communicate ideas through design tools.",
    image: "https://cdn-icons-png.flaticon.com/512/3597/3597075.png",
  },
  {
    title: "Data Scientist",
    description:
      "Analyzes complex data to find patterns and help in decision-making.",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149654.png",
  },
  {
    title: "Marketing Manager",
    description:
      "Develops strategies to promote products and services to target audiences.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",  
  },
  {
    title: "Civil Engineer",
    description: "Plans and oversees construction projects like roads and buildings.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",   
  },
  {
    title: "Teacher",
    description:
      "Educates students in various subjects and fosters a positive learning environment.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995576.png",},
    {
    title: "Nurse",
    description:
      "Provides medical care and support to patients in healthcare settings.",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    },
    { 
    title: "Accountant",
    description:
      "Manages financial records, prepares reports, and ensures compliance with regulations.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995550.png",
  },{
    title: "Chef",
    description:
      "Prepares and cooks food in restaurants or other dining establishments.",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", 
  },{
    title: "Mechanical Engineer",
    description:
      "Designs and develops mechanical systems and devices.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995564.png", 
  },
  {
    title: "Photographer",
    description:
      "Captures images to tell stories or document events.",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921825.png", 
  }
    
];

const ExplorePage = () => {
  const [search, setSearch] = useState("");

  const filteredCareers = careerData.filter((career) =>
    career.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Explore Career Opportunities
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search a career..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCareers.map((career, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={career.image}
              alt={career.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              {career.title}
            </h2>
            <p className="text-gray-600 text-center">{career.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
