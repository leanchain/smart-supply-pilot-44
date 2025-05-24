import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, User, Building } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Netlify will handle the form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams();

    // Convert FormData to URLSearchParams
    for (const [key, value] of formData.entries()) {
      searchParams.append(key, value.toString());
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: searchParams.toString(),
    })
      .then(() => {
        // Track successful form submission
        trackFormSubmission("Beta Access Form");
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        // You might want to show an error message here
      });
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="text-green-600 text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            We'll be in touch within 24 hours to schedule your demo.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto shadow-lg bg-white">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Get Early Access
        </h3>
        <form
          name="beta-access"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="beta-access" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <User className="inline w-4 h-4 mr-1" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Mail className="inline w-4 h-4 mr-1" />
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <Building className="inline w-4 h-4 mr-1" />
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your role</option>
              <option value="operations-manager">Operations Manager</option>
              <option value="procurement-manager">Procurement Manager</option>
              <option value="production-manager">Production Manager</option>
              <option value="supply-chain-manager">Supply Chain Manager</option>
              <option value="founder-ceo">Founder/CEO</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
