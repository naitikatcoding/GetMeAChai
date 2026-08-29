import React from "react";

const page = () => {
  return (
    <div className="flex flex-col text-left items-center px-72 gap-28 pt-5">
      <span className="text-4xl font-bold">Cancellation/Refund Policies</span>
      <div className="flex flex-col gap-8 mb-14">
        <p>
          <span className="font-bold">Effective Date:</span> 2024
        </p>
        <p>
          At Get Me A Chai, we strive to ensure the satisfaction of all our
          users. Please read our cancellation and refund policies below:
        </p>
        <p className="text-2xl font-bold">For Contributors:</p>
        <ul className="list-disc text-left">
          <li>
            Contributions made to crowdfunding campaigns are generally
            non-refundable.
          </li>
          <li>
            In the event of a fraudulent campaign, please contact us immediately
            at support@getmeachai.com for assistance.
          </li>
        </ul>
        <p className="text-2xl font-bold">For Campaign Creators:</p>
        <ul className="list-disc text-left">
          <li>
            If you need to cancel your campaign, please contact our support team
            as soon as possible.
          </li>
          <li>Funds already distributed to you may not be refundable.</li>
        </ul>
        <p className="text-2xl font-bold">Exception:</p>
        <ul className="list-disc text-left">
          <li>In cases where a campaign does not meet its funding goal, contributions may be refunded.</li>
        </ul>
        <p>If you have any questions or need further assistance, please reach out to us at support@getmeachai.com.</p>
      </div>
    </div>
  );
};

export default page;
