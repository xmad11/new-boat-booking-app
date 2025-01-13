import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Boats() {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch("https://api.example.com/boats") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setBoats(data))
      .catch((error) => console.error("Error fetching boats:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Boat Booking App</h1>
          <Link
            to="/"
            className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Available Boats
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boats.map((boat) => (
            <div
              key={boat.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold text-blue-600 mb-2">
                {boat.name}
              </h2>
              <p className="text-gray-700">{boat.description}</p>
              <p className="text-gray-700 mt-2">
                <strong>Price:</strong> ${boat.price}/day
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2024 Boat Booking App. All rights reserved.</p>
      </footer>
    </div>
  );
}
