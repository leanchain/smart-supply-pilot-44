import PageTemplate from "@/components/PageTemplate";

const Products = () => {
  return (
    <PageTemplate
      title="Our Products"
      subtitle="How we streamline your supply chain operations"
    >
      <p>
        Our products is designed to seamlessly integrate with your existing
        workflows while providing significant improvements in efficiency and
        accuracy. We take a data-driven approach to supply chain management,
        leveraging advanced analytics and AI to optimize every step.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Products Steps</h2>

      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Assessment:</strong> We begin by thoroughly analyzing your
          current supply chain operations, identifying bottlenecks and
          opportunities for improvement.
        </li>
        <li>
          <strong>Integration:</strong> Our platform connects with your existing
          systems, ensuring a smooth transition without disrupting your
          operations.
        </li>
        <li>
          <strong>Optimization:</strong> Using AI-powered algorithms, we
          optimize inventory levels, forecast demand, and streamline logistics.
        </li>
        <li>
          <strong>Monitoring:</strong> Continuous monitoring and real-time
          analytics provide insights into performance and identify areas for
          further improvement.
        </li>
        <li>
          <strong>Refinement:</strong> We regularly refine our approach based on
          performance data and changing business needs.
        </li>
      </ol>
    </PageTemplate>
  );
};

export default Products;
