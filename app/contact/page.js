import React from "react";

const contact = () => {
  return (
    <div>
      <div className="flex flex-col text-center justify-center my-15">
        <span className="font-extrabold text-4xl mb-1">Contact Us</span>
        <span className="font-bold text-2xl mb-20">
          We&apos;d love to hear from you!
        </span>
        <span className="mb-8">
          If you have any questions, feedback, or need support, feel free to
          reach out to us:
        </span>
        <span>Email: support@getmeachai.com</span>
        <span>Phone: +1-800-123-4567</span>
        <span className="mb-8">
          Address: 123 Creator Lane, Innovation City, CA 90210
        </span>
        <span className="mb-2">
          Follow us on social media for the latest updates and news:
        </span>
        <div className="text-yellow-300 flex justify-center gap-5">
          <a href="https://github.com/naitikatcoding" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/naitikatwork/" target="_blank">
            Linkedin
          </a>
          <a href="https://www.instagram.com/codedbynaitik/" target="_blank">
            Instagram
          </a>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-500 opacity-90 w-[90vw] h-1 mt-16.5"></div>
        </div>
      </div>
    </div>
  );
};

export default contact;
