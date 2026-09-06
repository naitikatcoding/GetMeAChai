"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  fetchUserByEmail,
  updateUser,
} from "@/actions/Useraction";

const Page = () => {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilePic: "",
    coverPic: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!session?.user?.email) return;

    const loadUser = async () => {
      try {
        const user = await fetchUserByEmail(session.user.email);

        if (user) {
          setForm({
            name: user.name || "",
            email: user.email || "",
            username: user.username || "",
            profilePic: user.profilePic || "",
            coverPic: user.coverPic || "",
            razorpayid: user.razorpayid || "",
            razorpaysecret: user.razorpaysecret || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    loadUser();
  }, [session]);

  const handlechange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      if (!session?.user?.email) {
        setMessage("Please login first.");
        return;
      }

      const result = await updateUser(session.user.email, form);

      if (result.success) {
        setMessage("Profile updated successfully.");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-3 sm:px-6 py-8 sm:py-16">
        <div className="w-full max-w-2xl rounded-xl bg-slate-800/90 border border-slate-700/60 p-5 sm:p-8 shadow-xl">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center sm:text-left border-b border-slate-700/80 pb-4">
            Welcome to your Dashboard
          </h1>

          <div className="space-y-4">

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handlechange}
                type="text"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                type="email"
                readOnly
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none opacity-60 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Username
              </label>
              <input
                name="username"
                value={form.username}
                onChange={handlechange}
                type="text"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Profile Picture
              </label>
              <input
                name="profilePic"
                value={form.profilePic}
                onChange={handlechange}
                type="text"
                placeholder="Enter profile picture URL"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Cover Picture
              </label>
              <input
                name="coverPic"
                value={form.coverPic}
                onChange={handlechange}
                type="text"
                placeholder="Enter cover picture URL"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Razorpay ID
              </label>
              <input
                name="razorpayid"
                value={form.razorpayid}
                onChange={handlechange}
                type="text"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Razorpay Secret
              </label>
              <input
                name="razorpaysecret"
                value={form.razorpaysecret}
                onChange={handlechange}
                type="password"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {message && (
              <p className="text-center text-sm font-medium text-green-400 py-1">
                {message}
              </p>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="w-full rounded-md bg-blue-600 hover:bg-blue-500 active:scale-[0.99] py-2.5 text-sm sm:text-base font-semibold text-white transition cursor-pointer mt-2 shadow-lg"
            >
              Save
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;