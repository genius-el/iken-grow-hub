
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfferCard from "@/components/OfferCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BookOpen, Gift } from "lucide-react";

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-iken-extraLight to-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Choose Your Growth Path
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Select the membership plan that best fits your needs and start your growth journey with IKEN today.
          </p>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferCard 
              icon={<Users size={24} />}
              title="Starter"
              description="Perfect for those beginning their growth journey"
              features={[
                "Community forum access",
                "Weekly growth newsletter",
                "Basic resource library",
                "Monthly virtual events"
              ]}
            />
            
            <OfferCard 
              icon={<BookOpen size={24} />}
              title="Professional"
              description="Ideal for serious growth enthusiasts"
              features={[
                "Everything in Starter",
                "Premium resource library",
                "Weekly mastermind sessions",
                "1-on-1 monthly coaching",
                "Exclusive workshop access"
              ]}
              isPopular={true}
            />
            
            <OfferCard 
              icon={<Gift size={24} />}
              title="Enterprise"
              description="For organizations seeking team growth"
              features={[
                "Everything in Professional",
                "Team access (up to 5 members)",
                "Custom growth roadmap",
                "Quarterly strategy sessions",
                "Priority support",
                "Custom workshops"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-iken-extraLight">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How does IKEN help with my growth?</h3>
              <p className="text-gray-600">
                IKEN provides a combination of expert resources, community support, guided learning paths, and networking opportunities that are designed to accelerate your personal and professional growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the new rate will apply to your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 14-day money-back guarantee for all new memberships. If you're not satisfied with your membership, contact us within 14 days for a full refund.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens after I join?</h3>
              <p className="text-gray-600">
                After joining, you'll receive a welcome email with login details for our platform. You'll also get access to our onboarding resources and a personalized growth assessment to help you make the most of your membership.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-iken text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Growth Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the IKEN community today and unlock your full potential.
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

export default Offers;
