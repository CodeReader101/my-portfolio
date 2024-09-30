import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <>
      <header className="bg-red-600 w-full">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 w-full">
          <nav className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white inline-flex items-center py-6 px-3 mr-4 hover:text-green-800 text-4xl font-bold tracking-widest"
                  : "inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
              }
            >
              SHAHBAJ
            </NavLink>
            <NavLink
              to="/post"
              className={({ isActive }) =>
                isActive
                  ? "text-white inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "text-white inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              }
            >
              About Me!
            </NavLink>
          </nav>
          {/* Use flex to align social icons in line */}
          <div className="flex space-x-4 items-center">
            <SocialIcon
              url="https://github.com/CodeReader101"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://your-linkedin-url.com" // Replace with your LinkedIn URL
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://your-twitter-url.com" // Replace with your Twitter URL
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
