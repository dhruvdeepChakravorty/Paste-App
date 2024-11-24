import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { LiaPasteSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="flex gap-11 w-full h-[40px] m-5 ">
      <NavLink
        to={"/"}
        className={
          "flex items-center text-sky-400 text-[20px] font-bold mx-5 duration-300 hover:text-sky-600 "
        }
      >
        <IoMdHome className="mr-2 text-[24px]" />
        Home
      </NavLink>
      <NavLink
        to={"/pastes"}
        className={
          " flex items-center text-sky-400 text-[20px] font-bold mx-5 duration-300 hover:text-sky-600 "
        }
      >
        <LiaPasteSolid className="mr-2 text-[24px]" />
        Pastes
      </NavLink>
    </div>
  );
};

export default Navbar;
