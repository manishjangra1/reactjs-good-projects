import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import {
  BiCart,
  BiHelpCircle,
  BiSearch,
  BiShoppingBag,
  BiSolidOffer,
  BiUser,
} from "react-icons/bi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <BiShoppingBag />,
      name: "Swiggy Corporate",
    },
    {
      icon: <BiSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "NEW",
    },
    {
      icon: <BiHelpCircle />,
      name: "Help",
    },
    {
      icon: <BiUser />,
      name: "Sign In",
    },
    {
      icon: <BiCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        onClick={hideSideMenu}
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-3 shadow-md text-[#686b78] fixed top-0 left-0 right-0 bg-white z-50">
        <div className="max-w-[1200px] max-h-[80px] mx-auto flex items-center">
          <div className="w-[48.2px]">
            <img src="./images/swiggy_logo.png" className="w-full" alt="logo" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[#fc8019]">
              Siwani Bolan
            </span>{" "}
            Hisar, Haryana, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className=" font-bold inline text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className="hidden md:flex list-none gap-4 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return <li key={index} className="flex hover:text-[#fc8019] items-center gap-2">
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>;
            })}
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
