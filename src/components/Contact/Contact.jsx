import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="flex flex-wrap py-8 justify-center bg-secondary rounded-e-[100px] w-[90%] md:w-[75%]">
          <h1 className="w-full py-8 font-bold text-center secondTitle text-primary">
            Contact Me
          </h1>
          <div className="w-[90%] md:w-[50%] ">
            <h1 className="text-[28px] font-semibold text-primary capitalize">
              Contact information:
            </h1>
            <p className="leading-8 text-background">
              Feel free to reach out if you're looking for a developer, or have
              any questions.
            </p>
            <div className="flex flex-col gap-2 py-4 text-center md:flex-row">
              <div className="w-1/3 pt-4">
              <span className="p-2 bg-white rounded-full">
                <i className="fa fa-location-dot text-primary text-[22px]"></i>
              </span>
                <p className="text-[22px] pt-2 text-primary">Location</p>
                <p className="text-[16px] text-white"> Cairo, Egypt</p>
              </div>
              <div className="w-1/3 pt-4">
                <span className="p-2 bg-white rounded-full">
                  <i className="fa-regular text-center fa-envelope text-primary text-[22px]"></i>
                </span>
                <p className="text-[22px] pt-2 text-primary">Email</p>
                <p className="text-[16px] text-white">
                  doha321taher@gmail.com
                </p>
              </div>
              <div className="w-1/3 pt-4">
              <span className="p-2 bg-white rounded-full">
                <i className="fa fa-phone text-primary text-[22px]"></i>
              </span>
                <p className="text-[22px] text-primary pt-2">Phone</p>
                <p className="text-[16px] text-white"> +201066135369</p>
              </div>
            </div>
            <p className="capitalize pb-0 pt-8 md:pb-2 text-primary text-[18px] font-semibold">
              Follow Me and show my work :{" "}
            </p>
            <div className="">
              <ul className="font-medium text-[28px] text-primary flex flex-row flex-wrap items-center ps-0 gap-3 md:p-0  md:space-x-8 rtl:space-x-reverse">
                <li>
                  <a
                    href="https://www.behance.net/dohataher2"
                    target="_blank"
                    className="block capitalize rounded-sm md:border-0 md:p-0"
                  >
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/doha-taher-5a9b3231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="block capitalize rounded-sm md:border-0 md:p-0"
                  >
                    <i className="fa-brands fa-square-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Doha-2"
                    target="_blank"
                    className="block capitalize rounded-sm md:border-0 md:p-0"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
