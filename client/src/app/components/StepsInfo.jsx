import Image from "next/image";

export default function StepsInfo() {
  return (
    <div className="xl:flex xl:relative xl:w-full ol:max-w-[1440px] xxxl:max-w-[1600px] xxxl:h-full">
      <div className="flex flex-col justify-center items-center max-w-[20rem] sm:max-w-[30rem] lg:max-w-[50rem] lg:basis-[60%] xl:py-[4rem] ol:py-[2rem] xxxl:max-w-[50rem] xxxl:justify-center">
        <h1 className="font-bold text-white text-[2.2rem] mb-[2rem] sm:mb-[2rem] lg:mt-[2rem] xl:text-[2.2rem] ol:mb-[3rem] ol:mt-[4rem] 2xl:!mt-0 xxxl:text-[2.8rem] xxxl:!mt-[4rem]">
          ¿Como Funciona?
        </h1>
        <div className="relative">
          <div className="flex gap-[1rem] mb-[1rem] justify-start items-center sm:items-center   lg:mb-[1rem] ol:mb-[2rem] xxxl:mb-[3rem]">
            <Image
              width={30}
              height={30}
              src={"/assets/icon/icon-one.svg"}
              alt="numero uno"
              className="h-auto sm:w-[2rem]  ol:w-[2.2rem]"
            />
            <div className="w-[70%] sm:w-[80%] lg:w-[70%] ol:w-[80%] mb-[1rem] ol:mt-0 ol:mb-0">
              <h3 className="font-semibold text-[1.1rem] mb-[0.5rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.2rem] ol:text-[1.3rem] ol:leading-[1.5rem] xxxl:text-[1.5rem]">
                Registrate y completa el test de compatibilidad emocional
              </h3>
              <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:mt-[0.5rem] lg:text-[1rem] ol:text-[1.1rem] xxxl:text-[1.2rem]">
                Tómate un momento para ti, ponte nuestra playlist de música de
                fondo, bebe o come algo rico, e inicia esta nueva etapa
                rellenando nuestro test.
              </p>
            </div>
          </div>
          <Image
            width={60}
            height={60}
            src={"/assets/image/enlace-arrow1.svg"}
            alt="icono flecha"
            className="h-auto absolute top-2 right-[-0.5rem] sm:w-[4.2rem] sm:top-[2rem] sm:right-[-1rem] lg:right-[4rem] lg:w-[5rem] xl:top-[-0.2rem] xl:right-[5rem] ol:w-[5rem] ol:right-[1rem] ol:top-[1rem] xxl:w-[6rem]  2xl:right-[2rem] 2xl:!top-[-1rem] 2xl:!rotate-[6deg]"
          />
        </div>
        <div className="relative sm:w-full">
          <div className="flex gap-[1rem] mb-[1rem] items-center justify-end sm:items-center  lg:mb-[2rem] xxxl:mb-[3rem]">
            <Image
              width={42}
              height={42}
              src={"/assets/icon/icon-two.svg"}
              alt="numero dos"
              className="h-auto sm:w-[3rem]  ol:w-[3rem] "
            />
            <div className="w-[60%] sm:w-[65%] lg:w-[70%] mb-[1rem] ol:mt-0 lg:mb-0 2xl:w-[60%]">
              <h3 className="font-semibold text-[1.1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.2rem] ol:text-[1.3rem] ol:leading-[1.5rem] xxxl:text-[1.5rem]">
                Recibe tus match personalizados
              </h3>
              <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:mt-[0.5rem] lg:text-[1rem] ol:text-[1.1rem] xxxl:text-[1.2rem]">
                En tu perfil encontrarás los perfiles más compatibles contigo en
                base al test de compatibilidad emocional.
              </p>
            </div>
          </div>
          <Image
            width={90}
            height={60}
            src={"/assets/image/enlace-arrow2.svg"}
            alt="icono de flecha"
            className="transform rotate-[339deg] h-auto absolute top-[5rem] left-[-1rem] sm:w-[7rem] sm:top-[3rem] sm:rotate-[351deg] lg:top-[1rem] lg:left-[0.5rem] lg:w-[7.5rem] lg:rotate-[9deg]  xl:top-[1rem] xl:left-[-1rem] xl:rotate-[359deg] ol:left-[0.5rem] ol:w-[8rem] 2xl:!w-[8.5rem] 2xl:top-[-0.5rem] 2xl:rotate-[20deg] 2xl:!left-[4rem]"
          />
        </div>
        <div className="flex gap-[1rem] mb-[1rem] items-center justify-start sm:items-center lg:pb-[1rem] ol:mb-[2rem] ol:pb-0">
          <Image
            width={42}
            height={42}
            src={"/assets/icon/icon-three.svg"}
            alt="numero tres"
            className="h-auto sm:w-[3rem]  ol:w-[3rem]"
          />
          <div className="w-[80%] md:w-[80%] lg:w-[70%] ol:w-[70%] mb-[1rem] lg:mb-0 ol:mt-[0.5rem] ol:mb-0 xxxl:mb-[3rem]">
            <h3 className="font-semibold text-[1.1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.2rem] ol:text-[1.3rem] ol:leading-[1.5rem] xxxl:text-[1.5rem]">
              Únete a nuestros emocionantes eventos y ¡ a disfrutar!
            </h3>
            <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:mt-[0.5rem] lg:text-[1rem] ol:text-[1.1rem] xxxl:text-[1.2rem]">
              Asiste a nuestras Lab experiences diseñadas para que puedas
              conectar de una forma más divertida y auténtica.
            </p>
          </div>
        </div>
        <div className="relative sm:w-full">
          <div className="flex gap-[1rem] mb-[1rem] items-center justify-end sm:items-center lg:mb-[1rem] ol:mb-[4rem]">
            <Image
              width={48}
              height={48}
              src={"/assets/icon/icon-four.svg"}
              alt="numero cuatro"
              className="h-auto sm:w-[3.5rem]  ol:w-[3rem] "
            />
            <div className="w-[65%] sm:w-[66%] md:w-[65%] lg:w-[70%] mb-[1rem] ol:mt-0 ol:mb-0 ">
              <h3 className="font-semibold text-[1.1rem] leading-[1.3rem] text-white sm:text-[1.2rem] sm:leading-[1.5rem] lg:text-[1.2rem] ol:text-[1.3rem] ol:leading-[1.5rem] xxxl:text-[1.5rem]">
                Post evento
              </h3>
              <p className="text-[0.9rem] text-[#f1cfcf] font-light sm:text-[1rem] sm:mt-[0.5rem] lg:text-[1rem] ol:text-[1.1rem] xxxl:text-[1.2rem]">
                Al final de la experiencia recibirás un cuestionario de conexión
                experimentada para que 48 horas después de la realización del
                evento recibas el contacto de las personas con las que haya
                habido un nivel de conexión similar, para que podáis seguir
                explorando conjuntamente.
              </p>
            </div>
          </div>
          <Image
            width={60}
            height={50}
            src={"/assets/image/enlace-arrow3.svg"}
            alt="icono de flecha"
            className="transform scale-x-[-1] rotate-[358deg] h-auto absolute top-[-2rem] left-[-1rem] sm:w-[4rem] sm:top-[-1rem] lg:top-[-3rem] lg:rotate-[330deg] lg:left-0 lg:w-[5rem] xl:w-[5rem] xl:top-[-4rem] xl:left-[-1rem] ol:left-[-0.5rem] ol:w-[6rem]"
          />
        </div>
      </div>
      <div className="hidden  xl:block h-[20rem] sm:h-[30rem] xl:basis-[50%] xl:h-full xxl:h-45rem ol:pt-0 ol:h-[45rem]">
        <Image
          width={800}
          height={500}
          src={"/assets/image/imagen-steps.png"}
          alt="pareja sonriente"
          className="w-[45rem] xl:absolute xl:w-[50rem] xl:bottom-0 h-auto xxxl:w-[58rem]"
        />
      </div>
    </div>
  );
}
