import React, { useState } from "react";
import {Zoom,Rotate} from "react-awesome-reveal";
import WordAnimation from "../AnimatedLetters";
import Partical from "../partical";
import { Link } from "react-router-dom";
import Contact from "../contact/Contact";
import Roll from 'react-awesome-reveal';
export default function Home() {
  const [show,setShow]=useState(false)
  return (
    <>
    {
      !show &&
      <div className="text-white bg-[#252525] ">
      <div className="grid lg:grid-cols-2  md:grid-cols-1  sm:grid-cols-1 h-screen   ">
        {/* <Zoom left> */}
        <div className=" flex justify-center items-center  order-2 lg:order-1 p-4 ">
          <div className="flex flex-col justify-center lg:items-start  items-center">
            <span  className="tagss " >&lt;body&gt;</span>

          
            <h1 className=" font-bold lg:text-4xl text-4xl l mt-5 text-[#00ff7f] ">
              <WordAnimation word="Hi," animated="animated" />
            </h1>
            <span  className="tagss mt-5 " >&lt;h1&gt;</span>

            <h1 className="mt-5 font-bold lg:text-5xl  text-4xl ">
              <WordAnimation word="I,m" animated="animated" />
            </h1>
            <Rotate direction="top-left">
            <h1 className="mt-5 font-bold lg:text-5xl -4xl dd">
              <WordAnimation word="Blockchain Developer" animated="animated" />
            </h1>
            </Rotate>
            <h1 className="mt-5 font-bold lg:text-5xl  text-4xl text-animation">
              <WordAnimation word="Ethical Hacker" animated="animated" />
            </h1>
            <Zoom direction="left">
            <h2 className="mt-5 font-bold lg:text-2xl  text-lg ">
              <WordAnimation
                word="Full Stack Blockchain Developer"
                animated="animated"
              />
            </h2>
            </Zoom>
            <span  className="tagss mt-5" >&lt;/h1&gt;</span>

            {/* <Link  to="/contact"> */}
            <Zoom direction="right">
            <div className="flex justify-between mt-3 w-[300px]" >

            <button onClick={()=>setShow(true)}  class="bg-transparent  bottom-[110px] mt-5 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Contact me
            </button>
            <button onClick={()=>setShow(true)}  class="bg-transparent  bottom-[110px] mt-5 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            <a href="/WOSEN NEGUSSIE RESUME 7.docx" download>My Resume</a>

            </button>
            </div>
            </Zoom>
            {/* </Link> */}

            <span  className="tagss mt-5" >&lt;/body&gt;</span>


    
          </div>
        </div>
        {/* </Zoom> */}
          <div className=" flex justify-center items-center  order-1 lg:order-2">
        <Zoom >
            <div  className="transition-all" >

            <img
              src="/logo.png"
              className="w-40 h-40 lg:w-[800px] lg:h-[400px] "
              alt=""
            />
            </div>
        </Zoom>
          </div>
      </div>
    </div>
    }
    
    {
      show &&
      <Contact />
    }

    </>
  );
}
