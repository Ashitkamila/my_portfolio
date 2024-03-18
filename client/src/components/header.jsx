import React from "react";

const Header = () => {

  return (
    <div className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center">
          {/* Logo or Branding */}
        </div>
        <nav className="space-x-4 flex items-center">
          <a href="#about" className="hover:text-tertiary">
            About
          </a>
          <a href="#experiences" className="hover:text-tertiary">
            Experiences
          </a>
          <a href="#projects" className="hover:text-tertiary">
            Projects
          </a>
          <a href="#course" className="hover:text-tertiary">
            Courses
          </a>
          <a href="#contact" className="hover:text-tertiary">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
