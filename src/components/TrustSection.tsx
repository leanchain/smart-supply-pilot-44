import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MessageSquare } from "lucide-react";

const TrustSection = () => {
  const targetTeams = [
    "Run lean ops and can't afford bulk-buying",
    "Work with seasonal demand and tight margins",
    "Need better planning, fast — not another 6-month ERP setup",
  ];

  const industries = [
    "Synthetic Fuels & Sustainable Manufacturing",
    "Specialty Automotive & Motorsport",
    "GreenTech Suppliers",
    "High-Customization Manufacturing",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Join the Beta section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧪 Join the Beta – Shape the Future of SME Supply Planning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for SMEs with complex supply chains and limited time for ERP
              bloat.
            </p>
          </div>

          {/* Benefits Card */}
          <Card className="mb-12 shadow-xl border-0">
            <CardContent className="p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                ✅ Why Join?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    Be one of our first 10 pilot customers
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    Get white-glove onboarding + personalized insights
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Influence our roadmap</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    const contactFormSection = document.querySelector(
                      ".contact-form-section"
                    );
                    if (contactFormSection) {
                      contactFormSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  👉 Claim Your Spot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Founder quote section */}
          <Card className="mb-12 shadow-xl border-0">
            <CardContent className="p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                👋 From a Founder Who's Lived the Pain
              </h2>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "I spoke with 50+ ops leaders juggling spreadsheets and fighting
                ERP complexity. That's why I built LeanChain — to make planning
                smarter, not harder."
              </blockquote>
              <p className="text-gray-600 text-right font-semibold">
                — Pankaj, Founder & Engineer
              </p>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm font-medium">
                  Backed by insights from 50+ SME ops leaders
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
