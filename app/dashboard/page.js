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
    <div>
      <div className="min-h-screen flex items-center justify-center px-4 mb-32 mt-20">
        <div className="w-full max-w-2xl rounded-lg bg-slate-800 p-8 shadow-xl">
          <div className="space-y-4">

            <div>
              <label className="mb-1 block text-sm text-white">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handlechange}
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                type="email"
                readOnly
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none opacity-70"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Username
              </label>
              <input
                name="username"
                value={form.username}
                onChange={handlechange}
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Profile Picture
              </label>
              <input
                name="profilePic"
                value={form.profilePic}
                onChange={handlechange}
                type="text"
                placeholder="Enter profile picture URL"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Cover Picture
              </label>
              <input
                name="coverPic"
                value={form.coverPic}
                onChange={handlechange}
                type="text"
                placeholder="Enter cover picture URL"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Razorpay ID
              </label>
              <input
                name="razorpayid"
                value={form.razorpayid}
                onChange={handlechange}
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Razorpay Secret
              </label>
              <input
                name="razorpaysecret"
                value={form.razorpaysecret}
                onChange={handlechange}
                type="password"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {message && (
              <p className="text-center text-sm text-green-400">
                {message}
              </p>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="w-full rounded-md bg-blue-500 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
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