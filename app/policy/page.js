import React from "react";

const page = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14 gap-6 sm:gap-10 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">Privacy Policy</h1>
      <div className="flex flex-col gap-6 sm:gap-8 mb-10 text-sm sm:text-base leading-relaxed">
        <p><span className="font-bold text-white">Effective Date:</span> 2024</p>
        <p>
          At Get Me A Chai, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          information.
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Information We Collect:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Payment Information: Processed securely through Razorpay.</li>
          <li>Usage Data: Information on how you use our site.</li>
        </ul>
        <h2 className="text-xl sm:text-2xl font-bold text-white">How We Use Your Information:</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-left">
          <li>To provide and maintain our service.</li>
          <li>To notify you about changes to our service.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our service.</li>
        </ul>
        <p>
          <strong className="text-white">Data Security:</strong> We use industry-standard encryption to protect your
          personal data and payment information.
        </p>
        <p>
          <strong className="text-white">Your Rights:</strong> You have the right to access, update, and delete your
          personal information. To exercise these rights, please contact us at
          support@getmeachai.com.
        </p>
        <p className="text-gray-400">For more details, please read our full Privacy Policy.</p>
      </div>
    </div>
  );
};

export default page;
