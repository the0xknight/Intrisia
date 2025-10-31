import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-blue-50 flex flex-col items-center text-center">
      <section className="mt-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Discover Your Dream Career
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Explore your interests, take our quiz, and find the right career path for you.
        </p>
        <div className="space-x-4">
          <Link
            to="/quiz"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Take the Quiz
          </Link>
          <Link
            to="/explore"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
          >
            Explore Careers
          </Link>
          <Link
            to="/roadmap"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Roadmap
          </Link>
          <Link
            to="/shadowpro"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Shadow a Pro
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Explore Opportunities
          </h2>
          <p className="text-gray-600">
            Browse through hundreds of career options and learn what they really involve.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Personalized Roadmaps
          </h2>
          <p className="text-gray-600">
            Get step-by-step guides to start your journey toward your chosen career.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
