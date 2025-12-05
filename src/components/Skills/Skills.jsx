import React from "react";
import style from "./Skills.module.css";

let designe = ["Figma", "Miro", "Notion", "Sketch"];
let aiTool = ["Figma AI", "Uizard AI", "LottieFiles"];
let development = [
  "HTML",
  "Css",
  "javascript",
  "bootstrap",
  "tailwindcss",
  "typrscript",
  "angular",
];
let designAreas = [
  "Mobile app design",
  "Web design",
  "Responsive UI",
  "Prototyping",
  "User Research",
];
let softSkills = [
  "Communication Skills",
  "Research",
  "Problem Solving",
  "Teamwork & Collaboration",
  "Adaptability & Continuous Learning",
  "Time Management",
  "Attention to Detail",
  "Creativity & Design Sense",
];

export default function Skills() {
  return <>
    <section className="flex flex-wrap justify-center min-h-screen p-12 pe-0">
      <h1 className="w-full py-8 font-bold text-center secondTitle text-primary">
        Skills
      </h1>

      <div className="w-[90%] lg:w-[80%] ms-auto rounded-s-[50px] bg-secondary p-8">
        {/* Designe + AI Tools */}
        <div className="flex flex-col md:flex-row justify-center pb-6 border-b-2 border-[#92462c]">
          {/* Design */}
          <div className="w-full md:w-1/2 p-3 border-b-2 md:border-b-0 md:border-e-2 border-[#92462c]">
            <h3 className="text-center text-white text-[24px] font-semibold py-4">
              Design
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {designe.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-center text-black capitalize transition-all duration-300 rounded-lg cr hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* AI */}
          <div className="w-full p-3 md:w-1/2">
            <h3 className="text-center text-white text-[24px] font-semibold py-4">
              AI Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {aiTool.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-center text-black capitalize transition-all duration-300 rounded-lg cr hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Development + Design Areas */}
        <div className="flex flex-col md:flex-row justify-center pt-6 pb-6 border-b-2 border-[#92462c]">
          <div className="w-full md:w-1/2 p-3 border-b-2 md:border-b-0 md:border-e-2 border-[#92462c]">
            <h3 className="text-center text-white text-[24px] font-semibold py-4">
              Development
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {development.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-center text-black capitalize transition-all duration-300 rounded-lg cr hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full p-3 md:w-1/2">
            <h3 className="text-center text-white text-[24px] font-semibold py-4">
              Design Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {designAreas.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-center text-black capitalize transition-all duration-300 rounded-lg cr hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="w-full p-3 pt-6">
          <h3 className="text-center text-white text-[24px] font-semibold py-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-center text-black capitalize transition-all duration-300 rounded-lg cr hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>;
}
