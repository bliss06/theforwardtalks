import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-gray-800">The Forward Talks</div>
      <div className="flex space-x-6 text-sm md:text-base font-medium">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
