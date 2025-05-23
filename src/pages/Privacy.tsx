import PageTemplate from "@/components/PageTemplate";

const Privacy = () => {
  return (
    <PageTemplate title="Privacy Policy" subtitle="Last updated: June 1, 2023">
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
      <p>
        At LeanChain, we take your privacy seriously. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you visit our website or use our services. Please read this privacy
        policy carefully. If you do not agree with the terms of this privacy
        policy, please do not access the site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Collection of Your Information
      </h2>
      <p>
        We may collect information about you in a variety of ways. The
        information we may collect via the Site includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>Personal Data:</strong> Personally identifiable information,
          such as your name, shipping address, email address, and telephone
          number, that you voluntarily give to us when you register with the
          Site or when you choose to participate in various activities related
          to the Site.
        </li>
        <li>
          <strong>Derivative Data:</strong> Information our servers
          automatically collect when you access the Site, such as your IP
          address, your browser type, your operating system, your access times,
          and the pages you have viewed directly before and after accessing the
          Site.
        </li>
        <li>
          <strong>Financial Data:</strong> Financial information, such as data
          related to your payment method (e.g., valid credit card number, card
          brand, expiration date) that we may collect when you purchase, order,
          return, exchange, or request information about our services from the
          Site.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Use of Your Information
      </h2>
      <p>
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Site to:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Create and manage your account.</li>
        <li>Products your transactions.</li>
        <li>
          Send you email newsletters, if you have opted in to receive them.
        </li>
        <li>Respond to your inquiries and customer service requests.</li>
        <li>
          Deliver targeted advertising, newsletters, and other information
          regarding promotions.
        </li>
        <li>
          Monitor and analyze usage and trends to improve your experience with
          the Site.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please
        contact us at:
      </p>
      <p className="mt-4">
        LeanChain
        <br />
        123 Supply Chain Blvd
        <br />
        San Francisco, CA 94103
        <br />
        Email: privacy@smartsupply.com
        <br />
        Phone: +1 (555) 123-4567
      </p>
    </PageTemplate>
  );
};

export default Privacy;
