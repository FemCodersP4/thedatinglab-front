"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DrawerWithNavigation from "@/app/components/common/Drawer.jsx";
import Button from "@/app/components/Button.jsx";
import { usePathname } from "next/navigation";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import ModalAuth from "@/app/components/modal/ModalAuth.jsx";
import ProfileMenu from "@/app/components/ProfileMenu.jsx";
import { useUser } from "@/app/providers/UserProvider";

export default function NavigationBar() {
  const { user } = useUser();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  const isHomePage = pathname === "/";
  const isFaqsPage = pathname === "/faqs"; // cambiar ruta
  const isEventsPage = pathname === "/events"; // cambiar ruta

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const scrollInTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const navList = (
    <>
      <ul className="flex lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[3rem] text-black ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isHomePage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            href="#"
            className={`${
              isHomePage ? "text-primary-color" : ""
            } flex items-center  font-nunito `}
          >
            Home
          </Button>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isFaqsPage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            onClick={() => scrollInTo("sectionStepsInfo")}
            className={`${
              isFaqsPage ? "text-primary-color" : ""
            } flex items-center  font-nunito`}
          >
            ¿Como Funciona?
          </Button>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isEventsPage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            onClick={() => scrollInTo("sectionEvents")}
            className={`${
              isEventsPage ? "text-primary-color" : ""
            } flex items-center  font-nunito`}
          >
            Eventos
          </Button>
        </Typography>
      </ul>
      <div className="lg:flex items-center hidden">
        {user?.email && <ProfileMenu />}
        {!user?.email && (
          <ModalAuth
            renderButtonModal={(handleOpenModalAuth) => (
              <Button
                className="hidden lg:inline-block lg:font-semibold text-[1rem]  font-nunito lg:text-primary-color lg:border-[0.15rem] lg:border-primary-color lg:py-[0.5rem] lg:px-[1.6rem]"
                onClick={handleOpenModalAuth}
              >
                Accede
              </Button>
            )}
          />
        )}
      </div>
    </>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-[1rem] pt-[1.5rem] pb-[1rem] lg:px-[4rem] lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <IconButton
            variant="text"
            className="basis-[15%] w-[2.5rem] max-w-none text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(true)}
          >
            {!open && (
              <Image
                width={40}
                height={40}
                src={"/assets/icon/icon-hamburger.svg"}
                alt="icono de menu mobile"
                className="w-full"
              />
            )}
          </IconButton>
          <Button
            as="Link"
            href="/"
            className="mt-0 basis-[70%] cursor-pointer py-1.5 flex justify-center lg:basis-[20%] lg:justify-start"
          >
            <Image
              width={180}
              height={60}
              src={"/assets/image/logo-dating-lab.svg"}
              alt="logo de dating lab"
            />
          </Button>
          <div className="flex items-center lg:basis-[80%] lg:justify-end">
            <div className=" hidden lg:flex lg:gap-[3rem]">{navList}</div>
          </div>
          <div className="flex items-center lg:hidden">
            {user?.email && <ProfileMenu />}
            {!user?.email && (
              <ModalAuth
                renderButtonModal={(handleOpenModalAuth) => (
                  <Button className="lg:hidden  w-[2rem] flex justify-center mt-0 py-0">
                    <Image
                      width={25}
                      height={25}
                      src={"/assets/icon/icon-user.svg"}
                      alt="icono de usuario"
                      className="lg:hidden"
                      onClick={handleOpenModalAuth}
                    />
                  </Button>
                )}
              />
            )}
          </div>
        </div>
      </Navbar>
      <DrawerWithNavigation closeDrawer={closeDrawer} open={open} />
    </>
  );
}