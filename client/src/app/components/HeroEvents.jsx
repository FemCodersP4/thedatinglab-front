import Image from "next/image";
import Button from "@/app/components/Button.jsx";
import CardCurrentEvent from "@/app/components/CarouselCustomArrows.jsx";
export default function HeroEvents() {
  return (
    <>
      <div className="flex flex-col items-center  px-[2.5rem] md:w-[60%] md:mx-auto lg:w-full xl:mt-[2rem] ol:mt-[1rem] xxl:mb-0 xxxl:!mt-[3rem]">
        <h4 className="font-bold text-[1.3rem] leading-[0.55rem] sm:text-[1.5rem] md:text-[2rem]  xl:text-[2.2rem] md:pt-[2rem] ol:text-[2.2rem] xxxl:text-[2.8rem] ">
          Descubre los próximos
        </h4>
        <div className="flex items-center md:mb-[1rem] lg:mb-[0]">
          <hr className="border-[0.08rem] border-primary-color w-[5rem] md:w-[9rem] xl:w-[12rem]" />
          <span className="text-[3rem] font-madi text-primary-color leading-none px-[0.5rem] md:text-[4rem] lg:text-[3rem] xl:text-[4rem] ol:text-[4rem] xxl:text-[4rem]">
            eventos
          </span>
          <hr className="border-[0.08rem] border-primary-color w-[5rem] md:w-[9rem] xl:w-[12rem]" />
        </div>
        <p className="text-center text-[0.8rem] font-semibold mb-[0.8rem] sm:text-[1rem] lg:w-[50%] lg:text-[0.9rem] xl:text-[1rem] xl:w-[40%] ol:text-[1.1rem] ol:w-[40%] 2xl:!w-[35%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
        <Button
          as="Link"
          href="/eventos"
          children="Ver más eventos"
          color="primary"
          className="text-center mb-[3rem] text-[1rem] font-semibold bg-transparent border-2 border-red-orange text-red-orange md:text-[1.1rem] md:py-[0.5rem] lg:w-[30%] lg:mb-[-0.5rem] lg:z-[1] lg:mt-0 xl:w-[30%] xl:rounded-bl-3xl xl:rounded-tr-3xl 2xl:w-[25%]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
      </div>
      <div className="pb-[4rem] lg:flex lg:relative  lg:px-[2rem] lg:!pb-0 lg:mb-0 lg:gap-[1rem] lg:h-full xl:gap-[2rem] ol:px-[8rem]">
        <div className="hidden  lg:flex  lg:basis-[60%]  xxl:items-end xxl:mt-0">
          <Image
            width={800}
            height={500}
            src={"/assets/image/imagen-events.png"}
            alt="pareja sonriente"
            className="w-[45rem] lg:absolute lg:w-[38rem] lg:left-[-7rem] lg:bottom-0 h-auto xl:w-[43rem] ol:w-[45rem] 2xl:!w-[50rem] 2xl:left-[2rem] xxxl:!w-[60rem] xxxl:left-[7rem]"
          />
        </div>
        <CardCurrentEvent />
      </div>
    </>
  );
}
