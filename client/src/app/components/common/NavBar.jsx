"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DrawerWithNavigation from "@/app/components/common/Drawer.jsx";
import Button from "@/app/components/Button.jsx";
import { usePathname } from "next/navigation";
import { Navbar, Typography } from "@material-tailwind/react";
import ModalAuth from "@/app/components/modal/ModalAuth.jsx";
import ProfileMenu from "@/app/components/ProfileMenu.jsx";
import ModalContact from "@/app/components/modal/ModalContact.jsx";
import { useUser } from "@/app/providers/UserProvider";

export default function NavigationBar() {
  const { user } = useUser();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  const isHomePage = pathname === "/";
  const isFaqsPage = pathname === "/preguntas-frecuentes"; // cambiar ruta
  const isEventsPage = pathname === "/eventos"; // cambiar ruta

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const navList = (
    <>
      <ul className="flex lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[3rem] text-black">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`${
            isHomePage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            as="Link"
            href="/"
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
            isEventsPage ? "border-b-2 border-primary-color rounded-none" : ""
          } font-semibold text-[1rem]`}
        >
          <Button
            as="Link"
            href="/eventos"
            className={`${
              isEventsPage ? "text-primary-color" : ""
            } flex items-center  font-nunito`}
          >
            Eventos
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
            as="Link"
            href="/preguntas"
            className={`${
              isFaqsPage ? "text-primary-color" : ""
            } flex items-center  font-nunito`}
          >
            FAQs
          </Button>
        </Typography>
        <ModalContact
          renderContactModal={(handleOpenModalContact) => (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className={`font-semibold text-[1rem]`}
            >
              <Button
                className={`flex items-center font-nunito`}
                onClick={handleOpenModalContact}
              >
                Contacto
              </Button>
            </Typography>
          )}
        />
      </ul>
      <div className="lg:flex items-center hidden ">
        {user?.email && (
          <div className="lg:flex items-center lg:w-[3.5rem] lg:h-[3.5rem]">
            <ProfileMenu userImage={user.profile_image} /> 
          </div>
        )}
        {
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
        }
      </div>
    </>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-[1.5rem] pt-[1.5rem] pb-[1rem] md:px-[2.5rem] lg:px-[4rem] lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Button
            className="!py-0 !mt-0 !rounded-none  !w-[1.5rem] !max-w-[2.1rem] h-auto sm:!w-[2rem] text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpen(true)}
          >
            {!open && (
              <Image
                width={30}
                height={30}
                src={"/assets/icon/icon-hamburger.svg"}
                alt="icono de menu mobile"
                className="w-full h-auto"
              />
            )}
          </Button>
          <Button
            as="Link"
            href="/"
            className="!mt-0 basis-[80%] cursor-pointer py-1.5 flex justify-center lg:basis-[20%] lg:justify-start"
          >
            <Image
              width={180}
              height={60}
              src={"/assets/image/logo-dating-lab.svg"}
              alt="logo de dating lab"
            />
          </Button>
          <div className="flex items-center lg:basis-[80%] lg:justify-end">
            <div className=" hidden lg:flex lg:gap-[3rem] ">{navList}</div>
          </div>
          <div className="flex items-center lg:hidden">
            {user?.email && <ProfileMenu userImage={user.profile_image} />}

            <ModalAuth
              renderButtonModal={(handleOpenModalAuth) => (
                <Button className="!py-0 !rounded-none !mt-0  lg:hidden h-auto flex justify-center !w-[1.5rem] max-w-[2.1rem] sm:!w-[2rem]">
                  <Image
                    width={30}
                    height={30}
                    src={"/assets/icon/icon-user.svg"}
                    alt="icono de usuario"
                    className="lg:hidden"
                    onClick={handleOpenModalAuth}
                  />
                </Button>
              )}
            />
          </div>
        </div>
      </Navbar>
      <DrawerWithNavigation closeDrawer={closeDrawer} open={open} />
    </>
  );
}
