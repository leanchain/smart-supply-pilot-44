import PageTemplate from "@/components/PageTemplate";

const Imprint = () => {
  return (
    <PageTemplate
      title="Imprint"
      subtitle="Legal information about our company"
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">Company Information</h2>
      <p>
        LeanChain, Inc.
        <br />
        123 Supply Chain Blvd
        <br />
        San Francisco, CA 94103
        <br />
        United States
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p>
        Email: info@smartsupply.com
        <br />
        Phone: +1 (555) 123-4567
        <br />
        Fax: +1 (555) 123-4568
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Management</h2>
      <p>
        Jane Smith (CEO)
        <br />
        John Doe (CTO)
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Registration</h2>
      <p>
        Registered at the San Francisco Chamber of Commerce
        <br />
        Registration Number: 12345678
        <br />
        VAT ID: US987654321
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Responsible for Content
      </h2>
      <p>
        Jane Smith
        <br />
        LeanChain, Inc.
        <br />
        123 Supply Chain Blvd
        <br />
        San Francisco, CA 94103
        <br />
        United States
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
      <p>
        The content of this website has been prepared with the greatest possible
        care. However, we cannot guarantee the accuracy, completeness, and
        timeliness of the content. As a service provider, we are responsible for
        our own content on these pages according to general laws. However, we
        are not obligated to monitor transmitted or stored third-party
        information or to investigate circumstances that indicate illegal
        activity.
      </p>
    </PageTemplate>
  );
};

export default Imprint;
