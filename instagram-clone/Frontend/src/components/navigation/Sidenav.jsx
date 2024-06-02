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
      <div className="px-8">

        <div className="flex gap-3 mt-6 items-center justify-center">
          <FaInstagram size={"2vw"} />
          <img
            className="h-9"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="logo"
          />
        </div>

        <div className="Sidenav_buttons mt-9 flex flex-col gap-7 font-medium font-[Poppins]">
          <button className="flex gap-4 items-center">
            <GoHomeFill size={"1.9vw"} />
            <span>Home</span>
          </button>
          <button className="flex gap-4 items-center">
            <IoSearch size={"1.9vw"} />
            <span>Search</span>
          </button>
          <button className="flex gap-4 items-center">
            <MdOutlineExplore size={"1.9vw"} />
            <span>Explore</span>
          </button>
          <button className="flex gap-4 items-center">
            <MdSlideshow size={"1.9vw"} />
            <span>Reels</span>
          </button>
          <button className="flex gap-4 items-center">
            <IoChatbubbleEllipsesOutline size={"1.9vw"} />
            <span>Messages</span>
          </button>
          <button className="flex gap-4 items-center">
            <FaRegHeart size={"1.9vw"} />
            <span>Notifications</span>
          </button>
          <button className="flex gap-4 items-center">
            <FaRegSquarePlus size={"1.9vw"} />
            <span>Post</span>
          </button>
        </div>
       
        <div className="fixed bottom-4">
           <button className="flex items-center gap-4">
           <FaBars  size={'1.6vw'}/>
            <span>More</span>
           </button>
        </div>

      </div>
    </div>
  );
}

export default Sidenav;
