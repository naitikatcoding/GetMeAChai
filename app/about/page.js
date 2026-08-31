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
    <div>
      <div className="text-center mx-9">
        <p className="text-4xl font-extrabold py-16">About Us</p>
        <div className="flex flex-col gap-15">
          <p className="font-bold">
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

      <div className="bg-gray-600 w-[90vw] h-1 mt-16.5 mx-auto opacity-80"></div>

      <div className="my-14 flex flex-col items-center">
        <p className="text-2xl mb-5 font-bold">Why Choose Us</p>
        <p className="text-4xl font-bold opacity-60 mb-4">
          Support Creativity and Innovation
        </p>
        <p className="w-[40vw] text-center">
          At Get Me A Chai, we empower developers, creators, and influencers by
          connecting them with supporters to fund their projects. No technical
          skills required - our intuitive platform makes it easy to receive
          support and bring your visions to life.
        </p>
        <ul className="flex mt-20 gap-28 justify-center opacity-90">
          <li className="bg-[#101013] border-0 p-10 text-wrap w-1/4 h-60 flex flex-col items-center justify-center rounded-lg opacity-70">
            <div className="mb-3 bg-linear-to-b from-[#5046e5] to-[#2b31cb] border border-[#5d4ff0] flex items-center justify-center p-3 rounded-sm w-12 h-12">
              {phoneicon}
            </div>
            <span className="font-bold mb-5">Easy Customization</span>
            <p className="text-center">
              Personalize your campaign page&apos;s look and feel, from color
              schemes to fonts, to match your unique style.
            </p>
          </li>
          <li className="bg-[#101013] border-0 p-10 text-wrap w-1/4 h-60 flex flex-col items-center justify-center rounded-lg opacity-70">
            <div className="mb-3 bg-linear-to-b from-[#5046e5] to-[#2b31cb] border border-[#5d4ff0] flex items-center justify-center p-3 rounded-sm w-12 h-12">
              {thunder}
            </div>
            <span className="font-bold mb-5">High Perfomance</span>
            <p className="text-center">
              Our platform is optimized for fast performance, ensuring your
              supporters can access your campaign quickly and easily.
            </p>
          </li>
          <li className="bg-[#101013] border-0 p-10 text-wrap w-1/4 h-60 flex flex-col items-center justify-center rounded-lg opacity-70">
            <div className="mb-3 bg-linear-to-b from-[#5046e5] to-[#2b31cb] border border-[#5d4ff0] flex items-center justify-center p-3 rounded-sm w-12 h-12">
              {pencil}
            </div>
            <span className="font-bold mb-5">Comprehensive Features</span>
            <p className="text-center">
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
