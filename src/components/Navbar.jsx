import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <>
      <header className="bg-transparent w-full">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 w-full">
          <nav className="w-full flex justify-between">
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-cursive tracking-normal text-white inline-flex items-center py-6 px-3 mr-4  text-6xl font-normal"
                    : "font-cursive tracking-normal text-white inline-flex items-center py-6 px-3 mr-4  text-6xl font-normal "}
              >
                Shahbaj
              </NavLink>
            </div>
            <div className="flex">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex items-center py-3 px-3 my-6 rounded text-[#e9322e]"
                    : "inline-flex items-center py-3 px-3 my-6 rounded  text-white "
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e9322e] inline-flex items-center py-3 px-3 my-6 rounded "
                    : "inline-flex items-center py-3 px-3 my-6 rounded text-white "
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e9322e] inline-flex items-center py-3 px-3 my-6 rounded "
                    : "inline-flex items-center py-3 px-3 my-6 rounded text-white "
                }
              >
                About Me!
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
