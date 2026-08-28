import React from "react";

const Navbar = () => {
  const navicon = (
    <svg
      class="size-4 mb-1 md:mb-1.5 font-bold "
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      ></path>
    </svg>
  );

  return (
    <div>
      <nav className="navbarcolor px-6">
        <ul className="flex p-3.5 text-white font-bold justify-between items-center">
          <li className="text-lg">GetMeAChai!</li>
          <li className="flex items-center gap-4">
            <span className="searchicon py-2 px-5 rounded-lg">{navicon}</span>
            <button className="contact py-2.5 px-5 rounded-lg text-sm">Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
