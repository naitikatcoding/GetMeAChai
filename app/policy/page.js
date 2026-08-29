import React from "react";

const page = () => {
  return (
    <div className="flex flex-col text-left items-center px-72 gap-28 pt-5">
      <span className="text-4xl font-bold">Privacy Policy</span>
      <div className="flex flex-col gap-8 mb-14">
        <p><span className="font-bold">Effective Date:</span> 2024</p>
        <p>
          At Get Me A Chai, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          information.
        </p>
        <p className="text-2xl font-bold">Information We Collect:</p>
        <ul className="list-disc text-left">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Payment Information: Processed securely through Razorpay.</li>
          <li>Usage Data: Information on how you use our site.</li>
        </ul>
        <p className="text-2xl font-bold">How We Use Your Information:</p>
        <ul className="list-disc text-left">
          <li>To provide and maintain our service.</li>
          <li>To notify you about changes to our service.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our service.</li>
        </ul>
        <p>
          Data Security: We use industry-standard encryption to protect your
          personal data and payment information.
        </p>
        <p>
          Your Rights: You have the right to access, update, and delete your
          personal information. To exercise these rights, please contact us at
          support@getmeachai.com.
        </p>
        <p>For more details, please read our full Privacy Policy.</p>
      </div>
    </div>
  );
};

export default page;
