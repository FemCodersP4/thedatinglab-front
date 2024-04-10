"use client"
import MatchProfileContent from '../../../components/profile/MatchProfileContent';
import UserTitleProfile from '../../../components/profile/UserTitleProfile';
import TabProfile from '../../../components/profile/TabProfile';
import ProfileContent from '../../../components/profile/ProfileContent';
import { getProfileById, getUserEvents } from "@/app/services/user";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loading } from "@/app/components/events/CardList";
import { useUser } from "@/app/providers/UserProvider";
import UserEvents from '../../../components/profile/UserEvents';


export default function ProfilePage() {
  const [currentElement, setCurrentElement] = useState("Perfil");
  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  const { user } = useUser();
  const profileId = user.profile_id;
  const [userInfo, setUserInfo] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [error, setError] = useState(false);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (profileId) { 
          const userData = await getProfileById(profileId);
          setUserInfo(userData);
          setIsLoading(false);
        } else {
          setError(true); 
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    const fetchUserEvents = async () => {
      try {
        if (profileId) {
          const events = await getUserEvents(profileId);
          setUserEvents(events);
        }
      } catch (error) {
        console.error("Error fetching user events:", error);
      }
    };
  
    fetchUser();
    fetchUserEvents();
  }, [profileId]);

  if (isLoading) return <Loading />;

  return (
    <main className="md:min-h-screen bg-pink-grey-bg px-[10%] py-[4%]">
      <UserTitleProfile />
      <TabProfile handleButtonClick={handleButtonClick} />
      {currentElement === 'Perfil' && <ProfileContent userData={userInfo} userId={user.id}/>}
      {currentElement === 'Matches' && <MatchProfileContent />}
      {currentElement === 'Experiencias' && <UserEvents events={userEvents} />}

    </main>
  );
}
