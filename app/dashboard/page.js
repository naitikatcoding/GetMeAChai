"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  fetchUserByEmail,
  updateUser,
} from "@/actions/Useraction";

const Page = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilePic: "",
    coverPic: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const loadedEmailRef = useRef(null);

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    const email = session?.user?.email;
    if (!email) return;

    // Only load once per user email to prevent overwriting active user edits
    if (loadedEmailRef.current === email) {
      return;
    }

    const userName = session?.user?.name || "";
    const userImage = session?.user?.image || "";

    const loadUser = async () => {
      try {
        const user = await fetchUserByEmail(email);
        loadedEmailRef.current = email;

        if (user) {
          setForm({
            name: user.name || userName,
            email: email,
            username: user.username || "",
            profilePic: user.profilePic || userImage,
            coverPic: user.coverPic || "",
            razorpayid: user.razorpayid || "",
            razorpaysecret: user.razorpaysecret || "",
          });
        } else {
          setForm({
            name: userName,
            email: email,
            username: "",
            profilePic: userImage,
            coverPic: "",
            razorpayid: "",
            razorpaysecret: "",
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Failed to load user profile");
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [session?.user?.email, session?.user?.name, session?.user?.image, status, router]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();

    if (!session?.user?.email) {
      toast.error("Please login first.");
      return;
    }

    if (!form.username?.trim()) {
      toast.error("Username is required.");
      return;
    }

    setIsSaving(true);
    try {
      const result = await updateUser(session.user.email, form);

      if (result.success) {
        toast.success(result.message || "Profile updated successfully! 🎉");

        // Keep local state in sync
        if (result.user?.username) {
          setForm((prev) => ({
            ...prev,
            username: result.user.username,
          }));
        }

        // Update NextAuth session with the new username so Navbar "Your page" points to it
        if (update) {
          await update({
            user: {
              ...session.user,
              name: result.user?.username || form.username,
              username: result.user?.username || form.username,
            },
          });
        }

        router.refresh();
      } else {
        toast.error(result.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-300 text-sm">Loading your profile details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-3 sm:px-6 py-8 sm:py-16">
        <div className="w-full max-w-2xl rounded-xl bg-slate-800/90 border border-slate-700/60 p-5 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-700/80 gap-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Welcome to your Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Save your details here to activate and customize your public creator page.
              </p>
            </div>
            {form.username && (
              <button
                type="button"
                onClick={() => {
                  const hasAllDetails = Boolean(
                    form.name?.trim() &&
                    form.username?.trim() &&
                    form.profilePic?.trim() &&
                    form.coverPic?.trim() &&
                    form.razorpayid?.trim() &&
                    form.razorpaysecret?.trim()
                  );

                  if (!hasAllDetails) {
                    alert("First fill all your details!");
                    return;
                  }

                  router.push(`/${form.username}`);
                }}
                className="text-xs bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 px-3 py-1.5 rounded-lg transition self-start sm:self-auto inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>View My Page</span>
                <span>↗</span>
              </button>
            )}
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handlechange}
                type="text"
                placeholder="Your full name or display name"
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
                Username <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2 sm:top-2.5 text-slate-400 text-sm sm:text-base">@</span>
                <input
                  name="username"
                  value={form.username}
                  onChange={handlechange}
                  type="text"
                  required
                  placeholder="your-unique-username"
                  className="w-full rounded-md bg-slate-700/80 border border-slate-600 pl-8 pr-3.5 py-2 sm:px-4 sm:pl-9 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Profile Picture URL
              </label>
              <input
                name="profilePic"
                value={form.profilePic}
                onChange={handlechange}
                type="text"
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Cover Picture URL
              </label>
              <input
                name="coverPic"
                value={form.coverPic}
                onChange={handlechange}
                type="text"
                placeholder="https://example.com/cover-banner.jpg"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Razorpay Key ID
              </label>
              <input
                name="razorpayid"
                value={form.razorpayid}
                onChange={handlechange}
                type="text"
                placeholder="rzp_test_..."
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-200">
                Razorpay Key Secret
              </label>
              <input
                name="razorpaysecret"
                value={form.razorpaysecret}
                onChange={handlechange}
                type="password"
                placeholder="••••••••••••••••"
                className="w-full rounded-md bg-slate-700/80 border border-slate-600 px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-white outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full rounded-md bg-blue-600 hover:bg-blue-500 active:scale-[0.99] py-2.5 text-sm sm:text-base font-semibold text-white transition cursor-pointer mt-4 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving Changes...</span>
                </>
              ) : (
                "Save Profile"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;