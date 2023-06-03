import React from "react";
import WordAnimation from "../AnimatedLetters";
export default function Project() {
  return (
    
    <div>
      <div
        className="flex justify-center "
        // style={{ background: Color.secondary }}
      >
        <div className="container mt-5    ">
          <h1
            className="text-center font-medium text-4xl  mt-[50px]"
            // style={{ color: Color.primary }}
          >
            <WordAnimation word="Projects" animated="animated" />
          </h1>
          <div className="grid lg:grid-cols-3 gap-12 grid-cols-1 m-4 mt-[90px]">



          <div
              className="text-center bg-[#0C0B33] p-8 rounded-xl  h-62 "
              // style={{ color: Color.tertiary }}
            >
              <h1 className="font-semibold text-2xl">Dictionaryish</h1>
              <div className=" mt-10  flex justify-center items-center">
                <img src="six.svg" width={180} height={180} alt="pic" />
              </div>
            </div>
            {/* </Fade> */}
            {/* </Fade> */}
            <div
              className="text-center bg-[#0C0B33] p-8 rounded-xl  h-62 "
              // style={{ color: Color.tertiary }}
            >
              <h1 className="font-semibold text-2xl">Jump Recruiter</h1>
              <div className=" mt-10  flex justify-center items-center">
                <img src="/seven.svg" width={180} height={180} alt="pic" />
              </div>
            </div>
            {/* </Fade> */}
            {/* </Fade> */}
            <div
              className="text-center bg-[#0C0B33] p-8 rounded-xl  h-62 "
              // style={{ color: Color.tertiary }}
            >
              <h1 className="font-semibold text-2xl">Imperial Locum</h1>
              <div className=" mt-10  flex justify-center items-center">
                <img src="/four.svg" width={180} height={180} alt="pic" />
              </div>
            </div>

            {/* </Fade> */}
            <div
              className="text-center bg-[#0C0B33] p-8 rounded-xl  h-62 "
              // style={{ color: Color.tertiary }}
            >
              <h1 className="font-semibold text-2xl">Dictionaryish</h1>
              <div className=" mt-10  flex justify-center items-center">
                <img src="six.svg" width={180} height={180} alt="pic" />
              </div>
            </div>
            {/* </Fade> */}
            {/* </Fade> */}
            <div
              className="text-center bg-[#0C0B33] p-8 rounded-xl  h-62 "
              // style={{ color: Color.tertiary }}
            >
              <h1 className="font-semibold text-2xl">Jump Recruiter</h1>
              <div className=" mt-10  flex justify-center items-center">
                <img src="/seven.svg" width={180} height={180} alt="pic" />
              </div>
            </div>
            {/* </Fade> */}
            {/* </Fade> */}
            <div
              className="text-center bg-[#0C0B33] p-8 rounded-xl  h-62 "
              // style={{ color: Color.tertiary }}
            >
              <h1 className="font-semibold text-2xl">Imperial Locum</h1>
              <div className=" mt-10  flex justify-center items-center">
                <img src="/four.svg" width={180} height={180} alt="pic" />
              </div>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
}
