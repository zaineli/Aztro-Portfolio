import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <div className="flex gap-2 items-end">
            {/* <Image
              src="/NavLogo.png"
              alt="logo"
              width={24}
              height={24}
              className="cursor-pointer hover:animate-slowspin"
              /> */}

            <div className="font-bold hidden md:flex w-[150px] text-gray-300 tracking-[0.5rem] items-center">
                Aztro
            </div>
          </div>
        

        <div className="h-full flex-1 flex flex-row items-center justify-center">
          <div className=" w-[500px] flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex gap-5 w-[150px] justify-end">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
