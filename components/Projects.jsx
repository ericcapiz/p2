import React from "react";
import cryptoImg from "../public/assets/projects/c.png";
import lostImage from "../public/assets/projects/lostImage.png";
import foodImage from "../public/assets/projects/foodImage.png";
import zetaImage from "../public/assets/projects/zeta1Image.png";
import psiImage from "../public/assets/projects/psiImage.png";
import covidImage from "../public/assets/projects/covidImage.png";
import cakeImage from "../public/assets/projects/cakeImage.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px]  mx-auto px-2 py-16">
        <p className="text-xl tracking-widest mt-20 uppercase text-[#1D359D]">
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
            backgroundImg={lostImage}
            projectUrl="/lost"
            tech="Mongo, Express, React, Node"
          />
          <ProjectItem
            title="Food 4 Thought"
            backgroundImg={foodImage}
            projectUrl="/food"
            tech="React"
          />
          <ProjectItem
            title="Zeta Films"
            backgroundImg={zetaImage}
            projectUrl="/zeta"
            tech="React"
          />
          <ProjectItem
            title="Psi Shop"
            tech="React, Commerce.js, Stripe"
            backgroundImg={psiImage}
            projectUrl="/psi"
          />
          <ProjectItem
            title="Covid Tracker"
            backgroundImg={covidImage}
            projectUrl="/covid"
            tech="React, Chart.js Leaflet"
          />
          <ProjectItem
            title="Nando's Cakes"
            backgroundImg={cakeImage}
            projectUrl="/cake"
            tech="React, Email.js Framer-Motion"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
