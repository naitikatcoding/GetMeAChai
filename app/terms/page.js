import React from "react";

const page = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14 gap-6 sm:gap-10 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">Terms & Condition</h1>
      <div className="flex flex-col gap-6 sm:gap-8 mb-10 text-sm sm:text-base leading-relaxed">
        <p>
          <span className="font-bold text-white">Effective Date:</span> 2024
        </p>
        <p>
          Welcome to Get Me A Chai. By using our website, you agree to comply
          with and be bound by the following terms and conditions:
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-white">User Responsibilities:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>
            Provide accurate and complete information during registration.
          </li>
          <li>
            Use the platform in accordance with all applicable laws and
            regulations.
          </li>
        </ul>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Prohibited Activities:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>Posting harmful or illegal content.</li>
          <li>Fraudulent activities or impersonation.</li>
        </ul>
        <p>
          <strong className="text-white">Intellectual Properties:</strong> All content on this site is the
          property of Get Me A Chai or its content suppliers and protected by
          intellectual property laws.
        </p>
        <p>
          <strong className="text-white">Disclaimer: </strong>
          We do not guarantee the success of any crowdfunding campaign.
          Contributions are made at your own risk.
        </p>
        <p>
          <strong className="text-white">Changes to Terms:</strong> We may update these terms from time to time.
          Continued use of the site constitutes acceptance of the revised terms.
        </p>
        <p className="text-gray-400">For more details, please read our full Terms & Condition.</p>
      </div>
    </div>
  );
};

export default page;
