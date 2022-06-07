import React from "react";
import cryptoImg from "/public/assets/projects/c.png";
import lost from "/public/assets/projects/lost.png";
import food from "/public/assets/projects/food.png";
import zeta from "/public/assets/projects/zeta1.png";
import psi from "/public/assets/projects/psi.png";
import covid from "/public/assets/projects/covid.png";
import cake from "/public/assets/projects/cake.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl mt-20 tracking-widest uppercase text-[#1D359D]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Crypto Info"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React, Tailwind, Firebase"
          />
          <ProjectItem
            title="Lost My Stuff"
            backgroundImg={lost}
            projectUrl="/lost"
            tech="Mongo, Express, React, Node"
          />
          <ProjectItem
            title="Food 4 Thought"
            backgroundImg={food}
            projectUrl="/food"
            tech="React"
          />
          <ProjectItem
            title="Zeta Films"
            backgroundImg={zeta}
            projectUrl="/zeta"
            tech="React"
          />
          <ProjectItem
            title="Psi Shop"
            tech="React, Commerce.js, Stripe"
            backgroundImg={psi}
            projectUrl="/psi"
          />
          <ProjectItem
            title="Covid Tracker"
            backgroundImg={covid}
            projectUrl="/covid"
            tech="React, Chart.js Leaflet"
          />
          <ProjectItem
            title="Nando's Cakes"
            backgroundImg={cake}
            projectUrl="/cake"
            tech="React, Email.js Framer-Motion"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
