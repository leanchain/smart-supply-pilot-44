
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📥 Apply for Early Access
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be one of the first 10 customers and help shape LeanChain.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 mb-8"
              onClick={() => {
                const contactFormSection = document.querySelector(".contact-form-section");
                if (contactFormSection) {
                  contactFormSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Contact Form */}
          <div className="mb-16 contact-form-section" id="contact-form">
            <ContactForm />
          </div>

          {/* Founder section */}
          <Card className="mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                👋 From a Founder Who's Been There
              </h3>
              <blockquote className="text-lg text-blue-100 italic text-center mb-6 leading-relaxed">
                "After speaking to dozens of ops managers relying on
                spreadsheets and fighting ERP complexity, I built LeanChain to
                make supply planning smarter, not harder."
              </blockquote>
              <p className="text-blue-200 text-center font-semibold">
                — Pankaj, Founder & Engineer
              </p>
            </CardContent>
          </Card>

          {/* Secondary CTA */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                🧪 Want to Help Shape It?
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-blue-100">
                  <Star className="w-5 h-5" />
                  <span>Open to feedback</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-100">
                  <MessageCircle className="w-5 h-5" />
                  <span>15-min call = free lifetime discount</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-100">
                  <Star className="w-5 h-5" />
                  <span>Booking interviews with SME ops leaders</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200"
                onClick={() =>
                  window.open("https://calendly.com/pankaj4u4m/30min", "_blank")
                }
              >
                Schedule a Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
