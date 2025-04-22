
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join the IKEN Growth Community</h1>
            <p className="text-gray-600 mb-8">
              Create your account today and start your growth journey with our exclusive resources, expert-led events, and vibrant community.
            </p>
            
            <div className="bg-iken-extraLight p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-lg mb-2">What you'll get:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-iken mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Access to our private community platform</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-iken mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Weekly growth tips and resources</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-iken mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Invitation to monthly virtual events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-iken mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Exclusive discounts on premium tools</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-iken hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
