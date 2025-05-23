import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp, Truck } from "lucide-react";

const Solutions = () => {
  const solutionsList = [
    {
      title: "Demand Forecasting",
      description:
        "AI-powered demand forecasting that reduces stockouts and overstock by up to 40%.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Inventory Optimization",
      description:
        "Smart inventory management that balances stock levels with demand fluctuations.",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      title: "Supply Chain Visibility",
      description:
        "End-to-end visibility into your supply chain for better decision making.",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
    },
    {
      title: "Logistics Management",
      description:
        "Streamlined logistics operations that reduce costs and improve delivery times.",
      icon: <Truck className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <PageTemplate
      title="Our Solutions"
      subtitle="Comprehensive tools for modern supply chain management"
    >
      <p className="mb-8">
        Our suite of solutions addresses the most critical challenges in supply
        chain management. Each solution is designed to work independently or as
        part of an integrated system, providing flexibility to meet your
        specific needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {solutionsList.map((solution, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              {solution.icon}
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{solution.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Solutions;
