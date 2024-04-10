import Button from "../Button";
import { useRouter } from "next/navigation";
import ProfileUserInfo from "./ProfileUserInfo";

export default function ProfileContent({ userData, userId }) {
  const router = useRouter();
  const updateUserData = (updatedUserData) => {
    setUserData(updatedUserData);
  };


  return (
    <section className="flex flex-col lg:w-full m-auto py-12 gap-12">
      <ProfileUserInfo userData={userData} />
      <Button
        color="primary"
        children="Editar perfil"
        onClick={() => router.push(`/mi-cuenta/${userId}/editar-perfil`)}
        className="sm:text-[1.1rem] w-[18.75rem] m-auto lg:w-[28rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem]"
        style={{
          transition:
            "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
        }}
      />
    </section>
  );
}