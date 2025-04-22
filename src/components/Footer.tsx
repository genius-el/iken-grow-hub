
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-iken mb-4">IKEN</h3>
            <p className="text-gray-600 mb-4">Empowering growth-minded individuals to reach their fullest potential.</p>
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-iken">Home</Link></li>
              <li><Link to="/offers" className="text-gray-600 hover:text-iken">Offers</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-iken">Join Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-iken">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iken">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iken">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-iken">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iken">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iken">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} IKEN Growth Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
