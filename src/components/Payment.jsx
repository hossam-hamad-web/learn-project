import React, { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function Payment() {
  const [method, setMethod] = useState("visa");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        {/* Left Section: Branding & Wave */}
        <div className="relative w-full md:w-5/12 bg-blue-600 flex flex-col items-center justify-center p-12 overflow-hidden">
          {/* الـ Wave اللي فوق - باستخدام SVG احترافي */}
          <div className="absolute top-0 left-0 w-full rotate-180 opacity-20">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-64 w-full"
            >
              <path
                d="M0,150 C150,50 350,0 500,100 L500,0 L0,0 Z"
                fill="white"
              ></path>
            </svg>
          </div>

          {/* Logo & Text */}
          <div className="relative z-10 text-center text-white">
            <div className="bg-white p-6 rounded-3xl mb-6 shadow-xl inline-block">
              {/* هنا تحط لوجو Rydex بتاعك */}
              <div className="text-blue-600 text-6xl font-black italic">R</div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-2">
              Rydex
            </h1>
            <p className="text-blue-100 text-lg opacity-80">
              Smart City Mobility
            </p>
          </div>

          {/* الـ Wave اللي تحت */}
          <div className="absolute bottom-0 left-0 w-full opacity-10">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-48 w-full"
            >
              <path
                d="M0,150 C150,50 350,0 500,100 L500,500 L0,500 Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>

        {/* Right Section: Payment Form */}
        <div className="w-full md:w-7/12 p-8 md:p-14 bg-white">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                <i className="fa-solid fa-check"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Booking Successful!
              </h2>
              <p className="text-gray-500 mb-8">
                Your driver is on the way. Check your ride status in the app.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-blue-600 font-semibold underline"
              >
                Make another booking
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Tap your card to pay for ride
              </h2>

              {/* Payment Methods Grid */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { id: "visa", icon: <FaCcVisa />, label: "Visa Card" },
                  {
                    id: "master",
                    icon: <FaCcMastercard />,
                    label: "Master Card",
                  },
                  { id: "gpay", icon: <FaGooglePay />, label: "GPay" },
                  {
                    id: "other",
                    icon: <span className="text-xl">...</span>,
                    label: "",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setMethod(item.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                      method === item.id
                        ? "border-blue-600 bg-blue-50/50 text-blue-600"
                        : "border-gray-100 text-gray-400 hover:border-gray-200"
                    }`}
                  >
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Form Inputs */}
              <div className="space-y-5">
                <div className="relative">
                  <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                    Card number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                      <FaCcVisa className="text-blue-800 text-xl" />
                      <FaCcMastercard className="text-red-500 text-xl" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                      Country
                    </label>
                    <select className="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                      <option>Egypt</option>
                      <option>UAE</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                      Bank
                    </label>
                    <input
                      type="text"
                      placeholder="Commercial Bank"
                      className="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer group mt-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    Save Card details for future payments
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <button className="py-4 border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">
                  Cash on Ride
                </button>
                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
