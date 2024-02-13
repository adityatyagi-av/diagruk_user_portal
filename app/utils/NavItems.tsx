import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

type Props = {
  activeItem: number;
  isMobile: boolean;
};
export const navItemsData = [
  { name: "Home", url: "/" },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Contact Us",
    url: "/contactus",
  },
];

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "text-[crimson]"
                    : " text-black"
                } text-[18px] px-4 font-Poppins font-[400]`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="md:hidden mt-5">
          <Sheet>
            <SheetTrigger className="mb-4 mr-2"> <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer  text-black"
                /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4">Quality Veda</SheetTitle>
              </SheetHeader>
              <nav className="flex items-center justify-center flex-col gap-7">

              
              {navItemsData&&navItemsData.map((item,index)=>(
                <Link href={`${item.url}`} key={index} passHref>
                <span
                  className={`${
                    activeItem === index ? "text-[crimson]" : "tex-black"
                  } text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
              ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};
export default NavItems;
