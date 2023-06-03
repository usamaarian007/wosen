import React, { Fragment } from "react";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import Fade from "react-reveal/Fade";
import {GrUserWorker} from "react-icons/gr"
import { FaBookOpen } from "react-icons/fa";

export default function EducationCard() {
  const educationData = [
    {
      id: 1,
      institution: "AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH (AIUB)",
      course: "Bachelor of Computer Science",
      startYear: "2017",
      endYear: "Present",
    },
    {
      id: 2,
      institution: "SHAHMUKHDUM COLLEGE,RAJSHAHI",
      course: "Higher Secondary",
      startYear: " April 2014",
      endYear: " December 2016",
    },
    {
      id: 3,
      institution: "ASIAN SCHOOL & COLLEGE,NACHOLE",
      course: "Secondary School",
      startYear: "January 2009",
      endYear: "December 2013",
    },
  ];
  return (
    <div>
      {educationData?.map((elm, index) => {
        return (
          <Fragment key={index}>
            {/* </Fade> */}
            <div className="flex  mt-5 bg-[#1E2732] p-8 lg:w-[500px] w-full  rounded-2xl">
              <div className="h-16  w-16  flex justify-center items-center rounded-full ">
                <FaBookOpen className="h-10 w-10 text-white " />
              </div>
              <div className="ml-5">
                <p>
                  {elm?.startYear}-{elm?.endYear}
                </p>
                <h1>{elm?.course}</h1>
                <h1>{elm?.institution}</h1>
              </div>
            </div>
            {/* </Fade> */}
          </Fragment>
        );
      })}
    </div>
  );
}
