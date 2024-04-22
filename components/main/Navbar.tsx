"use client"

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import StarsCanvas from "./StarBackground";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${open ? "opened" : "closed"} z-[100] flex flex-col w-screen h-screen fixed inset-0  bg-black`}>
        <StarsCanvas />
        <div className="flex  flex-row-reverse px-[60px]">
          <button className="aspect-square h-[65px] " onClick={() => setOpen(false)}>
            <div className="h-full w-full p-4 px-3 flex flex-col justify-center gap-[6px]">
              <div className="w-full h-1 rounded-md bg-white"></div>
              <div className="w-full h-1 rounded-md bg-white"></div>
              <div className="w-full h-1 rounded-md bg-white"></div>
            </div>
          </button>
        </div>
        <div className="flex flex-col justify-center gap-4 flex-1 text-3xl text-white text-center">
          <a onClick={() => setOpen(false)} href="#about-me" className=" cursor-pointer">
            About me
          </a>
          <a onClick={() => setOpen(false)} href="#skills" className=" cursor-pointer">
            Skills
          </a>
          <a onClick={() => setOpen(false)} href="#projects" className=" cursor-pointer">
            Projects
          </a>
        </div>
      </div>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full hidden md:flex flex-row items-center justify-between m-auto px-[10px]">
          <div className="flex gap-2 items-end">
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

          <div className="hidden lg:flex gap-5 w-[150px] justify-end">
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

        <div className="w-full h-full md:hidden flex flex-row items-center justify-between m-auto px-[10px]">
          <div className="flex gap-2 items-end">
            <div className="font-bold flex w-[150px] text-gray-300 tracking-[0.5rem] items-center">
              Aztro
            </div>
          </div>

          <button className="h-full aspect-square" onClick={() => setOpen(true)}>
            <div className="h-full w-full p-4 px-3 flex flex-col justify-center gap-[6px]">
              <div className="w-full h-1 rounded-md bg-white"></div>
              <div className="w-full h-1 rounded-md bg-white"></div>
              <div className="w-full h-1 rounded-md bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
