import React from "react";

const about = () => {
  const phoneicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-color-swatch w-6 h-6 stroke-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
      <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
      <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
      <line x1="17" y1="17" x2="17" y2="17.01"></line>
    </svg>
  );

  const thunder = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-bolt size-6 stroke-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
    </svg>
  );

  const pencil = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-tools size-6 stroke-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
      <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
      <polyline points="12 8 7 3 3 7 8 12"></polyline>
      <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
      <polyline points="16 12 21 17 17 21 12 16"></polyline>
      <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
    </svg>
  );

  return (
    <div className="w-full">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8">About Us</h1>
        <div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-gray-300">
          <p className="font-bold text-base sm:text-lg text-blue-400">
            &quot;Fueling Creativity, One Cup at a Time&quot;
          </p>
          <p>
            At Get Me A Chai, we are committed to fostering a vibrant community
            where developers, creators, and influencers can thrive. Our
            crowdfunding platform is designed to connect talented individuals
            with supporters who believe in their vision and want to help bring
            their projects to life. We understand that financial support is
            crucial for creativity and innovation, and we strive to make the
            process seamless and rewarding for both creators and backers.
          </p>
          <p>
            Our mission is to empower developers, content creators, artists, and
            influencers by providing them with the resources they need to
            succeed. Whether you&apos;re a developer working on the next
            groundbreaking app, a content creator producing engaging and
            informative videos, an artist creating stunning visual works, or an
            influencer sharing your unique perspective with the world, Get Me A
            Chai is here to support you every step of the way.
          </p>
          <p>
            We believe in the transformative power of community support and the
            magic that happens when people come together to champion a common
            cause. Our platform is more than just a crowdfunding site; it&apos;s
            a space where dreams can become reality, and innovative ideas can
            flourish. By providing a straightforward and user-friendly way for
            patrons to contribute, we aim to create a supportive ecosystem that
            nurtures creativity and drives progress.
          </p>
          <p>
            At Get Me A Chai, we take pride in helping creators reach their full
            potential. We are passionate about leveraging the power of
            technology to build a community that values and invests in creative
            endeavors. Join us on this exciting journey and be part of a
            movement that celebrates and sustains the talents of developers,
            creators, and influencers. Together, let&apos;s fuel creativity, one
            cup at a time.
          </p>
        </div>
      </div>

      <div className="bg-gray-700 w-full max-w-5xl h-px my-6 sm:my-10 mx-auto opacity-60"></div>

      <div className="my-10 sm:my-14 flex flex-col items-center px-4 max-w-6xl mx-auto w-full">
        <span className="text-xl sm:text-2xl mb-2 font-bold text-blue-400">Why Choose Us</span>
        <h2 className="text-2xl sm:text-4xl font-bold opacity-90 mb-4 text-center">
          Support Creativity and Innovation
        </h2>
        <p className="w-full max-w-2xl text-center text-sm sm:text-base text-gray-300 mb-8 sm:mb-14">
          At Get Me A Chai, we empower developers, creators, and influencers by
          connecting them with supporters to fund their projects. No technical
          skills required - our intuitive platform makes it easy to receive
          support and bring your visions to life.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          <li className="bg-[#101013] border border-gray-800 p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-xl transition hover:border-gray-700">
            <div className="mb-4 bg-linear-to-b from-[#5046e5] to-[#2b31cb] border border-[#5d4ff0] flex items-center justify-center p-3 rounded-lg w-12 h-12 shrink-0">
              {phoneicon}
            </div>
            <span className="font-bold text-base sm:text-lg mb-3 text-white">Easy Customization</span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Personalize your campaign page&apos;s look and feel, from color
              schemes to fonts, to match your unique style.
            </p>
          </li>
          <li className="bg-[#101013] border border-gray-800 p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-xl transition hover:border-gray-700">
            <div className="mb-4 bg-linear-to-b from-[#5046e5] to-[#2b31cb] border border-[#5d4ff0] flex items-center justify-center p-3 rounded-lg w-12 h-12 shrink-0">
              {thunder}
            </div>
            <span className="font-bold text-base sm:text-lg mb-3 text-white">High Perfomance</span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Our platform is optimized for fast performance, ensuring your
              supporters can access your campaign quickly and easily.
            </p>
          </li>
          <li className="bg-[#101013] border border-gray-800 p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-xl transition hover:border-gray-700">
            <div className="mb-4 bg-linear-to-b from-[#5046e5] to-[#2b31cb] border border-[#5d4ff0] flex items-center justify-center p-3 rounded-lg w-12 h-12 shrink-0">
              {pencil}
            </div>
            <span className="font-bold text-base sm:text-lg mb-3 text-white">Comprehensive Features</span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Our platform offers everything you need to run a successful
              campaign, from analytics to support tools.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;
