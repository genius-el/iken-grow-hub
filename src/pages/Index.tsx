
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Users, BookOpen, Gift, Tag } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-iken-extraLight to-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Join the <span className="text-iken">IKEN</span> Growth Community
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with like-minded individuals, access exclusive resources, and accelerate your personal and professional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-iken hover:bg-iken-dark text-white px-8 py-6 rounded-lg text-lg">
                  Join Now
                </Button>
              </Link>
              <Link to="/offers">
                <Button variant="outline" className="border-iken text-iken hover:bg-iken-light px-8 py-6 rounded-lg text-lg">
                  View Offers
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="IKEN Growth Community" 
              className="rounded-lg shadow-xl object-cover h-[500px]"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join IKEN Growth Hub?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the tools, resources, and community you need to thrive in today's fast-paced world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users size={24} />}
              title="Vibrant Community"
              description="Connect with ambitious professionals, entrepreneurs, and growth enthusiasts."
            />
            <FeatureCard 
              icon={<BookOpen size={24} />}
              title="Expert Resources"
              description="Access exclusive guides, templates, and learning materials from industry leaders."
            />
            <FeatureCard 
              icon={<Gift size={24} />}
              title="Exclusive Events"
              description="Participate in workshops, webinars, and networking events designed for growth."
            />
            <FeatureCard 
              icon={<Tag size={24} />}
              title="Special Discounts"
              description="Enjoy member-only discounts on premium tools and services."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-iken-extraLight">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of members who are accelerating their growth journey with IKEN.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Joining IKEN was the best decision I made for my career. The resources and network have been invaluable."
              author="Sarah Johnson"
              role="Marketing Executive"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            />
            <TestimonialCard 
              quote="The IKEN community has helped me grow both personally and professionally. The support is incredible."
              author="Michael Chen"
              role="Startup Founder"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            />
            <TestimonialCard 
              quote="The quality of resources and events that IKEN provides is unmatched. Truly worth every penny."
              author="Emily Rodriguez"
              role="Product Manager"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-iken text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join our community today and get access to all the tools and resources you need to succeed.
          </p>
          <Link to="/register">
            <Button className="bg-white text-iken hover:bg-gray-100 px-8 py-6 rounded-lg text-lg font-medium">
              Join IKEN Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
