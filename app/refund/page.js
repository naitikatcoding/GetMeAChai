import React from "react";

const page = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14 gap-6 sm:gap-10 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">Cancellation/Refund Policies</h1>
      <div className="flex flex-col gap-6 sm:gap-8 mb-10 text-sm sm:text-base leading-relaxed">
        <p>
          <span className="font-bold text-white">Effective Date:</span> 2024
        </p>
        <p>
          At Get Me A Chai, we strive to ensure the satisfaction of all our
          users. Please read our cancellation and refund policies below:
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-white">For Contributors:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>
            Contributions made to crowdfunding campaigns are generally
            non-refundable.
          </li>
          <li>
            In the event of a fraudulent campaign, please contact us immediately
            at support@getmeachai.com for assistance.
          </li>
        </ul>
        <h2 className="text-xl sm:text-2xl font-bold text-white">For Campaign Creators:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>
            If you need to cancel your campaign, please contact our support team
            as soon as possible.
          </li>
          <li>Funds already distributed to you may not be refundable.</li>
        </ul>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Exception:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>In cases where a campaign does not meet its funding goal, contributions may be refunded.</li>
        </ul>
        <p className="text-gray-400">If you have any questions or need further assistance, please reach out to us at support@getmeachai.com.</p>
      </div>
    </div>
  );
};

export default page;
