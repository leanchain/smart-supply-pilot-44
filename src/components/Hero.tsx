import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, TrendingUp, RefreshCw } from "lucide-react";
import Logo from "./Logo";
import { trackButtonClick, trackExternalLink } from "@/lib/analytics";

const Hero = () => {
  const scrollToContactForm = () => {
    // Track the button click
    trackButtonClick("Claim Early Access", "Hero");

    // Find the contact form section
    const contactFormSection = document.querySelector(".contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScheduleCall = () => {
    // Track external link click
    trackExternalLink("https://calendly.com/pankaj4u4m/30min");
    trackButtonClick("Schedule a Call", "Hero");

    window.open("https://calendly.com/pankaj4u4m/30min", "_blank");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Background decorative elements */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Early Access Now Open
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Smarter Supply Planning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Without Replacing Your ERP
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload your spreadsheet and get AI-powered demand forecasts,
            purchase recommendations, and real-time ERP sync — all in one
            lightweight tool built for SMEs.
          </p>

          {/* Feature highlights - UPDATED */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-xs">
              <Upload className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">Excel Upload</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-xs">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">AI Forecasts</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-xs">
              <RefreshCw className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">ERP Sync</span>
            </div>
          </div>

          {/* CTA Buttons - UPDATED */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              onClick={scrollToContactForm}
            >
              👉 Claim Your Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
              onClick={handleScheduleCall}
            >
              Schedule a Call
            </Button>
          </div>

          {/* Perfect for section - UPDATED */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              🔎 Perfect For
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>• Small manufacturers & sustainability startups</p>
              <p>• Teams using Excel or struggling with ERP customization</p>
              <p>• Operations, procurement & production managers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
