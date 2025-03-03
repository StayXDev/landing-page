import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import { getTeam } from "../supabase/client";

const Team = () => {
  const [team, setTeam] = useState([]);

  const fetchTeam = async () => {
    const data = await getTeam();
    setTeam(data);
  };
  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-5 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#f58220] after:rounded-lg">
            Our Team
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meet the visionaries behind{" "}
            <span className="text-[#f58220]">StayX</span>. We're passionate
            about revolutionizing the way people experience and manage their
            stays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member Card */}
          {team.length > 0 &&
            team.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                designation={member.designation}
                bio={member.bio}
                image={member.image}
                linkedin={member.social?.linkedin}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
