import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      description:
        "We're looking for an experienced frontend developer with expertise in React and TypeScript to help build our next-generation supply chain management platform.",
    },
    {
      title: "Machine Learning Engineer",
      department: "AI Team",
      location: "Remote",
      description:
        "Join our AI team to develop and implement machine learning models for demand forecasting, inventory optimization, and other supply chain applications.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      description:
        "We're seeking a product manager with experience in B2B SaaS products to help shape the future of our platform.",
    },
    {
      title: "Supply Chain Consultant",
      department: "Customer Success",
      location: "Remote",
      description:
        "Help our customers implement and get the most value from our platform. You'll need deep knowledge of supply chain operations and excellent communication skills.",
    },
  ];

  return (
    <PageTemplate
      title="Careers"
      subtitle="Join our team and help revolutionize supply chain management"
    >
      <p className="mb-8">
        At LeanChain, we're building the future of supply chain management.
        We're looking for talented individuals who are passionate about using
        technology to solve complex problems and make a real impact on
        businesses around the world.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Work on challenging problems with real-world impact</li>
        <li>Flexible, remote-first work environment</li>
        <li>Competitive compensation and benefits</li>
        <li>Opportunities for growth and professional development</li>
        <li>Collaborative, supportive team culture</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
      <div className="space-y-6">
        {openPositions.map((position, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{position.title}</CardTitle>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{position.department}</span>
                <span>•</span>
                <span>{position.location}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{position.description}</p>
              <Button>Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Careers;
