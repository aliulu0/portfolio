import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "aos/dist/aos.css";
import BackToUpButton from "./BackToUpButton";

function ProfileContainer() {
  return (
    <div className="overflow-x-hidden">
      {/* navbar */}
      <NavBar />

      {/* home */}
      <Home />

      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* projects */}
      <Projects />

      {/* contact me */}
      <Contact />

      {/* backToUp button */}
      <BackToUpButton />
    </div>
  );
}

export default ProfileContainer;
