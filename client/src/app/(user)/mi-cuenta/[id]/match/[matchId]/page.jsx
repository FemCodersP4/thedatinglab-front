'use client'
import InfoUser from "@/app/components/InfoUser";
import MatchTitleProfile from "@/app/components/MatchTitleProfile";
import { Loading } from "@/app/components/events/CardList";
import { useUser } from "@/app/providers/UserProvider";
import { getProfileById } from "@/app/services/user"; 
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function MatchProfile(){

  // const params = useParams();
  // const matchId = params.matchId;
  // console.log(matchId)
  // const user = useUser();


  // const [userInfo, setUserInfo] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userData = await getProfileById(matchId);
  //     setUserInfo(userData);
  //     console.log(userData);
  //     setIsLoading(false);
  //   };

  //   fetchUser();
  // }, [matchId]);
  
  // if (isLoading) return <Loading />;

  return (
    <main className="bg-pink-grey-bg ">
      <div className="bg-red-orange h-40 -mb-24"></div>
      <section className="px-[10%] py-[4%]">
        <MatchTitleProfile  />
        <InfoUser  />
      </section>
    </main>
  );
}