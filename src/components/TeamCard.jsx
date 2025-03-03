import React from "react";

const TeamCard = ({
  image = "",
  name = "",
  designation = "",
  bio = "",
  linkedin = "",
}) => {
  return (
    <div className="bg-[#0b4971] rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
      <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#f58220]/20 shadow-[0_5px_15px_rgba(245,130,32,0.2)]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-[#f58220] font-semibold mb-4">{designation}</p>
      <p className="text-white/80 text-sm mb-6 text-justify">{bio}</p>
      <div className="flex justify-center gap-4">
        <a
          href={linkedin}
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-[#f58220] hover:-translate-y-1 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
