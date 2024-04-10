"use client"

import CreateForm from "@/app/components/profile/CreateForm";
import { Typography, Card } from "@material-tailwind/react";

export default function CreateProfilePage(){

    return (
    <main className="md:min-h-screen mx-auto bg-pink-grey-bg md:py-20 py-10">
        <Card className="w-2/3 p-8 lg:p-12 m-auto">
        <Typography
          variant="h4"
          className="text-primary-color text-center font-nunito font-bold text-[1.6rem] mt-[0.4rem] lg:text-[1.8rem] mb-[1.5rem]"
        >
          Crear perfil
        </Typography>
        <CreateForm/>
      </Card>
      </main>
    );
  };