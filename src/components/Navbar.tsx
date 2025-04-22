
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-iken">IKEN</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-iken hover:underline transition-colors duration-200">Home</Link>
          <Link to="/offers" className="text-gray-600 hover:text-iken hover:underline transition-colors duration-200">Offers</Link>
          <Link to="/register">
            <Button className="bg-iken hover:bg-iken-dark text-white transition-colors duration-200">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
