import React from "react";
import AnimationLottie from "../Animation";
import experience from "../../Lottie/development.json";
import {Zoom} from "react-awesome-reveal";
import WordAnimation from "../AnimatedLetters";
export default function About() {
  return (
    <div className="text-white">
      {" "}
      <div className="text-white bg-[#252525] ">
        <div className="grid lg:grid-cols-2  md:grid-cols-1  sm:grid-cols-1 h-screen   ">
          <div className=" flex justify-center items-center  order-2 lg:order-1 p-4">
            <div className="flex flex-col  lg:mt-0 -mt-12 justify-center lg:items-start lg:w-[600px]   items-center">
            <span  className="tagss " >&lt;body&gt;</span>
            <div  className="flex flex-col justify-around items-around">

            <span  className="tagss mt-5 " >&lt;h1&gt;</span>
             
              <h1 className="lg:mt-5 -mt-12 font-bold lg:text-7xl text-[#00ff7f] text-4xl m-[20px]">
                <WordAnimation word="About US" animated="animated" />
              </h1>
              <span  className="tagss mt-5" >&lt;/h1&gt;</span>
            </div>  


              <p className="lg:text-xl sm:text-base mt-5 p-2">
                <WordAnimation
                  word=" I'm a Computer Science Undergrad student at Indian Institute of
                Information Technology and Management, Gwalior."
                  animated="animated"
                />
              </p>
              <p className="lg:text-xl sm:text-base mt-5 p-2">
                <WordAnimation
                  word="I'm a very ambitious Full stack developer. I love Automating
                tasks. Also experienced with Natural Language Processing,
                Computer Vision."
                  animated="animated"
                />
              </p>
      <span  className="tagss mt-5" >&lt;/body&gt;</span>
            </div>
          </div>

            <div className=" flex justify-center items-center  order-1 lg:order-2">
          <Zoom direction="right" >
              {/* <img
              src="/logo.png"
              className="w-60 h-60 lg:w-[800px] lg:h-[400px] "
              alt=""
            /> */}
              <div className=" flex justify-center items-center p-8">
     <AnimationLottie animationPath={experience} width={"50%"} />

              </div>
          </Zoom>
            </div>
        </div>
      </div>

    </div>
  );
}
