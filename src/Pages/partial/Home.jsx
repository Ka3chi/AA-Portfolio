import React from "react"; 
import profile from "../../Assets/profile.png"
import { Button } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
      <div className="flex justify-center items-center bg-blue-gray-100 p-0 m-0">
          {/* hero section */}
          <section className="flex h-[800px] w-full justify-center items-center">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col space-y-2">
                <Button><FaLinkedin /></Button>
                <Button><FaLinkedin /></Button>
                <Button><FaLinkedin /></Button>
              </div>
              <div className="h-[400px] w-[500px]">
                <img src={ profile} alt="profile" />
              </div>
              <div className="flex flex-col w-[400px] space-y-3">
                <p className="text-[30px] text-wrap">Hi, I'm <span className="text-bold">Aldrin John Almoradie</span></p>
                <p className="text-[30px]">I’m <span className="text-bold text-wrap"></span>Front End Developer | Web Developer </p>
                <p className="text-wrap">With my experience as a Web App Developer Intern, I am pursuing a caree as a Frontend Developer with the goal of becoming a Full-Stack Developer</p>
                <Button>Download CV</Button>
              </div>
            </div>
          </section>
      </div>
  );
};