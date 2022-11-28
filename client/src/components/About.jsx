import React, { useEffect } from "react";
import { FaGraduationCap, FaLaptopCode, FaIcons } from "react-icons/fa";
import "animate.css";
import { data } from "../data";
import AOS from "aos";
import $ from "jquery";

function About() {
  const { educationList, coursesList, interestsList } = data;

  const handleNavClick = () => {
    $(document).ready(() => {
      $(".indicator div").each((index) => {
        $(".indicator div").eq(index).click("click", function () {
          $(".indicator div").each((i) => {
            $(".indicator div")
              .eq(i)
              .removeClass("active animate__animated animate__flip");
          });

          $(".content div").each((i) => {
            $(".content div")
              .eq(i)
              .removeClass(
                "active animate__animated animate__slideInLeft"
              );
          });

          $(this.dataset.target).addClass(
            "active animate__animated animate__slideInLeft"
          );
          $(this).addClass("active animate__animated animate__flip");
        });
      });
    });
  };

  useEffect(() => {
    handleNavClick();
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      name="about"
      className="flex items-center justify-center flex-col w-full min-h-fit h-screen md:my-[3rem] sm:my-[10rem] md:py-[10rem] sm:py-[30rem]"
    >
      <h1 className="border-b-4 border-[#e43500] mb-4">About</h1>
      <div className="flex items-center flex-col">
        <div className="flex items-start">
          <h2 className="font-semibold text-2xl sm:text-center">
            Hi, I'm Ali Ulu. Nice to meet you!👋
          </h2>
        </div>
        <div className="flex flex-col md:w-[800px] md:h-[360px] items-center justify-center sm:w-[100%]">
          <div className="container">
            <div className="wrapper">
              <ul className="indicator">
                <div className="active" data-target="#education">
                  <span>
                    <FaGraduationCap />
                  </span>
                  Education
                </div>
                <div data-target="#courses">
                  <span>
                    <FaLaptopCode />
                  </span>
                  Courses
                </div>
                <div data-target="#interests">
                  <span>
                    <FaIcons />
                  </span>
                  Interests
                </div>
              </ul>
              <div className="content">
                <div className="active" id="education">
                  {educationList.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:my-[2rem] border-2 rounded-lg border-[#24263b] sm:mt-[5px]"
                    >
                      <div className="flex flex-row text-center justify-center my-2">
                        <h2>🟠{item.heading}</h2>
                        <span className=" text-base md:my-0 md:mx-1 sm:my-4 sm:mx-5 border-2 border-[#24263b] md:p-2 bg-[#24263b] text-gray-300 rounded-md">
                          {item.fromDate}-{item.toDate}
                        </span>
                      </div>
                      <h6 className="md:my-2 md:mx-2 md:text-left sm:text-center sm:my-0">
                        {item.subHeading}
                      </h6>
                    </div>
                  ))}
                </div>

                <div id="courses">
                  {coursesList.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center text-left p-2 md:my-[1rem] border-2 rounded-lg border-[#24263b] sm:my-[15px]"
                    >
                      <div className="flex flex-row md:text-left sm:text-center items-center my-1">
                        <h2>🟠{item.heading}</h2>
                        <span className="flex text-sm md:my-0 md:mx-2 sm:my-1 sm:mx-5 border-2 border-[#24263b] md:p-3 bg-[#24263b] text-gray-300 rounded-md">
                          {item.month}-<span>{item.date}</span>
                        </span>
                      </div>
                      <h6 className="md:my-2 md:mx-2 md:text-left sm:text-center sm:my-0">
                        {item.from} - {item.hours}
                      </h6>
                    </div>
                  ))}
                </div>
                <div id="interests">
                  {interestsList.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 md:my-[1rem] border-2 rounded-lg border-[#24263b] sm:mt-[5px]"
                    >
                      <ul className="flex md:mx-[5rem] items-center md:my-2">
                        <li>{item}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
