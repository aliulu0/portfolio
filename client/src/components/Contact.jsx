import React, { useState, useEffect } from "react";
import TypeWriter from "typewriter-effect";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";
import { toast } from "react-toastify";
import "animate.css";
import AOS from "aos";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/contact", {
        name,
        email,
        message,
      });
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setLoading(false);
        setError(true);
        setIsSuccess(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setLoading(false);
        setError(false);
        setIsSuccess(true);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-aos="zoom-in"
      name="contact"
      className="w-full pb-[5rem] justify-center items-center p-4 md:mt-[15rem] min-h-fit"
    >
      <div className="flex flex-col max-w-[680px] w-full text-center mx-auto">
        <div className="pb-8">
          <h1 className="inline border-b-4 border-[#e43500] mb-4">Contact</h1>
        </div>
        <div className="flex flex-col shadow-lg shadow-[#e43500]">
          <div className="flex flex-col items-left">
            <h2 className="flex h-4 flex-col p-2 items-center justify-center text-4xl font-Courgette px-3 sm:text-xl md:text-3xl sm:p-8">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Contact me 📨",
                    "Get in touch me 📧",
                    "for job done 🤝",
                  ],
                }}
              />
            </h2>
          </div>
          <h2 className="text-lg text-[#ff5f00] font-OpenSans">{banner}</h2>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center justify-center"
          >
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name please!"
              className="my-2 px-4 py-2 md:w-[60%] sm:w-[90%] rounded-lg text-[#24263b] text-base font-semibold"
            />
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email please!"
              className="my-2 px-4 py-2 md:w-[60%] sm:w-[90%] rounded-lg text-[#24263b] text-base font-semibold"
            />
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message please!"
              className="my-2 px-4 py-2 md:w-[60%] sm:w-[90%] rounded-lg text-[#24263b] text-base font-semibold resize-none"
            />
            <button
              disabled={loading || isSuccess ? true : false}
              type="submit"
              className={` md:w-[20%] sm:w-[35%] text-center justify-center
               flex items-center shadow-lg  shadow-[#e43900] font-semibold text-lg 
               md:px-8 py-2 sm:px-6 rounded-lg my-2 mx-2
               ${
                 loading || isSuccess
                   ? "bg-gray-700 text-gray-300"
                   : "bg-gray-200 text-[#24263b]"
               }`}
            >
              {loading ? (
                <div className="flex">
                  Send
                  <span className="flex animate__animated animate__fadeOutTopRight animate__infinite animate__slow text-2xl">
                    <FaPaperPlane className="mx-2 mb-1" />
                  </span>
                </div>
              ) : error ? (
                <div className="flex">
                  Retry <TfiReload className="mx-2 my-auto animate-spin-once" />
                </div>
              ) : isSuccess ? (
                <div className="flex">
                  Sended{" "}
                  <FaCheck className="mx-2 my-auto animate__animated animate__tada" />
                </div>
              ) : (
                <div className="flex">
                  Send <FaPaperPlane className="mx-2 mb-1" />
                </div>
              )}
            </button>
          </form>
          <div className="flex my-2 md:text-3xl sm:text-2xl mx-auto">
            <a
              href="https://www.linkedin.com/in/ali-ulu"
              target=""
              className="mx-2 hover:scale-125 hover:bg-[#e43900] duration-300 my-4 rounded-lg "
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/aliulu0"
              target=""
              className="mx-2 hover:scale-125 hover:bg-[#e43900] duration-300 my-4 rounded-lg "
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://instagram.com/ali.ulu_"
              target=""
              className="mx-2 hover:scale-125 hover:bg-[#e43900] duration-300 my-4 rounded-lg "
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://twitter.com/alii_uluu"
              target=""
              className="mx-2 hover:scale-125 hover:bg-[#e43900] duration-300 my-4 rounded-lg "
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </div>
      <h4 className="text-center mt-[5rem] text-lg text-[#ff5f00] 
    font-semibold mx-auto justify-center items-center p-3">©️ 2022 Ali Ulu</h4>
    </div>
  );
}

export default Contact;
