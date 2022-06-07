import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            It&apos;s Not Just What You Build, It&apos;s How You Do It
          </p>
          <h1 className="py-4 text-gray 700">
            Hello, I&apos;m <span className="text-[#1D359D]">Eric</span>
          </h1>
          <h1 className="py-2 text-gray 700">
            I&apos;m a Front-End Web Developer.
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a passionate developer who loves coding and focuses on crafting
            great web experiences. I take great pride in not only being able to
            complete work to the high standard you&apos;d expect but also go the
            extra mile wherever possible.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/eric-capiz/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/ericcapiz"
              rel="noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
              </div>
            </a>
            <div
              onClick={() => (window.location = "mailto:ericcapiz@gmail.com")}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500"
            >
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
