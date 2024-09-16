import React from "react";
import "../index.css";
import Slider from "../components/Slider";
export default function Team() {
  return (
    <>
      <div className="h-16 bg-[#04131a] text-2xl font-bold content-center text-center  text-white">
        OUR TEAM
      </div>
      <div className="font-semibold  h-screen bg-[#ccd0cf]">
        <Slider className="w-1/2 h-1/2" />
        <div className=" h-full bg-[#04131a] ">
          <div className="grid grid-cols-3 grid-rows-1 ">
            <div className="text-white w-full p-16">THe CET Build CLub is a dynamic and tech-foucsed community where students collaborate on innovative projects, rnaging from ai and machine learning to robotics and IOT</div>
            <div className="text-white p-16">THe CET Build CLub is a dynamic and tech-foucsed community where students collaborate on innovative projects, rnaging from ai and machine learning to robotics and IOT</div>
            <div className="text-white p-16"></div>
          </div>
        </div>
      </div>
    </>
  );
}
