import React from "react"; 
import picture from "../../Assets/Aldrin-picture.png";
import { Button } from "@material-tailwind/react";
import { FaLinkedin, FaGithub, FaFacebook  } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { Contactme } from "./Contactme";

export const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center p-0 m-0">
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
              Hi, I&apos;m <span className="font-semibold">Aldrin John Almoradie</span>
            </p>
            <div className="text-[30px] text-wrap flex flex-row justify-start items-start ">
              <span>I&apos;m a</span>
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
              <p className="font-semibold text-[35px] flex justify-center z-0 ">About Me</p>
            </div>
            <div className="flex justify-center items-center w-[800px]">
              <p className="text-wrap font-thin text-[20px]">As a web developer, I thrive on exploring new technologies and uncovering innovative ways to solve problems. My passion for continuous learning drives me to consistently seek out opportunities to enhance my skills and broaden my expertise. I am deeply committed to staying current with industry trends and advancements, which fuels my eagerness to embrace new challenges and expand my knowledge in this ever-evolving field. Whether it&apos;s diving into a new programming language, mastering a framework, or refining my existing skills, I am always enthusiastic about pushing my boundaries and growing both personally and professionally.</p>
            </div>
          </div>
        </div>
        {/* //Experience and Education */}
      </section>
      {/* experience&education */}
      <section className="flex justify-center items-center p-0 m-0 w-full">
        <div className="flex flex-col justify-center items-center h-[800px] w-full">
          <div className="flex flex-col justify-center items-center bg-background1 h-[600px] w-[900px] rounded-lg">
            <div className="bg-blue-500 w-[45px] h-[45px] absolute top-[1975px] right-[640px]"></div>
            <div className="font-semibold text-[35px] flex justify-center z-0 ">Experience</div>
            <div className="flex flex-col justify-center items-center ">
              <span className="bg-gray-100 w-[300px] h-[40px] flex justify-center items-center font-semibold text-[20px] rounded-lg px-1">Web App Developer Intern</span>
              <p className="space-y-5">
                Bicol One Broadband Services Inc. <br />
                Taytay Rizal <br />
                Jan 22 2024 - April 13 2024
              </p>
              <br />   
              <span className="bg-gray-100 w-[300px] h-[40px] flex justify-center items-center font-semibold text-[20px] rounded-lg px-1">
              Duties and Responsibilities:
              </span>
              <p>
                Design and Development <br />
                Code and Debugging <br />
                QA Tester <br />
                User Management <br />
              </p>
            </div>
            <div className="bg-blue-500 w-[45px] h-[45px] absolute top-[2075px] right-[640px]"></div>
            <div className="font-bold text-[35px] flex justify-center z-0  ">Education</div>
            <div className="flex flex-col justify-center items-center">
              <p>
              University of Rizal System (URS) <br />
              Bachelor of Science in Information Technology <br />
              2020 - 2024
              </p>
            </div>
          </div>
        </div>
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
    </main>
  );
};
