
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowDown, BarChart3, Database, ServerCrash } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              ⚙️ What LeanChain Solves
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inaccurate Forecasts */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <BarChart3 className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📉 Inaccurate Forecasts
                </h3>
                <p className="text-gray-600 mb-6">
                  Get demand forecasts directly from your Excel sheets
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Handles seasonality, supplier lead times
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Cut stockouts & overstock by up to 40%
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Heavy ERP Systems */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <ServerCrash className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🛠️ Heavy ERP Systems
                </h3>
                <p className="text-gray-600 mb-6">
                  No need to rip and replace your ERP
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Plug-and-play templates for planning & costing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Integrates with Odoo, SAP, NetSuite, and more
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
              onClick={() => {
                const contactFormSection = document.querySelector(".contact-form-section");
                if (contactFormSection) {
                  contactFormSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ArrowDown className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
