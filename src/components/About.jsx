import { Link } from "react-router-dom";

export default function About() {
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
          About Us
        </h1>
        <p className="mt-2 text-gray-700 text-center text-lg">
          Learn more about our boat booking services.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2024 Boat Booking App. All rights reserved.</p>
      </footer>
    </div>
  );
}