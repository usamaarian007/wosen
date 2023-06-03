import React from "react";
import AnimationLottie from "../Animation";
import experience from "../../Lottie/development.json";
import {Zoom} from "react-awesome-reveal";
import WordAnimation from "../AnimatedLetters";
import WordCloud from "./wordcloud";
export default function Skill() {
  return (
    
    <div className="text-white">
      <div className="text-white">
        {" "}
        <div className="text-white bg-[#252525] ">
          <div className="grid lg:grid-cols-2  md:grid-cols-1  sm:grid-cols-1 h-screen   ">
            <div className=" flex justify-center items-center order-2 lg:order-1 p-4">
              <div className="flex flex-col justify-center lg:items-start lg:w-[600px]   items-center">
              <span  className="tagss " >&lt;body&gt;</span>
            <span  className="tagss mt-5 " >&lt;h1&gt;</span>
                <h1 className="lg:mt-0 -mt-[50px] font-bold lg:text-7xl text-[#00ff7f] text-4xl ">
                  <WordAnimation word="Skills" animated="animated" />
                </h1>
                <span  className="tagss mt-5" >&lt;/h1&gt;</span>

                <p className="lg:text-xl sm:text-base mt-5 p-2">
                  <WordAnimation
                    word="I love to keep a variety of tools in my tech stack. I also
                  make sure to be pro at using one tool before moving on to the
                  next. I keep myself up to date with the latest technologies
                  around."
                    animated="animated"
                  />
                </p>
                <p className="lg:text-xl sm:text-base mt-5 p-2">
                  <WordAnimation
                    word="Looking for a role in a company with the opportunity to work
                  with the latest technologies on challenging and diverse
                  projects."
                    animated="animated"
                  />
                </p>
      <span  className="tagss mt-5" >&lt;/body&gt;</span>
              </div>

            </div>
            
              {/* <div className=" flex justify-center items-center  "> */}
              <div className=" flex justify-center items-center order-1 lg:order-2">
            <Zoom  direction="right" >
              <div className="tagcloud-wrap">
          <WordCloud />
        </div>
            </Zoom>
              </div> 
          </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
