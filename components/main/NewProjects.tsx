"use client";

import { useState } from "react";

import Carousel from "./Carousel";

function NewProjects() {
  const [tabIndex, setTabIndex] = useState(0);

  const webProjects = [
    {
      title: "Shirt Studio",
      link : "https://github.com/zaineli/3D-Animated-Website",
      description: `In this project, I integrated Generative AI with ThreeJS for 3D model customization. Leveraging Valtio for robust state management, I employed ThreeJS and Framer Motion for dynamic animations. Additionally, I utilized the StableDiffusion API for generating images based on prompts, enhancing the project's creative capabilities.`,
      image: "/ShirtMaker.png",
    },
    {
      title: "NustFruta E-Commerce Website",
      link : "https://nust-fruta.vercel.app",
      description: `A Full-Stack Ecommerce Website for a local fruit-selling business in NUST University during Ramadan. Used NextJS and MongoDB as tech stack for the project and shadcn and tailwind for consistent and professional design. Hostelites could place orders scheduled for any date in the future. The vendors would get a sorted list of orders, the inventory needed for fulfilling a day's order, keep account of all orders fulfilled and manage limited stock.`,
      image: "/nustfruta.jpg",
    },
    {
      title: "AlgoScribe",
      link : "https://abbas--algoscribex.netlify.app",
      description: `Bringing algorithms to life, AlgoScribe is my full-stack brainchild. This interactive platform visualizes complex concepts through captivating animations, built with React, Scss, and Firebase. Users of all levels can explore various algorithms and their inner workings, making learning DSA engaging and unforgettable.You can use to preview website -- email: "h@gmail.com" | pass:"123456"`,
      image: "/algoscribe.png",
    },
    {
      title: "Games Website",
      link : "https://games-tahashah.netlify.app",
      description: `This website is a collection of classic games all in one place. With Live communication between players through in-built chat. The games include Quaridor, a popular board game about two players trying to reach opposite ends of the board while also preventing the opponent(s). SuperTicToe is an evolution over the normal game where players have to win the inner boards in order to ultimately win the super board. ConnectK is an extension of Connect4 where players can choose the dimension and win condition of the board.`,
      image: "/games.jpg",
    },
  ];

  const uiProjects = [
    {
      title: "Brainwave",
      description: `I developed a visually captivating website for a Generative AI Company, leveraging React, Tailwind CSS, and modern web tools to align with contemporary design trends and enhance user experience.`,
      link:"https://brainwavve.netlify.app/",
      image: "/brainwave.png",
    },
    {
      title: "Reviv Style",
      description: `From sketches to shop floor, I stitched together a dynamic fashion website with Gsap flair, launching a startup’s
      style.This keeps the fashion theme, highlights React and Gsap skills, and adds a little punch with the ”stitched
      together” metaphor. I hope it’s the perfect fit!`,
      image: "/revive.png",
      link:"https://zaineli.github.io/RevivStyle/"
    },
    {
      title: "Inventory Dashboard.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      link: "https://inventoryxdashboard.netlify.app",
      image: "/inv.png",
    },
    {
      title: "Magma Designer",
      description: `Constructed an Awards website highlighting proficiency in implementing onScroll animations and advanced canvas concepts.`,
      image: "/magma2.png",
      link:"https://magmaxdesign.netlify.app/"
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
      title: "UI/UX Work",
      description:
        "UI  been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.",
      projects: uiProjects,
    },
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
        <Carousel projects={tabs[tabIndex].projects} />
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
