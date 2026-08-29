import React from "react";

const page = () => {
  return (
    <div className="flex flex-col text-left items-center px-72 gap-28 pt-5">
      <span className="text-4xl font-bold">Terms & Condition</span>
      <div className="flex flex-col gap-8 mb-14">
        <p>
          <span className="font-bold">Effective Date:</span> 2024
        </p>
        <p>
          Welcome to Get Me A Chai. By using our website, you agree to comply
          with and be bound by the following terms and conditions:
        </p>
        <p className="text-2xl font-bold">User Responsibilities:</p>
        <ul className="list-disc text-left">
          <li>
            Provide accurate and complete information during registration.
          </li>
          <li>
            Use the platform in accordance with all applicable laws and
            regulations.
          </li>
        </ul>
        <p className="text-2xl font-bold">Prohibited Activities:</p>
        <ul className="list-disc text-left">
          <li>Posting harmful or illegal content.</li>
          <li>Fraudulent activities or impersonation.</li>
        </ul>
        <p>
          <span>Intellectual Properties</span>: All content on this site is the
          property of Get Me A Chai or its content suppliers and protected by
          intellectual property laws.
        </p>
        <p>
          <span>Disclaimer: </span>
          We do not guarantee the success of any crowdfunding campaign.
          Contributions are made at your own risk.
        </p>
        <p>
          Changes to Terms: We may update these terms from time to time.
          Continued use of the site constitutes acceptance of the revised terms.
        </p>
        <p>For more details, please read our full of our Terms & Condition.</p>
      </div>
    </div>
  );
};

export default page;
