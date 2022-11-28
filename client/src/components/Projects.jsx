/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { data } from "../data";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import AOS from "aos";

function Projects() {
  const [slideIndex, setSlideIndex] = useState(1);
  const { projectList } = data;

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  function nextSlider() {
    if (slideIndex === projectList.length) return setSlideIndex(1);
    setSlideIndex(slideIndex + 1);
  }
  function prevSlider() {
    console.log(slideIndex);
    if (slideIndex < 2) return setSlideIndex(projectList.length);
    setSlideIndex(slideIndex - 1);
  }

  function currentSlider(i) {
    setSlideIndex(i);
  }

  return (
    <div
      data-aos="zoom-in"
      name="projects"
      className="w-full h-screen md:my-[3rem] sm:my-[4rem] md:py-[10rem] sm:py-[15rem] min-h-fit"
    >
      <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto  w-full">
        <div>
          <h1 className="inline border-b-4 border-[#e43500] mb-4">Projects</h1>
        </div>
        <div className="flex w-full h-[20rem] p-2">
          <div className="slider-container">
            {projectList.map((item, index) => (
              <div
                key={index}
                className={
                  slideIndex === index + 1 ? "slide show-slider" : "slider"
                }
              >
                <img src={item.image} alt="" />
                <div className="slider-content-div opacity-0 hover:opacity-100 duration-500">
                  <h2 className="md:text-4xl sm:text-xl font-bold">
                    {item.name}
                  </h2>
                  <p className="md:text-xl sm:text-base font-semibold text-color text-center">
                    {item.technologies}
                  </p>
                  <div className="flex">
                    <a href={item.github} target="_blank">
                      <button
                        className={`text-center rounded-lg px-4 py-3 my-2
                 bg-white text-gray-700 font-bold text-lg ${
                   !item.demo ? "mx-auto" : "mx-2"
                 }`}
                      >
                        Code
                      </button>
                    </a>
                    {item.demo && (
                      <a href={item.demo} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
               bg-white text-gray-700 font-bold text-lg"
                        >
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="next-btn" onClick={nextSlider}>
              <FaChevronCircleRight />
            </div>
            <div className="prev-btn" onClick={prevSlider}>
              <FaChevronCircleLeft />
            </div>
            <div className="lines">
              {projectList.map((item, i) => (
                <span
                  key={i}
                  className={
                    slideIndex === i + 1 ? "line slider-active" : "line"
                  }
                  onClick={() => currentSlider(i + 1)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
