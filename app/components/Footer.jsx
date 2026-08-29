import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen bg-[#111827] text-center p-5">
      <div className="flex justify-between px-5">
        <div className="flex flex-col text-left gap-2">
          <p>Copyright &copy; 2026 Get Me A Chai | All rights reserved!</p>
          <p className="text-sm opacity-50 pb-5">
            Made by Naitik Gupta with ❤
          </p>
          <ul className="gap-5 flex">
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Condition</Link>
            <Link href="/refund">Cancellation/Refund Policies</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <span className="text-lg">Follow me on</span>
          <div className="flex gap-3.5 ">
            <a
              href="https://github.com/naitikatcoding"
              target="_blank"
              className="rounded-4xl py-2.5 px-6 border border-gray-400 flex gap-1.5 hover:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-5 h-5 stroke-current fill-current stroke-0"
              >
                <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naitikatwork/"
              target="_blank"
              className="rounded-4xl py-2.5 px-6 border border-gray-400 flex gap-1.5 hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-5 h-5 stroke-current fill-current stroke-0"
              >
                <path d="M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z" />
                <path d="M1 6h3v9h-3v-9z" />
                <path d="M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z" />
              </svg>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
