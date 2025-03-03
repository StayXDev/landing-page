import React, { useState } from "react";
import { insertInNotify } from "../supabase/client";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && isValidEmail(email)) {
      insertInNotify({ email });
      setStatus("Thank you! We'll notify you when we launch.");
      setEmail("");
    } else {
      setStatus("Please enter a valid email address.");
    }
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="w-full max-w-[500px] mx-auto relative">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="w-full px-6 py-[15px] pr-[140px] bg-white/10 border border-white/20 rounded-[50px] text-white placeholder-white/50 focus:outline-none focus:border-[#f58220] text-base"
            autoComplete="email"
          />
          <button
            type="submit"
            className="absolute top-[5px] right-[5px] bottom-[5px] bg-[#f58220] text-white font-semibold px-6 rounded-[50px] hover:bg-[#ff9440] transition-all duration-300 cursor-pointer"
          >
            Notify Me
          </button>
        </form>
      </div>
      <div>
        {status && (
          <p
            className={`text-center mt-2 ${
              status.includes("valid") ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </>
  );
};

export default EmailSubscribe;
