"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import user from "../app/user.gif";
import { initiate, fetchUser, fetchpayments } from "@/actions/Useraction";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const Paymentpage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({
    user_name: "",
    message: "",
    amount: "",
  });

  const [currentUser, setcurrentUser] = useState({});
  const [Payment, setPayment] = useState([]);

  const searchParams = useSearchParams();
  const paymentDone = searchParams.get("paymentdone") === "true";

  const { data: session } = useSession();

  const handlechange = (e) => {
    setpaymentform({
      ...paymentform,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!username) return;

    let cancelled = false;

    const loadData = async () => {
      try {
        const [u, dbpayment] = await Promise.all([
          fetchUser(username),
          fetchpayments(username),
        ]);

        if (cancelled) return;

        if (u) {
          setcurrentUser(u);
        } else {
          setcurrentUser({});
        }

        console.log("Payments from database:", dbpayment);

        setPayment(dbpayment || []);
      } catch (error) {
        if (!cancelled) {
          console.error("Error fetching user/payment data:", error);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, [username]);

  console.log("Payment state:", Payment);

  const pay = async (amount) => {
    try {
      if (!window.Razorpay) {
        console.error("Razorpay script has not loaded yet.");
        alert("Payment system is still loading. Please try again.");
        return;
      }

      const a = await initiate(amount, username, paymentform);

      if (!a || !a.id) {
        console.error("Razorpay order was not created.");
        alert("Unable to create payment order. Please try again.");
        return;
      }

      const orderId = a.id;

      const callbackUrl =
        typeof window !== "undefined" && window.location.origin
          ? `${window.location.origin}/api/razorpay`
          : process.env.NEXT_PUBLIC_CALLBACK_URL ||
            "http://localhost:3000/api/razorpay";

      const options = {
        key: (process.env.NEXT_PUBLIC_KEY_ID || "").trim(),
        amount: amount,
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "/cover.gif",
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
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong while starting the payment.");
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <main className="w-full text-white">
        {/* Banner */}
        <section
          className="relative h-75 w-full"
          aria-label={`${username} profile banner`}
        >
          <Image
            src={currentUser.coverPic || "/cover.gif"}
            alt={`${username} profile banner`}
            fill
            priority
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
        </section>

        {/* Profile */}
        <section className="flex flex-col items-center">
          <div className="relative z-10 -mt-12.5 h-25 w-25 overflow-hidden rounded-full border-4 border-black">
            <Image
              src={
                currentUser.profilePic ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTXbyHFWAHpGLA25WVL2_tx4NEY8RFO-6l6qVMPFHDw&s=10"
              }
              alt={`${username} profile picture`}
              fill
              priority
              unoptimized
              sizes="100px"
              className="object-cover"
            />
          </div>

          <header className="mt-3 mb-8 text-center">
            <h1 className="text-xl font-bold">
              @{currentUser.username || username}
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              {currentUser.name || "Create Digital Art Live"}
            </p>

            <p className="text-sm text-slate-400">
              Currently | 9,180 | members
            </p>
          </header>
        </section>

        {/* Main Content */}
        <section className="mx-auto mb-15 mt-2.5 flex w-[90%] max-w-6xl flex-wrap justify-center gap-6 px-4">
          {/* Supporters */}
          <article className="min-h-80 w-full rounded-lg bg-gray-700 p-6 sm:w-[28rem] md:w-[32rem]">
            <h2 className="mb-4 text-xl font-bold">Supporters</h2>

            <ul className="w-full space-y-3 text-sm">
              {Payment.length > 0 ? (
                Payment.map((payment, index) => (
                  <li
                    key={payment._id || index}
                    className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-2.5"
                  >
                    <Image
                      src={user}
                      alt="Supporter avatar"
                      width={32}
                      height={32}
                      className="shrink-0 rounded-full object-cover"
                    />

                    <span>
                      {payment.user_name || "Anonymous"} donated{" "}
                      <strong className="text-green-400">
                        ₹{payment.amount}
                      </strong>{" "}
                      with a message &quot;
                      {payment.message || ""}
                      &quot;
                    </span>
                  </li>
                ))
              ) : (
                <li className="rounded-lg bg-gray-800/50 p-3 text-center text-gray-400">
                  No supporters yet
                </li>
              )}
            </ul>
          </article>

          {/* Payment */}
          <article className="min-h-80 w-full rounded-lg bg-gray-700 p-6 sm:w-[28rem] md:w-[32rem]">
            <h2 className="mb-6 text-xl font-bold">Make a Payment</h2>

            <div className="w-full space-y-4">
              <input
                id="user_name"
                name="user_name"
                value={paymentform.user_name}
                onChange={handlechange}
                type="text"
                placeholder="Enter Name"
                autoComplete="name"
                className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-sm focus:border-indigo-500 focus:outline-none"
              />

              <input
                id="message"
                name="message"
                value={paymentform.message}
                onChange={handlechange}
                type="text"
                placeholder="Enter Message"
                className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-sm focus:border-indigo-500 focus:outline-none"
              />

              <input
                id="amount"
                name="amount"
                value={paymentform.amount}
                onChange={handlechange}
                type="number"
                min="1"
                step="1"
                placeholder="Enter Amount"
                inputMode="numeric"
                className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-sm focus:border-indigo-500 focus:outline-none"
              />

              {paymentDone && (
                <div className="rounded-md border border-green-500 bg-green-500/20 p-3 text-center text-sm font-medium text-green-300">
                  🎉 Thank you for your support! Your payment was successful.
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  const amt = paymentform.amount
                    ? Number.parseInt(paymentform.amount, 10) * 100
                    : 50000;

                  pay(amt);
                }}
                className="w-full cursor-pointer rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition duration-150 hover:bg-indigo-700"
              >
                Pay {paymentform.amount ? `₹${paymentform.amount}` : ""}
              </button>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => pay(1000)}
                  className="cursor-pointer rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs hover:bg-gray-600"
                >
                  Pay ₹10
                </button>

                <button
                  type="button"
                  onClick={() => pay(2000)}
                  className="cursor-pointer rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs hover:bg-gray-600"
                >
                  Pay ₹20
                </button>

                <button
                  type="button"
                  onClick={() => pay(3000)}
                  className="cursor-pointer rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs hover:bg-gray-600"
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