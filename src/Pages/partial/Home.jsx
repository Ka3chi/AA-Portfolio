import React from "react"; 
import { Button } from "@material-tailwind/react";
import { FaLinkedin, FaGithub, FaFacebook  } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { Contactme } from "./Contactme";
import picture from "../../Assets/Aldrin-picture.png";
import Aboutme from "../../Assets/aboutme.png"

export const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center p-0 m-0">

      {/* //Hero section */}
      <section className="flex lg:h-[800px] md:h-[1000px] w-full justify-center items-center">
        <div className="flex lg:flex-row md:flex-col sm:flex-col items-center justify-center h-[500px]">
          <div className="flex lg:flex-col md:flex-row justify-center items-center lg:space-y-5 md:space-y-5">
            <div className="flex justify-center items-center btn-button w-[50px] h-[50px] rounded-3xl">
            <a className=" justify-center items-center rounded-3xl mx-5" href="https://www.linkedin.com/in/aldrin-john-almoradie-41a50a2a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-[30px] w-[30px]" />
            </a>
            </div>
            <div className="flex justify-center items-center btn-button w-[50px] h-[50px] rounded-3xl">
            <a className="btn-button flex w-[50px] h-[50px] justify-center items-center rounded-3xl mx-5" href="https://www.facebook.com/AldrinJohnAlmoradie/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaFacebook className="h-[30px] w-[30px]"/>
            </a>
            </div>
            <div className="flex justify-center items-center btn-button w-[50px] h-[50px] rounded-3xl">
            <a className="btn-button flex w-[50px] h-[50px] justify-center items-center rounded-3xl mx-5" href="https://github.com/Ka3chi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaGithub className="h-[30px] w-[30px]"/>
            </a>
            </div>
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
        <div className="flex flex-row relative justify-center items-center h-[800px] w-full bg-gray-100 space-x-10">
        <div className=" h-[400px] w-[500px] flex justify-center items-center">
          <img src={ Aboutme } alt="aboutme" className=" rounded-lg"/>
        </div>
          <div className="flex flex-col justify-center items-center h-[500px] w-[900px] rounded-lg">
            <div className="flex relative justify-center items-center">
              <div className="bg-blue-500 w-[60px] h-[45px] absolute top-[4px] left-[100px] rounded-md"></div>
              <p className="font-semibold text-[35px] flex justify-center z-0 ">About Me</p>
            </div>
            <div className="flex justify-center items-center lg:w-[800px] md:w-[400px]">
              <p className="text-wrap font-thin text-[20px]">As a Web developer, I thrive on exploring new technologies and uncovering innovative ways to solve problems. My passion for continuous learning drives me to consistently seek out opportunities to enhance my skills and broaden my expertise. I am deeply committed to staying current with industry trends and advancements, which fuels my eagerness to embrace new challenges and expand my knowledge in this ever-evolving field. Whether it&apos;s diving into a new programming language, mastering a framework, or refining my existing skills, I am always enthusiastic about pushing my boundaries and growing both personally and professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* //Experience and Education */}
      <section className="grid justify-center items-center p-0 m-0 w-full">
        <div className="grid grid-col justify-center items-center h-[800px] w-full">
          <div className=" relative flex flex-col justify-center h-[600px] w-[900px] rounded-lg">
            <div className="bg-blue-500 w-[30px] h-[25px] absolute top-[15px] left-[355px] rounded-md"></div>
            <span className="font-semibold text-[35px] flex justify-center z-0 ">Experience</span>
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className="bg-gray-100 w-[300px] h-[40px] flex justify-center items-center font-semibold text-[20px] rounded-lg px-1">Web App Developer Intern
              </div>
              <p className="space-y- text-wrap">
                Bicol One Broadband Services Inc. <br />
                Taytay Rizal <br />
                Jan 22 2024 - April 13 2024 <br />
              </p>    
              <span className="bg-gray-100 w-[300px] h-[40px] flex justify-center items-center font-semibold text-[20px] rounded-lg px-1">
              Duties and Responsibilities:
              </span>
              <div className="flex justify-center items-center text-wrap text-left">
              <p className="space-y-5 text-wrap">
              Designed, developed, and maintained responsive websites.<br />
              Created user-friendly interfaces with a focus on accessibility <br />
              Implemented server-side logic and database connections. <br />
              Developed dashboards and managed user authentication systems. <br />
              Tested, debugged, and optimized code for performance and reliability. <br />
              </p>
              </div>

            </div>
            <div className="bg-blue-500 w-[45px] h-[45px] relative top-[100px] left-[640px]"></div>
            <div className="font-bold text-[35px] flex justify-center z-0  ">Education</div>
            <div className="flex justify-center items-center">
              <p className="space-y- text-wrap">
              University of Rizal System (URS) <br />
              Bachelor of Science in Information Technology <br />
              2020 - 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* //Tech stacks */}
      <section className="flex justify-center items-center p-0 m-0 w-full h-[800px] bg-gray-100">
      <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    class="w-full justify-center items-center inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
<ul class="flex items-center space-x-8 animate-infinite-scroll">
        <li><img src="./facebook.svg" alt="Facebook" class="max-w-none" /></li>
        <li><img src="./disney.svg" alt="Disney" class="max-w-none" /></li>
        <li><img src="./airbnb.svg" alt="Airbnb" class="max-w-none" /></li>
        <li><img src="./apple.svg" alt="Apple" class="max-w-none" /></li>
        <li><img src="./spark.svg" alt="Spark" class="max-w-none" /></li>
        <li><img src="./samsung.svg" alt="Samsung" class="max-w-none" /></li>
        <li><img src="./quora.svg" alt="Quora" class="max-w-none" /></li>
        <li><img src="./sass.svg" alt="Sass" class="max-w-none" /></li>
    </ul>
    <ul class="flex items-center space-x-8 animate-infinite-scroll absolute inset-0">
        <li><img src="./facebook.svg" alt="Facebook" class="max-w-none" /></li>
        <li><img src="./disney.svg" alt="Disney" class="max-w-none" /></li>
        <li><img src="./airbnb.svg" alt="Airbnb" class="max-w-none" /></li>
        <li><img src="./apple.svg" alt="Apple" class="max-w-none" /></li>
        <li><img src="./spark.svg" alt="Spark" class="max-w-none" /></li>
        <li><img src="./samsung.svg" alt="Samsung" class="max-w-none" /></li>
        <li><img src="./quora.svg" alt="Quora" class="max-w-none" /></li>
        <li><img src="./sass.svg" alt="Sass" class="max-w-none" /></li>
    </ul>                
</div>
      </section>

      {/* //Projects */}
      <section className="flex justify-center items-center p-0 m-0 w-full bg-light-blue-300">
        <div className="flex justify-center items-center h-[800px] w-full">

          Here is the Projects section
          
        </div>
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
