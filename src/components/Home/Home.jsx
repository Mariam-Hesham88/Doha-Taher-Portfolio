import React from "react";
import style from "./Home.module.css";
import doha from "../../assets/images/doha1.png";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 md:flex-row md:px-12 md:py-0">

      {/* IMAGE ALWAYS FIRST */}
      <div className="flex items-center justify-center order-1 w-full mb-10 md:w-1/2 md:mb-0">
        <div className="rounded-full bg-background max-w-[300px] sm:max-w-[350px] md:max-w-full">
          <img src={doha} alt="Doha" className="w-full h-auto" />
        </div>
      </div>

      {/* TEXT ALWAYS SECOND */}
      <div className="order-2 w-full px-10 mt-10 text-center md:w-1/2 md:text-left md:mt-0">
        
        <h1 className="p-3 py-8 pb-5 text-3xl font-bold text-center text-white bg-secondary shape1 mainTitle sm:text-4xl md:text-5xl">
          Hey! I'm Doha <span className="wave">👋</span>
        </h1>

        <div className="p-5 py-8 my-2 text-sm leading-7 md:mt-12 md:mb-4 shape2 bg-secondary paragraph sm:text-base slideInRight">
          <h3 className="text-white text-center text-2xl sm:text-3xl md:text-[38px] font-semibold mb-2">
            UI/UX Designer
          </h3>
          <p className="text-center text-[22px] text-black">
            I design clean, modern, and user-friendly mobile apps and responsive
            websites that work smoothly on all devices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1VMHPGLFBTnClicS04nPxwlTSk2Ioy-za?usp=sharing"
            className="flex items-center gap-2 px-6 py-3 text-white transition-all hover:scale-110 bg-primary rounded-xl"
          >
            <i className="fa-solid fa-eye text-[18px] pe-2"></i>
            View CV
          </a>

          <a
            href="https://wa.me/201001967368"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 transition-all border hover:scale-110 btn bg-background border-primary text-primary rounded-xl"
          >
            <i className="fa-brands fa-whatsapp text-primary text-[18px]"></i>
            WhatsApp
          </a>
        </div>

      </div>

    </section>
  );
}
