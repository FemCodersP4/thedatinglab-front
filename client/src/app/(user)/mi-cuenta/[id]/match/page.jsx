'use client'
import InfoUser from "@/app/components/InfoUser";
import MatchTitleProfile from "@/app/components/MatchTitleProfile";


export default function MatchProfile(){
    return (
      <main className="bg-pink-grey-bg ">
        <div className="bg-red-orange h-40 -mb-24"></div>
        <section className="px-[10%] py-[4%]">
        <MatchTitleProfile/>
         <InfoUser /> 
        </section>
        
      </main>
    );
  };
  
  