"use client";

import { useState } from "react";

import Carousel from "./Carousel";

function NewProjects() {
  const [tabIndex, setTabIndex] = useState(0);

  const webProjects = [
    {
      title: "Some of the pyhton projects",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
  ];

  const uiProjects = [
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
  ];

  const pythonProjects = [
    {
      title: "Some of the pyhton projects",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
  ];

  const tabs = [
    {
      title: "Web Work",
      description:
        " Web been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.",
      projects: webProjects,
    },

    {
      title: "Python Work",
      description:
        "We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.",
      projects: pythonProjects,
    },
    {
      title: "UI/UX Work",
      description:
        "UI  been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.",
      projects: uiProjects,
    },
  ];

  return (
    <div id="projects" className="w-full bg-[#03001417] px-4 md:px-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  text-center">
        My Projects
      </h1> 
      <div className="w-full h-[65px] hidden sm:flex flex-row items-center justify-between m-auto px-[20px] mt-3 mb-3">
        <div className="h-full flex-1 flex flex-row items-center justify-center">
          <div className=" w-[500px] flex items-center justify-between h-auto border border-[#5A83E6] bg-[#0300145e] mr-[15px] px-[10px] py-[10px] rounded-full  text-gray-200">
            {tabs.map(({ title }, i) => (
              <button
                className={`cursor-pointer font-bold text-lg ${
                  i === tabIndex ? "text-[#5A83E6]" : ""
                }`}
                onClick={() => setTabIndex(i)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden sm:block mt-0 w-full text-white px-8 md:px-16">
        <Carousel projects={uiProjects} />
      </div>

      <div className="flex flex-col gap-8 sm:hidden w-full text-white px-8 md:px-16 my-4">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Web Work</h1>
          <Carousel projects={webProjects} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">UI/UX Work</h1>
          <Carousel projects={uiProjects} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Python Work</h1>
          <Carousel projects={pythonProjects} />
        </div>
      </div>
    </div>
  );
}

export default NewProjects;
