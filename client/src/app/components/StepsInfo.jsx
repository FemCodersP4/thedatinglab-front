import Image from "next/image";

export default function StepsInfo() {
  return (
    <div className="lg:flex  ol:w-full ol:max-w-[1440px] xxxl:max-w-[1600px] xxxl:h-full">
      <div className="flex flex-col justify-center items-center max-w-[20rem] sm:max-w-[30rem] lg:max-w-[28rem] lg:basis-[60%] ol:max-w-[45rem] ol:justify-start xxxl:max-w-[50rem] xxxl:justify-center">
        <h1 className="font-bold text-white text-[2.2rem] mb-[2rem] sm:mb-[2rem] lg:mt-[2rem] ol:text-[2.5rem] ol:mb-[3rem] ol:mt-[4rem] xxxl:mt-0">
          ¿Como Funciona?
        </h1>
        <div className="relative">
          <div className="flex gap-[1rem] mb-[2rem] sm:items-center sm:mb-[3rem]  lg:mb-[1rem] ol:mb-[4rem]">
            <Image
              width={25}
              height={25}
              src={"/assets/icon/icon-one.svg"}
              alt="numero uno"
              className="h-auto sm:w-[2rem] lg:w-[1.5rem] ol:w-[2.2rem]"
            />
            <div className="w-[65%] md:w-[80%] ol:w-[80%] mb-[1rem] ol:mt-0 ol:mb-0">
              <h3 className="font-semibold text-[1.1rem] mb-[0.5rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.1rem] ol:text-[1.3rem] ol:leading-[1.5rem] ">
                Registrate y completa el test de compatibilidad emocional
              </h3>
              <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:text-[1rem] sm:mt-[0.5rem] ol:text-[1.1rem]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <Image
            width={60}
            height={60}
            src={"/assets/image/enlace-arrow1.svg"}
            alt="icono flecha"
            className="h-auto absolute top-2 right-0 sm:w-[4rem] sm:right-[4rem] lg:right-[1rem] lg:w-[4rem] xl:w-[4rem] xl:right-[-1rem] ol:w-[4.8rem] ol:right-[1rem] xxl:w-[5rem] xxl:right-[1rem]"
          />
        </div>
        <div className="relative sm:w-full">
          <div className="flex gap-[1rem] mb-[2rem] justify-end sm:items-center sm:mb-[3rem] lg:mb-[1rem] ol:mb-[4rem]">
            <Image
              width={38}
              height={38}
              src={"/assets/icon/icon-two.svg"}
              alt="numero dos"
              className="h-auto sm:w-[3rem] lg:w-[2.3rem] ol:w-[3rem] "
            />
            <div className="w-[55%] sm:w-[60%] md:w-[65%] lg:w-[55%] mb-[1rem] ol:mt-0 ol:mb-0">
              <h3 className="font-semibold text-[1.1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.1rem] ol:text-[1.3rem] ol:leading-[1.5rem]">
                Recibe tus match personalizados
              </h3>
              <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:text-[1rem] sm:mt-[0.5rem] ol:text-[1.1rem]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <Image
            width={80}
            height={60}
            src={"/assets/image/enlace-arrow2.svg"}
            alt="icono de flecha"
            className="h-auto absolute top-[2.5rem] left-[-0.5rem] sm:w-[6rem] sm:top-[1rem] lg:top-[3.5rem] lg:left-[1.5rem] lg:w-[6rem] xl:w-[6rem] xl:top-[1rem] xl:left-[2rem] ol:left-[6rem] ol:w-[7.5rem] xxl:w-[8.1rem]"
          />
        </div>
        <div className="flex gap-[1rem] mb-[2rem] sm:items-center lg:pb-[1rem] ol:pb-0 ol:mb-0">
          <Image
            width={35}
            height={35}
            src={"/assets/icon/icon-three.svg"}
            alt="numero tres"
            className="h-auto md:w-[3.3rem] lg:w-[2.3rem] ol:w-[3rem]"
          />
          <div className="w-[80%] sm:w-[65%] md:w-[80%] ol:w-[70%] mb-[1rem] ol:mt-[0.5rem] ol:mb-0">
            <h3 className="font-semibold text-[1.1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.1rem] ol:text-[1.3rem] ol:leading-[1.5rem]">
              Únete a nuestros emocionantes eventos y ¡ a disfrutar!
            </h3>
            <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:text-[1rem] sm:mt-[0.5rem] ol:text-[1.1rem]">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      <div className="hidden  lg:block h-[20rem] sm:h-[30rem] lg:basis-[40%] lg:h-full xl:h-[40rem] xxl:h-45rem ol:pt-0 ol:h-[45rem] xxxl:max-w-[50rem] xxxl:h-full">
        <div
          className="bg-top w-[20rem] mt-[2rem] h-full sm:bg-top sm:w-[28rem]  lg:w-[40rem] lg:h-full lg:!bg-right-bottom lg:!bg-contain  xl:w-[45rem] ol:w-[40rem] xxl:w-[46rem] xxxl:w-[55rem]"
          style={{
            backgroundImage: `url('/assets/image/imagen-steps.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center start",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
