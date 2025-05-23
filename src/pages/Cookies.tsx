import PageTemplate from "@/components/PageTemplate";

const Cookies = () => {
  return (
    <PageTemplate title="Cookie Policy" subtitle="Last updated: June 1, 2023">
      <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
      <p>
        Cookies are small text files that are stored on your computer or mobile
        device when you visit a website. They are widely used to make websites
        work more efficiently and provide information to the owners of the site.
        Cookies allow us to recognize your device and store information about
        your preferences or past actions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately,
        in most cases, there are no industry standard options for disabling
        cookies without completely disabling the functionality and features they
        add to the site. It is recommended that you leave on all cookies if you
        are not sure whether you need them or not, in case they are used to
        provide a service that you use.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">The Cookies We Set</h2>
      <ul className="list-disc pl-6 space-y-4 my-4">
        <li>
          <strong>Account related cookies:</strong> If you create an account
          with us, we will use cookies for the management of the signup products
          and general administration. These cookies will usually be deleted when
          you log out; however, in some cases, they may remain afterward to
          remember your site preferences when logged out.
        </li>
        <li>
          <strong>Login related cookies:</strong> We use cookies when you are
          logged in so that we can remember this fact. This prevents you from
          having to log in every single time you visit a new page. These cookies
          are typically removed or cleared when you log out to ensure that you
          can only access restricted features and areas when logged in.
        </li>
        <li>
          <strong>Site preferences cookies:</strong> In order to provide you
          with a great experience on this site, we provide the functionality to
          set your preferences for how this site runs when you use it. In order
          to remember your preferences, we need to set cookies so that this
          information can be called whenever you interact with a page that is
          affected by your preferences.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
      <p>
        In some special cases, we also use cookies provided by trusted third
        parties. The following section details which third-party cookies you
        might encounter through this site.
      </p>
      <ul className="list-disc pl-6 space-y-4 my-4">
        <li>
          This site uses Google Analytics, which is one of the most widespread
          and trusted analytics solutions on the web, to help us understand how
          you use the site and ways that we can improve your experience. These
          cookies may track things such as how long you spend on the site and
          the pages that you visit so we can continue to produce engaging
          content.
        </li>
        <li>
          We also use social media buttons and/or plugins on this site that
          allow you to connect with your social network in various ways. For
          these to work, social media sites including Facebook, Twitter, and
          LinkedIn, will set cookies through our site which may be used to
          enhance your profile on their site or contribute to the data they hold
          for various purposes outlined in their respective privacy policies.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
      <p>
        You can prevent the setting of cookies by adjusting the settings on your
        browser. Be aware that disabling cookies will affect the functionality
        of this and many other websites that you visit. Disabling cookies will
        usually result in also disabling certain functionality and features of
        this site. Therefore it is recommended that you do not disable cookies.
      </p>
    </PageTemplate>
  );
};

export default Cookies;
