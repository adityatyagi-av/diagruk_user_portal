"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import {HiOutlineUserCircle } from "react-icons/hi";
import NavItems from "../utils/NavItems";
import Modal from "../utils/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "./Auth/Verification";


type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route:string;
  setRoute:  (route: string)=>void;
};

const Header: FC<Props> = ({activeItem,open,setOpen,route,setRoute}) => {
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
      {
        route==="Login"&&(
          <>
          {open&&(
            <Modal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              modalName="Login"
              modalDesc="Login now to your account"
              activeItem={activeItem}
              component={Login}
            />
          )}
          </>
        )
      }
      {
        route==="Sign-Up"&&(
          <>
          {open&&(
            <Modal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              modalName="SignUp"
              modalDesc="SignUp to form a new account. It's free!"
              activeItem={activeItem}
              component={SignUp}
            />
          )}
          </>
        )
      }
      {
        route==="Verification"&&(
          <>
          {open&&(
            <Modal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              modalName="Verification"
              modalDesc="Please enter the code to activate your account"
              activeItem={activeItem}
              component={Verification}
            />
          )}
          </>
        )
      }
      
    </div>
  );
};
export default Header;
