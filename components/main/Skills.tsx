"use client"

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React, { useEffect, useState } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {

  const [scale, setScale] = useState(1);

  useEffect(() => {

    const calculateScale = () => {
      setScale(window.innerWidth/1920)
    }

    window.addEventListener("resize", calculateScale);

    calculateScale();

    return () => window.removeEventListener("resize", calculateScale);

  }, [])

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden md:pb-80 py-8 md:py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap lg:mt-4 gap-3 lg:gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width*scale}
            height={image.height*scale}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap lg:mt-4 gap-3 lg:gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width*scale}
            height={image.height*scale}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap lg:mt-4 gap-3 lg:gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width*scale}
            height={image.height*scale}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap lg:mt-4 gap-3 lg:gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width*scale}
            height={image.height*scale}
            index={index}
          />
        ))}
      </div>
      {/* <div className="flex flex-row justify-around flex-wrap lg:mt-4 gap-3 lg:gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width*scale}
            height={image.height*scale}
            index={index}
          />
        ))}
      </div> */}

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
