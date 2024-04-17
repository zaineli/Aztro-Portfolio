"use client";

import { useState } from "react";

import Carousel from "./Carousel";

function NewProjects() {
  const [tabIndex, setTabIndex] = useState(0);
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
      projects: uiProjects,
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
    <div className="w-full  bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-[65px] flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-full flex-1 flex flex-row items-center justify-center">
          <div className=" w-[500px] flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {tabs.map(({ title }, i) => (
              <button
                className={`cursor-pointer font-bold text-lg ${
                  i === tabIndex ? "text-[#7042f861]" : ""
                }`}
                onClick={() => setTabIndex(i)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-0 w-full text-white px-16">
        <p className="my-8">{tabs[tabIndex].description}</p>
        <Carousel projects={uiProjects} />
      </div>
    </div>
  );
}

export default NewProjects;
