"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import {HiOutlineUserCircle } from "react-icons/hi";
import NavItems from "../utils/NavItems";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header: FC<Props> = ({activeItem,open,setOpen}) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
    if(typeof window!=="undefined"){
        window.addEventListener("scroll",()=>{
            if(window.scrollY>80){
                setActive(true);
            }
            else{
                setActive(false);
            }
        })
    }
  return (
    <div className="w-full relative ">
      <div
        className={`${
          active
            ? " bg-gray-100  fixed top-0 left-0 w-full h-[80px] z-[80] border-b shadow-xl transition duration-500"
            : "w-full border-b h-[80px] z-[80]"
        } bg-color-red`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
            <div className="w-full h-[80px] flex items-center justify-between p-3">
               <div>
                <Link href={"/"} className="text-[24px] font-[500] text-black">
                  Quality Veda
                </Link>
                </div> 
                <div className="flex items-center">
                  <NavItems
                  activeItem={activeItem}
                  isMobile={true}
                  />
                  <HiOutlineUserCircle
                  size={28}
                  className="md:block cursor-pointer text-black"
                  onClick={() => setOpen(true)}
                />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
