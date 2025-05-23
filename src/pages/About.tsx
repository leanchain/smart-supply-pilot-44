import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Jane Smith",
      position: "CEO & Co-Founder",
      bio: "Jane has over 15 years of experience in supply chain management and technology.",
    },
    {
      name: "John Doe",
      position: "CTO & Co-Founder",
      bio: "John is an AI expert with a background in developing enterprise software solutions.",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Product",
      bio: "Sarah specializes in creating intuitive user experiences for complex enterprise applications.",
    },
    {
      name: "Michael Chen",
      position: "Lead Data Scientist",
      bio: "Michael has a PhD in Machine Learning and specializes in predictive analytics.",
    },
  ];

  return (
    <PageTemplate
      title="About Us"
      subtitle="Our mission is to revolutionize supply chain management through intelligent automation"
    >
      <p>
        Founded in 2023, LeanChain is dedicated to solving the most challenging
        problems in supply chain management. We combine cutting-edge AI
        technology with deep industry expertise to create solutions that make
        supply chains more efficient, resilient, and sustainable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
      <p>
        We envision a future where supply chains are fully optimized, with
        minimal waste and maximum efficiency. Our goal is to empower businesses
        of all sizes with the tools they need to achieve this vision, regardless
        of their technical expertise or resources.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
      <p className="mb-6">
        Our team brings together experts in supply chain management, artificial
        intelligence, and software development. We're passionate about creating
        solutions that make a real difference for our customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {member.position}
              </p>
              <p>{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default About;
