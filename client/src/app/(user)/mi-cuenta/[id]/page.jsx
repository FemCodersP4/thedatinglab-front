"use client"
import MatchProfileContent from '../../../components/profile/MatchProfileContent';
import UserTitleProfile from '../../../components/profile/UserTitleProfile';
import TabProfile from '../../../components/profile/TabProfile';
import ProfileContent from '../../../components/profile/ProfileContent';
import { getProfileById, getUserEvents } from "@/app/services/user";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { Loading } from "@/app/components/events/CardList";
import { useUser } from "@/app/providers/UserProvider";



export default function ProfilePage() {
  const [currentElement, setCurrentElement] = useState('Perfil');
  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  const { user } = useUser();
  const profileId = user.profile_id;
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (profileId) { // Asegurarse de que profileId tenga un valor
          const userData = await getProfileById(profileId);
          setUserInfo(userData);
          setIsLoading(false);
        } else {
          setError(true); // Manejar el caso en que profileId sea undefined
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };
  
    fetchUser();
  }, [profileId]);
  
  if (isLoading) return <Loading />;

  return (
    <main className="bg-pink-grey-bg px-[10%] py-[4%]">
      <UserTitleProfile />
      <TabProfile handleButtonClick={handleButtonClick} />
      {currentElement === 'Perfil' && <ProfileContent userData={userInfo} />}
      {currentElement === 'Matches' && <MatchProfileContent />}
      {currentElement === 'Experiencias' && <UserEvents userId={params.id} />}

    </main>
  );
};

