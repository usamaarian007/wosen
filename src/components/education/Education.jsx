import React from "react";
import AnimationLottie from "../Animation";
import education from "../../Lottie/education.json";
import EducationCard from "./EducationCard";
import {Zoom} from 'react-awesome-reveal';

export default function Education() {
  return (
  
    <div id="#Education">
      <div
        className="flex justify-center"
        // style={{ background: Color.secondary }}
      >
        <div className="container mt-5   ">
          <h1
            className="text-center font-medium text-4xl mt-[60px] "
            // style={{ color: Color.primary }}
          >
            Education
          </h1>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mb-5 mt-[10px]">
          <div className="p-4  sm:ml-0 lg:ml-[50px] order-2 lg:order-1 ">
              <EducationCard />
            </div>
            {/* </Fade> */}
            <div className=" flex justify-center items-center p-8 order-1 lg:order-2">
            <Zoom direction="right"  >
              <AnimationLottie animationPath={education} width={"50%"} />
            </Zoom>
            </div>
            {/* </Fade> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
