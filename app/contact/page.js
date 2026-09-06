import React from "react";

const contact = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col text-center justify-center my-8 sm:my-14 max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="font-extrabold text-3xl sm:text-4xl mb-2">Contact Us</h1>
        <h2 className="font-bold text-xl sm:text-2xl mb-8 sm:mb-12 text-blue-400">
          We&apos;d love to hear from you!
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-300">
          If you have any questions, feedback, or need support, feel free to
          reach out to us:
        </p>
        <div className="flex flex-col gap-2.5 text-sm sm:text-base text-gray-200 mb-8 bg-gray-900/60 border border-gray-800 rounded-xl p-5 sm:p-6">
          <p><strong className="text-white">Email:</strong> support@getmeachai.com</p>
          <p><strong className="text-white">Phone:</strong> +1-800-123-4567</p>
          <p><strong className="text-white">Address:</strong> 123 Creator Lane, Innovation City, CA 90210</p>
        </div>
        <p className="mb-4 text-sm sm:text-base text-gray-300">
          Follow us on social media for the latest updates and news:
        </p>
        <div className="text-yellow-300 flex flex-wrap justify-center gap-4 sm:gap-6 font-medium text-sm sm:text-base">
          <a
            href="https://github.com/naitikatcoding"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/naitikatwork/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/codedbynaitik/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            Instagram
          </a>
        </div>
        <div className="flex justify-center mt-10 sm:mt-14">
          <div className="bg-gray-700 opacity-60 w-full max-w-lg h-px"></div>
        </div>
      </div>
    </div>
  );
};

export default contact;

export const metadata = { title: `Contact us - GetMeAChai` };