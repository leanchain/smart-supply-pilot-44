
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, Sync, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-blue-500" />,
      title: "Upload Excel or Connect ERP",
      description: "Drag-n-drop forecasting templates or connect Odoo, Microsoft, or Netsuite.",
      step: "01"
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-500" />,
      title: "Get Smart Forecasts",
      description: "Auto-generated demand, reorder points, and delivery schedule plans.",
      step: "02"
    },
    {
      icon: <Sync className="w-10 h-10 text-green-500" />,
      title: "Sync & Align Inventory",
      description: "AI flags mismatches between ERP and warehouse actuals.",
      step: "03"
    },
    {
      icon: <Download className="w-10 h-10 text-orange-500" />,
      title: "Export, Share, Act",
      description: "Download reports, share with your team, or push back to ERP.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ⚙️ How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your supply chain management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="mb-6 flex justify-center">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
