import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  // State to manage the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = () => {
    alert(`You searched for: ${searchQuery}`);
    // Add your search logic here (e.g., filter boats, navigate to a search results page, etc.)
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Boat Booking App</h1>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </Link>
            <Link
              to="/boats"
              className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Boats
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Welcome to Boat Booking App!
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for boats or yachts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        <p className="mt-6 text-gray-700 text-center text-lg">
          Find your dream boat or yacht today!
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2024 Boat Booking App. All rights reserved.</p>
      </footer>
    </div>
  );
}