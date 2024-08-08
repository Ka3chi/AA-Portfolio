import React from "react"; 
import picture from "../../Assets/Aldrin-picture.png";
import { Button } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-0 m-0">
      {/* //Hero section */}
      <section className="flex h-[800px] w-full justify-center items-center">
        <div className="flex flex-row items-center justify-center h-[500px]">
          <div className="flex flex-col space-y-2 justify-center items-center">
            <Button className="btn-button"><FaLinkedin /></Button>
            <Button className="btn-button"><FaLinkedin /></Button>
            <Button className="btn-button"><FaLinkedin /></Button>
          </div>
          <div>
            <img src={picture} alt="profile" className="h-[400px] w-[400px]" />
          </div>
          <div className="flex flex-col w-[400px] space-y-3 justify-center items-center">
            <p className="text-[30px] p-0 m-0 w-full">
              Hi, I'm <span className="font-semibold">Aldrin John Almoradie</span>
            </p>
            <div className="text-[30px] text-wrap flex flex-row justify-start items-start">
              <p>I’m a</p>
              <span className="ml-2 text-[30px] font-semibold">
                <Typewriter
                  options={{
                    strings: ['Front End Developer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <p className="text-wrap text-[20px]">
              With my experience as a Web App Developer Intern, I am pursuing a career as a Frontend Developer with the goal of becoming a Full-Stack Developer.
            </p>
            <Button className="btn-button">Download CV</Button>
          </div>
        </div>
      </section>
      {/* //about me */}
      <section className="flex justify-center items-center p-0 m-0 w-full">
        <div className="flex justify-center items-center h-[800px] w-full bg-blue-gray-500">
          <div className="flex flex-row justify-center items-center">
                  <div>About Me</div>
                  <div>Description</div>
          </div>
        </div>
      </section>
    </div>
  );
};
