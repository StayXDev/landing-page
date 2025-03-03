import React, { useState } from "react";

import { insertResume, insertInCareers } from "../supabase/client";

const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState(""); // Add this line
  const [file, setFile] = useState(null); // Add this line
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !selectedValue || !file) {
      alert("Please fill in all required fields.");
      return;
    }
    const resumeUrl = await insertResume(file, name);
    const { error } = await insertInCareers({
      full_name: name,
      email,
      role_of_interest: selectedValue,
      resume: resumeUrl,
    });

    alert(
      "Thank you for your application! We will review it and get back to you soon."
    );
    e.target.reset();
    setName("");
    setEmail("");
    setSelectedValue(""); // Add this line
    setFileName("");
  };

  return (
    <section id="join" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#f58220] font-semibold uppercase tracking-wider mb-3">
              CAREERS
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Want to be part of Stay<span className="text-[#f58220]">X</span>?
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              We're looking for passionate individuals to help shape the future
              of smart living. Join our team of innovators and make an impact in
              revolutionizing accommodation management.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Our team enjoys competitive compensation, remote-friendly
              policies, learning opportunities, and a collaborative culture that
              values creativity and growth.
            </p>
          </div>

          <div className="bg-[#00395d]/40 border border-white/10 rounded-2xl p-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#f58220] before:via-[#ff9f4a] before:to-[#1e88e5] before:rounded-t-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-[#f58220] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-[#f58220] transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-white font-medium mb-2"
                >
                  Role of Interest
                </label>
                <select
                  id="role"
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:border-[#f58220] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.247%2011.14%202.451%205.658C1.885%205.013%202.345%204%203.204%204h9.592a1%201%200%200%201%20.753%201.659l-4.796%205.48a1%201%200%200%201-1.506%200z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_1rem]"
                >
                  <option className="bg-[#00395d]" value="" disabled>
                    Select a role
                  </option>
                  <option className="bg-[#00395d]" value="software-engineer">
                    Software Engineer
                  </option>
                  <option className="bg-[#00395d]" value="ui-ux-designer">
                    UI/UX Designer
                  </option>
                  <option className="bg-[#00395d]" value="product-manager">
                    Product Manager
                  </option>
                  <option className="bg-[#00395d]" value="data-scientist">
                    Data Scientist
                  </option>
                  <option className="bg-[#00395d]" value="business-developer">
                    Business Development
                  </option>
                  <option className="bg-[#00395d]" value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-white font-medium mb-2"
                >
                  Resume Upload
                </label>
                <div className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-center cursor-pointer hover:border-[#f58220] hover:bg-white/8 transition-all relative group">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                    {fileName || "Upload your resume"}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f58220] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#ff9440] transition-colors duration-300 mt-6"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
