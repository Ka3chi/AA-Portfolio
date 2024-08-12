import React from "react"; 
import picture from "../../Assets/Aldrin-picture.png";
import { Button } from "@material-tailwind/react";
import { FaLinkedin, FaGithub, FaFacebook  } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { Contactme } from "./Contactme";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-0 m-0">
      {/* //Hero section */}
      <section className="flex h-[800px] w-full justify-center items-center">
        <div className="flex flex-row items-center justify-start h-[500px]">
          <div className="flex flex-col space-y-5 justify-center items-center">
            <a className="btn-button flex w-[50px] h-[50px] justify-center items-center rounded-3xl" href="https://www.linkedin.com/in/aldrin-john-almoradie-41a50a2a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-[30px] w-[30px]" />
            </a>
            <a className="btn-button flex w-[50px] h-[50px] justify-center items-center rounded-3xl" href="https://www.facebook.com/AldrinJohnAlmoradie/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaFacebook className="h-[30px] w-[30px]"/>
            </a>
            <a className="btn-button flex w-[50px] h-[50px] justify-center items-center rounded-3xl" href="https://github.com/Ka3chi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaGithub className="h-[30px] w-[30px]"/>
            </a>
          </div>
          <div>
            <img src={picture} alt="profile" className="h-[400px] w-[390px]" />
          </div>
          <div className="flex flex-col w-[500px] space-y-3">
            <p className="text-[30px] p-0 m-0 w-full justify-start items-start ">
              Hi, I'm <span className="font-semibold">Aldrin John Almoradie</span>
            </p>
            <div className="text-[30px] text-wrap flex flex-row justify-start items-start ">
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
            <p className="text-wrap text-[20px] ">
            With my experience as a Web App Developer Intern, I aim to build a career in Information Technology, where I can leverage my expertise, apply my current skills, and grow further through continuous learning and hands-on experience.
            </p>
            <div className="flex justify-center items-center">
            <Button className="btn-button hover:bg-white font-extrabold text-[15px] ">Download CV</Button>
            </div>
          </div>
        </div>
      </section>
      {/* //about me */}
      <section className="flex justify-center items-center p-0 m-0 w-full">
        <div className="flex justify-center items-center h-[800px] w-full bg-background1">
          <div className="flex flex-col justify-center items-center bg-white h-[500px] w-[900px] rounded-lg">
            <div className="flex justify-center items-center">
              <div className="bg-blue-500 w-[45px] h-[45px] absolute top-[1175px] right-[640px]"></div>
              <p className="font-semibold text-[50px] flex justify-center flex-wrap z-0 ">About Me</p>
            </div>
            <div className="flex justify-center items-center w-[800px]">
              <p className="text-wrap font-thin text-[20px]">I am a web developer who enjoys exploring and discovering new things. I am passionate about learning and continuously improving my skills. I am always eager to learn new technologies and expand my knowledge.</p>
            </div>
          </div>
        </div>
        {/* //Experience and Education */}
      </section>
      <section className="flex justify-center items-center p-0 m-0 w-full bg-green-600">
        <div className="flex justify-center items-center h-[800px] w-full">Experience and education</div>
      </section>
      {/* //Projects */}
      <section className="flex justify-center items-center p-0 m-0 w-full bg-light-blue-300">
        <div className="flex justify-center items-center h-[800px] w-full">Projects</div>
      </section>
      {/* //Contact Me */}
      <section className="flex justify-center items-center p-0 m-0 w-full">
        <div className="flex justify-center items-center h-[800px] w-full">
          <Contactme />
        </div>
      </section>
    </div>
  );
};
