import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4 mb-32 mt-20">
        <div className="w-full max-w-2xl rounded-lg bg-slate-800 p-8 shadow-xl">
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white">Name</label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">Email</label>
              <input
                type="email"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">Username</label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Profile Picture
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Cover Picture
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Razorpay ID
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            
            <div>
              <label className="mb-1 block text-sm text-white">
                Razorpay Secrets
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-slate-600 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="button"
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

export default page;
