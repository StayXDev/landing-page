import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
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
          <TeamCard
            name="Yashwanth Kasini"
            designation="Founder & CEO"
            bio="Yashwanth Kasini is the visionary behind StayX, leading the
              company as its Founder & CEO."
            image="https://media.licdn.com/dms/image/v2/D5603AQH8lWCr6ZXzKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695671444903?e=1746057600&v=beta&t=qwEdDBfZZ6EPdPzS4Wjxvr8u4yfbNpJjeQrhYq5db6c"
            linkedin="https://www.linkedin.com/in/yashwanthsairaja/"
          />
          <TeamCard
            name="Yashash Kasini"
            designation="Co-Founder, Product & Design"
            bio="Yashwanth Kasini is the visionary behind StayX, leading the
              company as its Founder & CEO."
            image="https://media.licdn.com/dms/image/v2/D4D03AQGwCoRAqWXRGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677942350248?e=1746057600&v=beta&t=QCb7K9LR1O4rfRBxAZI75FeFkgVsyTEywQ-OX3GnvsE"
            linkedin="https://www.linkedin.com/in/yashashkasini/"
          />
          <TeamCard
            name="Manohar Kakumani"
            designation="Co-Founder, CTO"
            bio="Manohar Kakumani is the visionary behind StayX, leading the
              company as its Founder & CEO."
            image="https://th.bing.com/th/id/OIP.ta1LlTk0ncRcri23kiBrzQHaHa?rs=1&pid=ImgDetMain"
            linkedin="https://www.linkedin.com/in/manoharkakumani/"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
