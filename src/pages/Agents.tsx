import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Database, Truck } from "lucide-react";

const Agents = () => {
  const agentsList = [
    {
      title: "Inventory Agent",
      description:
        "Monitors inventory levels and automatically triggers reordering when necessary.",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      title: "Forecasting Agent",
      description:
        "Analyzes historical data and market trends to predict future demand with high accuracy.",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      title: "Logistics Agent",
      description:
        "Optimizes shipping routes and schedules to reduce costs and delivery times.",
      icon: <Truck className="h-8 w-8 text-primary" />,
    },
    {
      title: "Procurement Agent",
      description:
        "Identifies the best suppliers and negotiates optimal terms for your business needs.",
      icon: <Bot className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <PageTemplate
      title="AI Agents"
      subtitle="Intelligent automation for your supply chain"
    >
      <p className="mb-8">
        Our AI agents work tirelessly behind the scenes to optimize your supply
        chain operations. Each agent specializes in a specific aspect of supply
        chain management, leveraging advanced machine learning algorithms to
        make intelligent decisions and automate routine tasks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {agentsList.map((agent, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              {agent.icon}
              <CardTitle>{agent.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{agent.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">How Our Agents Work</h2>
      <p>
        Our agents use a combination of machine learning, natural language
        productsing, and optimization algorithms to analyze data, make
        predictions, and take actions. They continuously learn from new data and
        feedback, improving their performance over time.
      </p>
    </PageTemplate>
  );
};

export default Agents;
