import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracing-widest mt-20 text-[#1D359D] ">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Becoming a web developer has always been my top choice regarding a
            career path. Creating web applications and watching them come to
            life is an incredible feeling. After spending time in retail/sales
            as well as being in the military, I decided to persue that dream.
            Now with every line of code & every component created, that dream
            comes true!
          </p>
          <p className="py-2 text-gray-600">
            It&apos;s the pixel perfect, experience I take pride in to ensure
            users are getting the most out of their experience. Between HTML,
            CSS, to React and JavaScript, while sprinkling in some Node.js,
            Express.js and MongoDB, I have a wide range of skills and abilities
            to build anything. As I like to say, it&apos;s not what you build,
            but how you build it!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              View My Latest Projects!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&w=500&q=60"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
