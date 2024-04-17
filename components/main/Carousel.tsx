"use client";

import React, { useState, useEffect, useRef } from "react";

function Carousel({ projects }) {
  const scrollableDivRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number>(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (!intervalRef.current && !stopped) {
      intervalRef.current = setInterval(() => {
        console.log("Next");
        setIndex((i) => (i + 1) % projects.length);
      }, 3000);
    }

    if (stopped && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (scrollableDivRef.current) {
      const parent = scrollableDivRef.current as HTMLElement;
      const parentLeft = parent.getBoundingClientRect().width;
      parent.style.translate = `${-parentLeft * index}px`;
    }
    console.log("index: ", index);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [index, stopped]);

  return (
    <div className=" overflow-hidden rounded-lg">
      <div
        className=" w-full flex  transition-all duration-1000"
        ref={scrollableDivRef}
      >
        {projects.map((project) => (
          <div className="w-full flex-none relative">
            <div
              onMouseEnter={() => setStopped(true)}
              onMouseLeave={() => setStopped(false)}
              className=" absolute inset-0 hover:opacity-70 bg-black opacity-0 transition-opacity px-16 py-8"
            >
              <h1 className="text-center font-bold text-xl">{project.title}</h1>
              <p className="mt-4">{project.description}</p>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className=" object-cover h-[500px] w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4  justify-center mt-4">
        {projects.map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            className={` bg-white transition-all duration-500 h-2 rounded-full cursor-pointer ${
              i === index && !stopped
                ? "scale-[1.20]  carousel-button-load"
                : ""
            } ${stopped ? "w-2" : "w-16"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
