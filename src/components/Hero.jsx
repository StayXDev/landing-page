import React, { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import EmailSubscribe from "./EmailSubscribe";
import Background from "./Background";
import { getLaunchDate } from "../supabase/client";

const Hero = () => {
  const [launchDate, setLaunchDate] = useState("");
  useEffect(() => {
    const fetchLaunchDate = async () => {
      const date = await getLaunchDate();
      setLaunchDate(date);
    };
    fetchLaunchDate();
  }, []);
  return (
    <section className="py-20 text-center relative">
      {/* Background Effects */}
      <Background />

      <div className="container mx-auto px-4">
        <div className="inline-block bg-[#f58220]/20 text-[#f58220] text-xl px-6 py-2 rounded-full font-medium mb-8">
          Coming Soon!!
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
          Stay<span className="text-[#f58220]">X</span> – Smart Living
          Simplified
        </h1>

        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          We're building something amazing. Stay tuned for a smarter way to
          manage your stays.
        </p>

        <CountdownTimer targetDate={launchDate} />

        <div className="mt-16">
          <EmailSubscribe />
        </div>
      </div>
    </section>
  );
};

export default Hero;
