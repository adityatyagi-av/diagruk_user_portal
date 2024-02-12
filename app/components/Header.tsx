"use client";
import React, { FC, useState } from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header: FC<Props> = (props) => {
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
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "fixed top-0 left-0 w-full h-[80px] z-[80] border-b shadow-xl transition duration-500"
            : "w-full border-b h-[80px] z-[80]"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
            <div className="w-full h-[80px] flex items-center justify-between p-3"></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
