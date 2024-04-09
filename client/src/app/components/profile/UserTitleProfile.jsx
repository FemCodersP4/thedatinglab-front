'use client'
import { useUser } from "@/app/providers/UserProvider";
import Image from "next/image";

export default function UserTitleProfile() {
  const { user } = useUser();

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 items-center justify-between pb-10">
      <section className="flex flex-col gap-2 text-red-orange">
        <h6 className="text-base">Datos de la cuenta</h6>
        <h2 className="text-3xl font-black lg:text-6xl">
          <span className="text-grey-dark">Hola, </span>
          {user.name}
        </h2>
      </section>
      <div className="m-auto w-[12.5rem] lg:mb-4 h-[12.5rem] overflow-hidden lg:m-0 lg:w-[14rem] lg:h-[14rem]">
        <Image
          src={`http://127.0.0.1:8000/storage/${user.profile_image}`}
          width={200}
          height={200}
          alt={`${user.name} photo`}
          className="object-fit w-full h-full" />
      </div>
    </div>
  );
}