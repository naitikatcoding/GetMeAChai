import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] text-center py-8 px-4 sm:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xs sm:text-sm">Copyright &copy; 2026 Get Me A Chai | All rights reserved!</p>
          <p className="text-xs sm:text-sm text-gray-400 pb-2 md:pb-4">
            Made by Naitik Gupta with ❤
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-300">
            <Link href="/about" className="hover:text-white transition">About us</Link>
            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
            <Link href="/policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms & Condition</Link>
            <Link href="/refund" className="hover:text-white transition">Cancellation/Refund Policies</Link>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
          <span className="text-sm sm:text-base font-semibold">Follow me on</span>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/naitikatcoding"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-4xl py-2 px-4 sm:py-2.5 sm:px-6 border border-gray-400 flex items-center gap-1.5 hover:bg-black text-xs sm:text-sm transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4 sm:w-5 sm:h-5 stroke-current fill-current stroke-0"
              >
                <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naitikatwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-4xl py-2 px-4 sm:py-2.5 sm:px-6 border border-gray-400 flex items-center gap-1.5 hover:bg-blue-600 text-xs sm:text-sm transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-4 h-4 sm:w-5 sm:h-5 stroke-current fill-current stroke-0"
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
    </footer>
  );
};

export default Footer;
