import React from "react";

const Navbar = () => {
  return (
    <nav className="scrolled-header sticky top-0 left-0 w-full border-b border-[#4d4e53] shadow-sm text-xl bg-black z-10 mx-auto">
      <div className="px-12 h-24 flex justify-between items-center text-white relative">
        <a href="#" className="md:inline hidden">Yee Chian</a>
        <a href="#" className="md:hidden">YC</a>
        <div className="flex justify-end space-x-2">
          <a href="#aboutMe" className="p-4">About</a>
          <a href="#projects" className="p-4">Projects</a>
          <a href="#contact" className="p-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
