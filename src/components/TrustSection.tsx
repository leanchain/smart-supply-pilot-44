import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const TrustSection = () => {
  const targetTeams = [
    "Run lean ops and can't afford bulk-buying",
    "Work with seasonal demand and tight margins", 
    "Need better planning, fast — not another 6-month ERP setup"
  ];

  const industries = [
    "✔️ Synthetic Fuels & Sustainable Manufacturing",
    "✔️ Specialty Automotive & Motorsport",
    "✔️ GreenTech Suppliers",
    "✔️ High-Customization Manufacturing"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Built for teams section */}
          <Card className="mb-12 shadow-xl border-0">
            <CardContent className="p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                📦 Built For Teams That:
              </h2>
              <div className="space-y-4">
                {targetTeams.map((team, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{team}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trusted by section */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                🔐 Trusted By Early Ops Teams In:
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
