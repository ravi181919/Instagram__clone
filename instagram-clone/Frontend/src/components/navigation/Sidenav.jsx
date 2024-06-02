import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdSlideshow } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Sidenav() {
  return (
    <div className="fixed border-r-white/50 border-r h-full flex items-start justify-center">
      <div className="px-8 ">
        <div className="mt-10  ml-3">
          <img
            className="h-8"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="logo"
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 tracking-wider text-sm font-[Poppins]">
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <GoHomeFill size={"1.9vw"} />
            <span>Home</span>
          </button>
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <IoSearch size={"1.9vw"} />
            <span>Search</span>
          </button>
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <MdOutlineExplore size={"1.9vw"} />
            <span>Explore</span>
          </button>
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <MdSlideshow size={"1.9vw"} />
            <span>Reels</span>
          </button>
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <IoChatbubbleEllipsesOutline size={"1.9vw"} />
            <span>Messages</span>
          </button>
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <FaRegHeart size={"1.7vw"} />
            <span>Notifications</span>
          </button>
          <button className="flex gap-3 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <FaRegSquarePlus size={"1.7vw"} />
            <span>Post</span>
          </button>
        </div>

        <div className="fixed bottom-4 text-sm font-[Poppins]">
          <button className="flex gap-4 items-center  hover:bg-slate-700 px-2 py-2 rounded-md focus:font-extrabold">
            <FaBars size={"1.7vw"} />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
