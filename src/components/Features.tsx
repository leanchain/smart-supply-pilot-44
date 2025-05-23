import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Settings, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "📉 Inaccurate Forecasts",
      solutions: [
        "Get demand forecasts from your existing Excel sheets",
        "Seasonality & lead times handled with AI assistance",
        "Reduce stockouts and overstock by up to 40%"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: "🛠️ Heavy ERP Systems",
      solutions: [
        "Don't replace it — enhance it",
        "One-click templates for planning & costing",
        "Connect to Odoo, SAP, NetSuite, and more"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🔍 What LeanChain Solves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your supply chain challenges into competitive advantages with AI-powered insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <div className="space-y-4">
                  {feature.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
