"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import user from "../app/user.gif";
import { initiate, fetchUser, fetchpayments } from "@/actions/Useraction";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const Paymentpage = ({ username, initialUser = null, initialPayments = [] }) => {
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [payments, setpayments] = useState(initialPayments);
  const [loading, setLoading] = useState(!initialUser);
  const [isPaying, setIsPaying] = useState(false);
  const [coverImgError, setCoverImgError] = useState(false);
  const [profileImgError, setProfileImgError] = useState(false);
  const router = useRouter();

  const [paymentform, setpaymentform] = useState({
    user_name: "",
    message: "",
    amount: "",
  });

  const searchParams = useSearchParams();
  const paymentDone = searchParams.get("paymentdone") === "true";
  const { data: session } = useSession();

  // Always load fresh creator data on mount / username change to reflect real-time updates
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const [userData, paymentsData] = await Promise.all([
          fetchUser(username),
          fetchpayments(username),
        ]);

        if (isMounted && userData) {
          setCurrentUser(userData);
          setpayments(paymentsData || []);
          setCoverImgError(false);
          setProfileImgError(false);
        }
      } catch (err) {
        console.error("Error loading creator data:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (username) {
      loadData();
    }

    return () => {
      isMounted = false;
    };
  }, [username]);

  useEffect(() => {
    if (paymentDone) {
      toast.success("Thank you for your generous support! ☕🎉");
    }
  }, [paymentDone]);

  // Check if viewing own page
  const isOwnPage = Boolean(
    session?.user &&
      currentUser &&
      (session.user.email?.toLowerCase() === currentUser.email?.toLowerCase() ||
        (session.user.username && session.user.username.toLowerCase() === username.toLowerCase()) ||
        (session.user.name && session.user.name.toLowerCase() === username.toLowerCase()))
  );

  const hasAllDetails = Boolean(
    currentUser?.name?.trim() &&
    currentUser?.username?.trim() &&
    currentUser?.profilePic?.trim() &&
    currentUser?.coverPic?.trim() &&
    currentUser?.razorpayid?.trim() &&
    currentUser?.razorpaysecret?.trim()
  );

  // If creator visits their own page without all dashboard details, alert and redirect to dashboard
  useEffect(() => {
    if (!loading && currentUser && isOwnPage && !hasAllDetails) {
      alert("First fill all your details!");
      router.push("/dashboard");
    }
  }, [loading, currentUser, isOwnPage, hasAllDetails, router]);

  const handlechange = (e) => {
    setpaymentform({
      ...paymentform,
      [e.target.name]: e.target.value,
    });
  };

  const pay = async (amountInPaise) => {
    if (!amountInPaise || amountInPaise < 100) {
      toast.error("Please enter a valid amount (minimum ₹1).");
      return;
    }

    const keyId = (
      currentUser?.razorpayid ||
      process.env.NEXT_PUBLIC_KEY_ID ||
      ""
    ).trim();

    if (!keyId) {
      toast.error("This creator has not configured their payment keys yet.");
      return;
    }

    setIsPaying(true);

    try {
      const order = await initiate(amountInPaise, username, paymentform);
      const orderId = order.id;

      const callbackUrl =
        typeof window !== "undefined" && window.location.origin
          ? `${window.location.origin}/api/razorpay`
          : (process.env.NEXT_PUBLIC_CALLBACK_URL || "http://localhost:3000/api/razorpay");

      const options = {
        key: keyId,
        amount: amountInPaise,
        currency: "INR",
        name: currentUser?.name || "Get Me A Chai",
        description: `Support @${username}`,
        image: currentUser?.profilePic || "https://example.com/your_logo",
        order_id: orderId,
        callback_url: callbackUrl,

        prefill: {
          name: paymentform.user_name || session?.user?.name || "",
          email: session?.user?.email || "",
        },

        notes: {
          address: "Razorpay Corporate Office",
        },

        theme: {
          color: "#4f46e5",
        },
      };

      if (!window.Razorpay) {
        toast.error("Payment SDK is loading, please try again in a few seconds.");
        setIsPaying(false);
        return;
      }

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error(error.message || "Failed to initiate payment. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-300 text-sm">Loading creator profile...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4 text-white">
        <div className="max-w-md w-full rounded-2xl bg-slate-800/90 border border-slate-700/60 p-8 text-center shadow-xl">
          <div className="text-4xl mb-3">🔍</div>
          <h1 className="text-2xl font-bold mb-2">Creator Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">
            We couldn&apos;t find a creator page for <span className="text-indigo-400 font-semibold">@{username}</span>.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const isProfileSaved = Boolean(
    currentUser.isProfileSaved ||
      (currentUser.razorpayid && currentUser.razorpaysecret)
  );

  const totalRaised = payments.reduce(
    (acc, p) => acc + (Number(p.amount) || 0),
    0
  );
  const totalSupporters = payments.length;

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <main className="w-full text-white">
        {/* If user visits their own page without saving dashboard details */}
        {isOwnPage && !isProfileSaved && (
          <div className="mx-auto max-w-5xl px-4 pt-6">
            <div className="rounded-2xl border border-amber-500/40 bg-amber-950/40 backdrop-blur-sm p-4 sm:p-5 text-amber-200 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3">
                  <span className="text-2xl shrink-0">⚠️</span>
                  <div>
                    <h2 className="font-bold text-white text-base sm:text-lg">
                      First fill and save your Dashboard details
                    </h2>
                    <p className="text-xs sm:text-sm text-amber-200/90 mt-0.5">
                      Your creator page is not fully set up yet. Please fill your cover picture, profile picture, and Razorpay details on the Dashboard so supporters can donate to you!
                    </p>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="shrink-0 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-4 py-2 text-xs sm:text-sm shadow-md transition inline-flex items-center gap-1.5"
                >
                  <span>Go to Dashboard</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Banner */}
        <section
          className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden bg-slate-900 border-b border-slate-800"
          aria-label={`${username} profile banner`}
        >
          {currentUser.coverPic && !coverImgError ? (
            /* Using standard img for external user URLs to avoid next/image domain restrictions */
            <img
              key={currentUser.coverPic}
              src={currentUser.coverPic}
              alt={`${username} profile banner`}
              onError={() => setCoverImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.15),transparent_70%)]" />
              <div className="text-center px-4 z-10 opacity-70">
                <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest">
                  {currentUser.name || username}&apos;s Chai Page
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Profile Header */}
        <section className="flex flex-col items-center px-4">
          <div className="relative z-10 -mt-14 sm:-mt-16 h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-slate-900 shadow-2xl bg-slate-800 flex items-center justify-center">
            {currentUser.profilePic && !profileImgError ? (
              <img
                key={currentUser.profilePic}
                src={currentUser.profilePic}
                alt={`${username} profile picture`}
                onError={() => setProfileImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold uppercase shadow-inner">
                {(currentUser.name || username || "U").charAt(0)}
              </div>
            )}
          </div>

          <header className="mt-3 mb-6 text-center max-w-xl">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              {currentUser.name || `@${username}`}
            </h1>
            <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">
              @{username}
            </p>

            <div className="mt-3 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-emerald-400">
                ₹{totalRaised.toLocaleString("en-IN")} raised
              </span>
              <span className="text-slate-600">•</span>
              <span>
                {totalSupporters} {totalSupporters === 1 ? "supporter" : "supporters"}
              </span>
            </div>
          </header>
        </section>

        {/* Main Content */}
        <section className="mx-auto mb-16 flex w-[92%] max-w-6xl flex-wrap justify-center gap-6">
          {/* Supporters Section */}
          <article className="min-h-80 w-full rounded-2xl bg-slate-800/90 border border-slate-700/60 p-5 sm:p-6 sm:w-[28rem] md:w-[32rem] shadow-xl flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-slate-700/80 pb-3">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Supporters</span>
                <span className="text-xs bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full">
                  {payments.length}
                </span>
              </h2>
            </div>

            {payments.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-10 text-center text-slate-400">
                <div className="w-14 h-14 mb-3 rounded-full bg-slate-700/50 flex items-center justify-center text-2xl border border-slate-600/40">
                  ☕
                </div>
                <p className="text-base font-semibold text-slate-200">No supporters yet</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xs">
                  Be the first one to support @{username} by buying them a chai!
                </p>
              </div>
            ) : (
              <ul className="w-full space-y-3 text-sm max-h-[380px] overflow-y-auto pr-1">
                {payments.map((p, index) => (
                  <li
                    key={p._id || index}
                    className="flex items-start gap-3 rounded-xl bg-slate-900/60 border border-slate-700/40 p-3 hover:border-slate-600/60 transition"
                  >
                    <Image
                      src={user}
                      alt="Supporter avatar"
                      width={34}
                      height={34}
                      className="shrink-0 rounded-full object-cover mt-0.5"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">
                        <span className="font-semibold text-slate-100">
                          {p.user_name || "Anonymous"}
                        </span>{" "}
                        <span className="text-slate-400 text-xs">donated</span>{" "}
                        <strong className="text-emerald-400 font-semibold">₹{p.amount}</strong>
                      </p>
                      {p.message && (
                        <p className="text-xs text-slate-300 italic mt-1 break-words bg-slate-800/60 rounded p-1.5 border border-slate-700/30">
                          &ldquo;{p.message}&rdquo;
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </article>

          {/* Payment Section */}
          <article className="min-h-80 w-full rounded-2xl bg-slate-800/90 border border-slate-700/60 p-5 sm:p-6 sm:w-[28rem] md:w-[32rem] shadow-xl">
            <h2 className="mb-4 text-lg sm:text-xl font-bold text-white border-b border-slate-700/80 pb-3">
              Buy @{username} a Chai
            </h2>

            <div className="w-full space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="user_name" className="mb-1 block text-xs font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  value={paymentform.user_name}
                  onChange={handlechange}
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="w-full rounded-md border border-slate-600 bg-slate-900/80 p-2.5 sm:p-3 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-xs font-medium text-slate-300">
                  Message
                </label>
                <input
                  id="message"
                  name="message"
                  value={paymentform.message}
                  onChange={handlechange}
                  type="text"
                  placeholder="Say something nice..."
                  className="w-full rounded-md border border-slate-600 bg-slate-900/80 p-2.5 sm:p-3 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition placeholder:text-slate-500"
                />
              </div>

              <div>
                <label htmlFor="amount" className="mb-1 block text-xs font-medium text-slate-300">
                  Amount (₹)
                </label>
                <input
                  id="amount"
                  name="amount"
                  value={paymentform.amount}
                  onChange={handlechange}
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Enter amount in ₹"
                  inputMode="numeric"
                  className="w-full rounded-md border border-slate-600 bg-slate-900/80 p-2.5 sm:p-3 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition placeholder:text-slate-500"
                />
              </div>

              {paymentDone && (
                <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/50 p-3 text-center text-sm font-medium text-emerald-300">
                  🎉 Thank you for your support! Your payment was successful.
                </div>
              )}

              <button
                type="button"
                disabled={isPaying}
                onClick={() => {
                  const amt = paymentform.amount
                    ? Number.parseInt(paymentform.amount, 10) * 100
                    : 5000; // default ₹50
                  pay(amt);
                }}
                className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] px-4 py-3 text-sm font-semibold text-white transition shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isPaying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  `Pay ${paymentform.amount ? `₹${paymentform.amount}` : "₹50"}`
                )}
              </button>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => pay(1000)}
                  className="flex-1 rounded-lg border border-slate-600 bg-slate-900/80 py-2 text-xs font-semibold hover:bg-slate-700 transition cursor-pointer text-slate-200"
                >
                  Pay ₹10
                </button>

                <button
                  type="button"
                  onClick={() => pay(2000)}
                  className="flex-1 rounded-lg border border-slate-600 bg-slate-900/80 py-2 text-xs font-semibold hover:bg-slate-700 transition cursor-pointer text-slate-200"
                >
                  Pay ₹20
                </button>

                <button
                  type="button"
                  onClick={() => pay(3000)}
                  className="flex-1 rounded-lg border border-slate-600 bg-slate-900/80 py-2 text-xs font-semibold hover:bg-slate-700 transition cursor-pointer text-slate-200"
                >
                  Pay ₹30
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Paymentpage;