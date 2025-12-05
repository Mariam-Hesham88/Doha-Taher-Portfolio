import React, { useEffect, useRef } from "react";
import style from "./About.module.css";
import doha from "../../assets/images/doha2.jpg";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.show);
            entry.target.classList.remove(style.hidden);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="pt-16 bg-background">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:items-start">

          {/* LEFT SIDE — TEXT */}
          <div className="w-full px-0 md:w-2/3">
            <h1 className="w-full md:w-[70%] py-6 font-bold text-white rounded-e-[50px] secondTitle text-center md:text-end pe-0 md:pe-12 bg-secondary text-3xl md:text-4xl">
              About Me
            </h1>

            <p
              className={`leading-[38px] text-[28px] p-6 sm:p-10 md:p-12 md:px-24 text-black ${style.fadeInUp}`}
            >
              Hi My Name is{" "}
              <span className="font-semibold text-primary">Doha Taher 🌸</span>A
              passionate
              <span className="font-semibold text-primary">
                {" "}
                UI/UX Designer & UI Developer
              </span>
              . I create easy-to-use and engaging{" "}
              <span className="font-semibold text-primary">mobile apps</span> and{" "}
              <span className="font-semibold text-primary">
                responsive websites
              </span>
              . I focus on understanding users and designing interfaces that
              feel natural. I enjoy every step, from{" "}
              <span className="font-semibold text-primary">wireframes</span>
              and{" "}
              <span className="font-semibold text-primary">prototypes</span>{" "}
              to the final design. I also have{" "}
              <span className="font-semibold text-primary">front-end</span>{" "}
              experience with{" "}
              <span className="font-semibold text-primary">Angular</span>.
            </p>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center w-full md:w-1/3">
            <div className="p-4 w-[70%] sm:w-[60%] md:w-[80%] border-[2px] border-[#92462c] rounded-[100px]">
              <img
                src={doha}
                alt="Doha Taher"
                className="w-full rounded-[95px]"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
