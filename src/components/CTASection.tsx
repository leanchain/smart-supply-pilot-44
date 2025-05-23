
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📣 Get Early Access
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be one of our first 10 pilot customers — get onboarding support, insights reports, and influence our roadmap.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              🔒 Join Beta Access
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Founder section */}
          <Card className="mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                👋 From a Founder Who's Been There
              </h3>
              <blockquote className="text-lg text-blue-100 italic text-center mb-6 leading-relaxed">
                "After speaking to dozens of ops managers relying on spreadsheets and fighting ERP complexity, I built this tool to make supply planning smarter, not harder."
              </blockquote>
              <p className="text-blue-200 text-center font-semibold">
                — [Your Name], Founder & Engineer
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
                  <span>Booking interviews with SME ops leaders</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-100">
                  <ArrowRight className="w-5 h-5" />
                  <span>15-min call = free lifetime discount</span>
                </div>
              </div>
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200">
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
