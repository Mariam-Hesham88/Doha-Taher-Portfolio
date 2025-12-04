import React, { useEffect, useRef } from "react";
import style from "./Education.module.css";

export default function Education() {
  const paragraphsRef = useRef([]);

  let education = [
    {
      id: 12,
      course: "Bachelor's in Management Information System",
      place: "Thebes Academy for Computer Science",
      start: "Sep 2022",
      end: "Jul 2026",
    },
    {
      id: 10,
      course: "UI/UX Design Diploma",
      place: "Route Academy",
      start: "May 2025",
      end: "Sep 2025",
    },
    {
      id: 11,
      course: "Frontend Development Diploma",
      place: "Route Academy",
      start: "Sep 2024",
      end: "Feb 2025",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    paragraphsRef.current.forEach((p) => observer.observe(p));
  }, []);

  return (
    <section className="flex flex-wrap justify-center w-full ps-4 md:ps-0 bg-background">
      <div className="w-full p-12 ps-0 md:w-2/3">
        <h1 className="pb-8 font-bold ps-4 md:ps-0 secondTitle text-primary">Education</h1>

        {education.map((edu, i) => (
          <div key={edu.id} className="flex flex-row items-start gap-4 mb-6">
            {/* الأيقونة على الشمال */}
            <span className="icon">
              <i className="fa-solid fa-graduation-cap bg-background p-2 text-secondary text-[38px]"></i>
            </span>

            {/* النصوص على اليمين */}
            <div>
              <h3 className="text-secondary text-[28px] font-semibold">
                {edu.course}
              </h3>

              <p
                ref={(el) => (paragraphsRef.current[i * 2] = el)}
                className={`${style.slideInLeft} paragraph`}
              >
                {edu.place}
              </p>

              <p
                ref={(el) => (paragraphsRef.current[i * 2 + 1] = el)}
                className={`${style.slideInLeft} paragraph`}
              >
                {edu.start} - {edu.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
