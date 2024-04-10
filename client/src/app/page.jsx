"use client";
import Hero from "@/app/components/Hero.jsx";
import StepsInfo from "@/app/components/StepsInfo.jsx";
import HeroEvents from "@/app/components/HeroEvents.jsx";
import Button from "@/app/components/Button.jsx";
import Footer from "@/app/components/common/Footer.jsx";
import NavigationBar from "@/app/components/common/NavBar.jsx";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <main className="relative">
        <section className="relative pb-[5rem] lg:pb-0 lg:h-[38rem] lg:overflow-hidden lg:justify-end lg:flex lg:flex-col xl:h-[45rem] ol:h-[44rem] ol:bg-contain xxxl:h-[56rem] xl:px-[2rem] ">
          <div
            className="absolute w-full h-[80%] top-0 left-0 z-0 lg:w-[50%] lg:h-full"
            style={{
              backgroundImage: `url('/assets/image/bg-hero.png')`,
              backgroundPosition: "center center",
              backgroundRepeat: "repeat-y",
              backgroundSize: "contain",
            }}
          ></div>
          <div
            className="absolute w-full h-[80%] lg:h-[100%] top-0 left-0 z-0 xl:h-full"
            style={{
              backgroundImage: `url('/assets/image/bg-corazon.svg')`,
              backgroundPosition: "center center",
              backgroundSize: "contain",
              transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            }}
          ></div>
          <Hero />
        </section>
        <section
          id="sectionStepsInfo"
          className="bg-[#E94444] px-[2rem] py-[4rem] flex flex-col justify-center items-center lg:pb-0 lg:pt-[1rem] lg:px-[8rem] lg:h-[50rem] lg:flex-none lg:overflow-hidden xl:h-[50rem] xl:px-[4rem]  ol:pt-0 ol:px-[4rem] ol:h-[46rem] 2xl:!h-[50rem] xxl:pt-[6rem] xxxl:!h-[60rem] xxxl:pt-0 xxxl:px-0"
        >
          <StepsInfo />
        </section>
        <section
          id="sectionEvents"
          className="bg-[#F6F4F6] pt-[5rem] lg:pt-[2rem] lg:h-[40rem] xl:h-[44rem] lg:flex lg:flex-col lg:px-[3rem] lg:overflow-hidden ol:pt-[2rem] ol:h-[44rem] xxl:h-[48rem] xxxl:!h-[60rem]"
        >
          <HeroEvents />
        </section>
        <Button
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-[1rem] right-[1rem] lg:right-[0.5rem] lg:bottom-[2rem] py-0 !w-auto 2xl:right-[6rem] xxxl:right-[12rem]"
        >
          <Image
            width={45}
            height={45}
            src={"/assets/icon/icon-up.svg"}
            alt="icon de subir"
            className="cursor-pointer xxxl:w-[3.5rem]"
          />
        </Button>
      </main>
      <Footer />
    </>
  );
}
