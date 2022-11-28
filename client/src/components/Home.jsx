import React, { useEffect } from "react";
import TypeWriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import { Link } from "react-scroll";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      name="home"
      className="flex items-center text-center justify-center h-screen mt-[-4rem] min-h-fit"
    >
      <div className="flex md:flex-row items-center sm:flex-col-reverse sm:mt-9 ">
        <div className="flex justify-center items-center text-center flex-col md:w-[50%] sm:w-[95%] sm:my-2 md:my-0 md:p-4 ">
          <div className="text-4xl md:text-3xl sm:text-2xl">
            <span className="md:mt-6 md:text-center">
              Hello, I'm{" "}
              <span className="font-semibold border-b-4 border-[#e43500] ">
                Ali
              </span>
            </span>
          </div>
          <div className="flex items-center flex-col mt-4 mb-6">
            <span className="lg:text-sm md:text-center">
              <h2 className="flex h-4 p-2 items-center justify-center text-4xl font-Courgette px-3 sm:text-xl md:text-3xl sm:p-8">
                <TypeWriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Front End Developer 💻",
                      "React Developer 🌐",
                      "React Native Developer 📱",
                      "Jr. Full Stack Developer 😎",
                    ],
                  }}
                />
              </h2>
            </span>
            <span className="md:text-xl mt-[5px] sm:text-base md:w-[75%] sm:w-[50%] ">
              Knack of building web applications with React and mobile
              applications with React Native.
            </span>
          </div>
          <button className="flex items-center justify-evenly font-semibold px-2 py-3 md:w-[30%] sm:w-[50%] border-2 rounded-lg hover:bg-[#e43500] group">
            <Link to="projects" smooth={true} duration={800} className="flex items-center ">
              View Projects
            <span className="group-hover:rotate-90 duration-200 ml-2">
              <FaArrowRight />
            </span>
            </Link>
          </button>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background hover:scale-[1.05] transition-all duration-[0.7s] ease-out"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
