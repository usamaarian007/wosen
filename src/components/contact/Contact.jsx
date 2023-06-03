import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import AnimatedLetters from '../AnimatedLetters'
import WordAnimation from "../AnimatedLetters";
import {Fade} from 'react-awesome-reveal';
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqwyqaw', 'template_twyu5tq', e.targer, '-5g49dTZ9h54QCl5a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // const [letterClass, setLetterClass] = useState('text-animate')
  // const contactArray = 'Contact Me'.split('')
  return (
    <div className="text-white">
      <div className="text-white">
        <div className="text-white bg-[#252525] ">
          <div className="grid lg:grid-cols-2  md:grid-cols-1  sm:grid-cols-1 h-screen   ">
            <div className=" flex flex-col justify-center items-center order-2 lg:order-1 p-4">
              <div className="flex flex-col justify-center lg:items-start lg:w-[600px]   items-center">
              <span  className="tagss " >&lt;h1&gt;</span>
                <h1 className="lg:mt-0 -mt-[50px] font-bold lg:text-7xl text-[#00ff7f] text-4xl ">
                  <WordAnimation word="Contact Us" animated="animated" />
                </h1>
                <span  className="tagss " >&lt;/h1&gt;</span>

                <p className="lg:text-xl sm:text-base mt-5 p-2">
                  <WordAnimation
                    word="I'm a very ambitious Full stack developer. I love Automating
                  tasks. Also experienced with Natural Language Processing,
                  Computer Vision."
                    animated="animated"
                  />
                </p>
              </div>
              <Fade direction="left" >
              <div className="flex flex-col justify-around mt-5 h-72 w-[300px] lg:w-[600px] ">
                <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-4 ">

                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-4 rounded-md text-black"
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="p-4 rounded-md text-black"
                    id=""
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="p-4 rounded-md text-black"
                  id=""
                />
                <textarea
                  placeholder="Message"
                  className="rounded-md text-black"
                  name="messege"
                  rows="4"
                  cols="50"
                ></textarea>
                
              </div>
              <div className="flex justify-end  ">
                <button class="bg-transparent mt-5 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                  send
                </button>
              </div>
                  </Fade>
            </div>
            <div className=" flex justify-center items-center order-1 lg:order-2 ">
              {/* <div> */}
            {/* <img src="/map.jpg" alt="img" /> */}
            <Fade right>
            <div className="lg:h-[400px] h-[200px] ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.33199929068!2d-122.01154692513452!3d37.33464803739265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2s!4v1685791301405!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Fade>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
