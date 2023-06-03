import React, { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { FaTools } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Project from "../project/Project";
import Skills from "../skill/Skills";
import Education from "../education/Education";
import Loading from "../loading";

// import SoundBar from "../soundbar/AudioPlayer";
import Audioplayer from '../soundbar/AudioPlayer'
export default function Sidebar() {
  const [component, setComponents] = useState(<Home />);
  const [color, setColor] = useState("home");
  const [showDetails, setShowDetails] = useState(false);
  const [value, setValue] = useState("home");
  const [chome, setChome] = useState(false);


  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
   
  };




  const handleMouseEnter = (dta) => {
    setValue(dta)
    setShowDetails(true);
  };

  const handleMouseLeave = (dta) => {
    setValue(dta)

    setShowDetails(false);
  };
const fun=()=>{}

  let getComponent = (value) => {
    handleClick()

    setColor(value)
    if (value === "home"  ) {
      setComponents("")
      setComponents(<Home />);
    } else if (value === "education") {
      setComponents("")
      setComponents(<Education />);
    } else if (value === "about") {
      setComponents("")
      setComponents(<About />);
    } else if (value === "skill") {
      setComponents("")
      setComponents(<Skills />);
    } else if (value === "contact") {
      setComponents("")
      setComponents(<Contact />);
    } else if (value === "projects") {
      setComponents("")
      setComponents(<Project />);
    } else {
      <Home />;
    }
  };

  return (
    <>
             <Audioplayer />
        <div>
           <div className="bg-[#181818] flex flex-col  justify-between items-between h-screen  lg:w-[110px] w-[70px] fixed ">
        <div className="text-white flex justify-center items-center  mt-5">
          <img
            src="/logo.png"
            className="w-24 h-30 lg:w-[40px] lg:h-[40px] "
            alt=""
          />
        </div>
        <div className="text-white flex flex-col justify-between items-center h-60">
          
          
       <div>
            <h1 
           
            >
              {/* {
                showDetails && value === "home"? */}
              <AiTwotoneHome
               className={`text-2xl hover:text-yellow-300 ${showDetails && value === "home"?"block":"block"  }   cursor-pointer ${
                color &&  color === "home" ? 'text-yellow-300' : ''
                }`}
                onClick={() => 
                  getComponent("home")
                 
              }
              onMouseEnter={()=>handleMouseEnter("home")}
              />
              <p onMouseLeave={()=>handleMouseLeave("home")} className={`hidden ${!showDetails && value === "home"?"block":"block"  } group-hover:block text-yellow-300`} >Home</p>
              {/* :<p className={`hidden ${!showDetails && value === "home"?"block":"hidden"  } group-hover:block text-yellow-300`} >Home</p>
              } */}
            </h1>
            
          </div>
          <div>
            <h1
             onClick={() => getComponent("about")}
            >
              <HiUser
                className={`text-2xl cursor-pointer hover:text-yellow-300  ${ color === "about" ? "text-yellow-300" :"" }  `}
               
              />
            </h1>
          </div>
          <div>
            <h1>
              <FaTools
              className={`text-2xl cursor-pointer hover:text-yellow-300  ${ color === "skill" ? "text-yellow-300" :"" }`}
                onClick={() => getComponent("skill")}
              />
            </h1>
          </div>
          <div>
            <h1>
              <FaBookOpen
                 className={`text-2xl cursor-pointer hover:text-yellow-300  ${ color === "education" ? "text-yellow-300" :"" }`}

                onClick={() => getComponent("education")}
              />
            </h1>
          </div>
          <div>
            <h1>
              <LuContact
             className={`text-2xl cursor-pointer hover:text-yellow-300  ${ color === "contact" ? "text-yellow-300" :"" }`}

                onClick={() => getComponent("contact")}
              />
            </h1>
          </div>
          <div>
            <h1>
              <AiFillFolderOpen
                className={`text-2xl cursor-pointer hover:text-yellow-300  ${ color === "projects" ? "text-yellow-300" :"" }`}

                onClick={() => getComponent("projects")}
              />
            </h1>
          </div> 
        </div>
        <div className="text-white flex flex-col justify-between items-center h-28 mb-5">
          <div>
            <h1>
              <a href="linkedin.com"  target="_blank">
              <AiFillLinkedin className="text-2xl cursor-pointer   hover:text-yellow-300" />
              </a>
            </h1>
          </div>
          <div>
            <h1>
              <a href="twitter.com "  target="_blank">

              <AiFillTwitterSquare className="text-2xl cursor-pointer hover:text-yellow-300" />
              </a>
            </h1>
          </div>
          <div>
            <h1>
              <a href="facebook.com"  target="_blank">

              <AiFillFacebook className="text-2xl cursor-pointer hover:text-yellow-300" />
              </a>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 ">
        <div
          className="h-full   bg-black lg:col-span-1 col-span-2
        "
        ></div>

        <div className="bg-black w-full text-white lg:col-span-11 col-span-10 -z-1 " >
        {!loading &&
        <div>
          {component && component}
          </div>
          }
        </div>
      </div>
        </div>
      
     
      {loading && <Loading />}
    </>

  );
}
