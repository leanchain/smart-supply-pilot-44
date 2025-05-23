
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, FileText, BarChart3, CheckCircle } from "lucide-react";

const DemoSlides = () => {
  const demoSteps = [
    {
      title: "Upload Your Excel",
      description: "Simply drag & drop your existing planning spreadsheets",
      icon: <FileText className="w-12 h-12 text-blue-500" />
    },
    {
      title: "AI Analysis", 
      description: "Get instant demand forecasts and purchase recommendations",
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />
    },
    {
      title: "Smart Recommendations",
      description: "Export reports or sync directly back to your ERP system",
      icon: <CheckCircle className="w-12 h-12 text-green-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            📊 See LeanChain in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch how easy it is to transform your supply planning in minutes
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo (2 min)
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demoSteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSlides;
