import React, { useEffect } from "react";
import { data } from "../data";
import AOS from "aos";

function Skills() {
  const { skillsList } = data;
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      name="skills"
      className="w-full h-screen md:my-[3rem] sm:my-[4rem] md:py-[28rem] sm:py-[30rem]"
    >
      <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto p-4 w-full h-full">
        <div>
          <h1 className="inline border-b-4 border-[#e43500] mb-4">Skills</h1>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {skillsList.map((item, index) => (
            <div
              key={index}
              className="bg-[#242643] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-2 rounded-lg"
            >
              <img
                className="bg-gray-200 p-2 w-20 mx-auto rounded-3xl"
                src={item.image}
                alt="html"
              />
              <p className="my-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
