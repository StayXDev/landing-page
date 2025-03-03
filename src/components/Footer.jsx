import React from "react";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} StayX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
