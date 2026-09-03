"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import teaicon from "../app/icon.svg";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111827] px-6">
      <ul className="flex p-3.5 text-white font-bold justify-between items-center">
        <li className="flex items-center">
          <Image src={teaicon} alt="Profile" width={40} height={40} />
          <Link href="/" className="text-lg pt-2.5">
            GetMeAChai!
          </Link>
        </li>
        <li className="flex items-center gap-4">
          {session ? (
            <div className="relative">
              {/* Dropdown Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-linear-[#45CC90,#2C7AD7] py-2.5 px-5 rounded-lg text-sm cursor-pointer hover:bg-linear-[#7F00FF,#5D3FD3] shadow-md transition inline-flex items-center gap-2 focus:outline-none"
                type="button"
              >
                welcome {session.user.email}
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 z-10 bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-44">
                  <ul className="py-2 text-sm text-gray-200 font-medium">
                    <li>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${session.user.name}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                      >
                        Your page
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          signOut({ callbackUrl: "/" });
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-white text-red-400 cursor-pointer"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-linear-[#45CC90,#2C7AD7] py-2.5 px-5 rounded-lg text-sm cursor-pointer hover:bg-linear-[#7F00FF,#5D3FD3] shadow-md transition hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-offset-2">
                Login
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
