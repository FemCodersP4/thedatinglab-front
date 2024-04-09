"use client";

import { formatearFecha, horaFormato, isPastEvent } from "@/app/utils/date.js";
import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/components/Button.jsx";
import { useState } from "react";
import Image from "next/image";
import { ModalUserLogged } from "../modal/ModalUserLogged";
import { registerForEvent } from "@/app/services/user";

export default function Card({ eventDate }) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // look

  const handleOpenModalUserLogged = () => {
    setOpen(true);
  };

  const handleRegisterForEvent = async () => {
    const success = await registerForEvent(eventDate.id);
    if (success) {
      setIsRegistered(true);
    }
  };

  const handler = () => setOpen(!open);

  return (
    <div className="max-w-[22rem] min-w-[18rem] sm:min-w-[12rem] flex flex-col items-center flex-wrap mx-auto">
      <div
        className="w-full min-h-[12rem] small:h-[14rem] sm:!h-[12rem] md:!h-[14rem] lg:!h-[12rem] ol:!h-[15rem] rounded-md shadow-md"
        style={{
          backgroundImage: `url(http://localhost:8000/storage/${eventDate.image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-[1rem] text-white  bg-red-orange inline py-[0.1rem] pl-[0.5rem] pr-[3rem] rounded-tr-xl absolute">
          Evento próximo
        </p>
      </div>
      <div
        className="bg-white rounded-md relative bottom-[2rem] w-[90%] h-[14rem] md:h-[15.5rem] ol:h-[18rem] py-[1rem] px-[0.8rem] shadow-lg ol:px-[1.5rem] ol:py-[2rem]"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px; rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="text-primary-color text-sm break-words font-semibold md:text-[1rem]">
            {formatearFecha(eventDate.date)} {horaFormato(eventDate.time)}
          </p>
        </div>
        <h2
          className=" text-[0.8rem] font-bold leading-[1rem] mb-[0.5rem] md:text-[1rem] md:leading-[1.1rem] md:mb-[1rem]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          rem {eventDate.title}
        </h2>
        <p
          className="text-[0.8rem] ol:text-[1rem]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {" "}
          {eventDate.shortDescription}
        </p>
        <div className="flex gap-[0.4rem] items-center mt-[0.3rem] mb-[1.2rem] md:mt-[1rem]">
          <Image
            src={"/assets/icon/icon-location.svg"}
            width={15}
            height={15}
            alt="icono de localizacion"
          />
          <p className="break-words text-[1rem] font-bold">
            {eventDate.location}
          </p>
        </div>
        <div className="w-full">
          {user.email ? (
            <Button
              color="primary"
              children="Ver más"
              as="Link"
              className="block text-center sm:text-[1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.3rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
              style={{
                transition:
                  "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
              }}
              href={`/evento/${eventDate.id}`}
            />
          ) : (
            <>
              <Button
                color="primary"
                children="Ver másf"
                className="block text-center sm:text-[1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.3rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
                style={{
                  transition:
                    "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
                }}
                onClick={handleOpenModalUserLogged}
              />
              <ModalUserLogged open={open} handler={handler} />
            </>
          )}
           {!isRegistered && (
            <Button
              color="primary"
              children="Apuntarme"
              className="block text-center sm:text-[1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.3rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1rem]"
              style={{
                transition:
                  "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
              }}
              onClick={handleRegisterForEvent}
            />
          )}
        </div>
      </div>
    </div>
  );
}


