"use client";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";

const EVENTS = [
  {
    id: "event-1",
    imageURL: "/assets/image/evento-1.jpg",
    date: "DOM, 17 SEP 19:00",
    title: "Cata de Vinos",
    description: "Descubre el placer en común",
    location: "Barcelona",
  },
  {
    id: "event-2",
    imageURL: "/assets/image/evento-2.jpg",
    date: "DOM, 17 SEP 19:00",
    title: "Cata de Vinos",
    description: "Descubre el placer en común",
    location: "Barcelona",
  },
  {
    id: "event-3",
    imageURL: "/assets/image/evento-3.jpg",
    date: "DOM, 17 SEP 19:00",
    title: "Cata de Vinos",
    description: "Descubre el placer en común",
    location: "Barcelona",
  },
];

export default function CarouselCustomArrows() {
  return (
    <Carousel
      navigation={() => <></>}
      className="rounded-xl w-[70%] mx-auto lg:w-[40%] lg:mt-[2rem] xl:w-[35%] ol:w-[40%] 2xl:!w-[35%] xxl:mt-[1rem]  xxxl:mt-[4rem]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-20  !rounded-full bg-[#585c5f] w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem] lg:w-[2rem] lg:h-[2rem] lg:top-[35%] ol:w-[3rem] ol:h-[3rem] ol:top-[40%] xxl:w-[2.5rem] xxl:h-[2.5rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 lg:w-[1rem] lg:h-[1rem] ol:w-[1.5rem] ol:h-[1.5rem] xxl:w-[1.5rem] xxl:h-[1.5rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-20 !rounded-full bg-[#585c5f] w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem] lg:w-[2rem] lg:h-[2rem] lg:top-[35%] ol:w-[3rem] ol:h-[3rem] ol:top-[40%] xxl:w-[2.5rem] xxl:h-[2.5rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 lg:w-[1rem] lg:h-[1rem] ol:w-[1.5rem] ol:h-[1.5rem] xxl:w-[1.5rem] xxl:h-[1.5rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {EVENTS.map((datingEvent) => (
        <div key={datingEvent.id}>
          <div className="relative">
            <Image
              src={datingEvent.imageURL}
              alt="image 3"
              width={500}
              height={300}
              className=" w-full object-cover rounded-xl h-[14rem] sm:h-[20rem] lg:h-[12rem] xl:h-[14rem] ol:h-[15rem]  2xl:!h-[18rem] xxxl:!h-[25rem]"
            />
            <div className=" bg-[#eeebee] absolute bottom-0 px-[1rem] py-[0.2rem] rounded-tr-lg sm:px-[3rem]">
              <p className="text-primary-color text-[0.8rem] font-semibold sm:text-[1rem] xxl:text-[1.2rem]">
                Evento
              </p>
            </div>
          </div>
          <div>
            <p className="pt-[2rem] text-[0.8rem] text-primary-color font-semibold sm:text-[1.1rem] lg:text-[1rem] lg:pt-[1rem] xl:text-[1.1rem] xxl:text-[1.1rem]">
              {datingEvent.date}
            </p>
            <h2 className="text-[1.4rem] font-bold sm:text-[1.8rem] lg:text-[1.5rem] xl:text-[1.8rem] xxl:text-[2rem]">
              {datingEvent.title}
            </h2>
            <p className="text-[1rem] font-semibold sm:text-[1.1rem] lg:text-[1rem] xl:text-[1.1rem] xxl:text-[1.2rem]">
              {datingEvent.description}
            </p>
            <div className="flex items-center gap-2 font-bold mt-[0.8rem] lg:mt-0 ">
              <Image
                src="/assets/icon/icon-location.svg"
                alt="image 3"
                width={12}
                height={12}
                className="w-[1.2rem] lg:w-[1rem] xl:w-[1.2rem] xxl:w-[1.3rem]"
              />
              <p className="text-[1rem] sm:text-[1.1rem] lg:text-[1rem] xl:text-[1.1rem] xxl:text-[1.2rem]">
                {datingEvent.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
