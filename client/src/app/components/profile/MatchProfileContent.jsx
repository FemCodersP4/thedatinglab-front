import { useEffect, useState } from "react";
import CardMatch from "./CardMatch";
import { getMatch } from "@/app/services/user";

export default function MatchProfileContent() {

  const [userMatch, setUserMatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMaches = async () => {
      try {
        const userData = await getMatch();
        setUserMatch(userData.matches);
        console.log(userData.matches)
      } catch (error) {
        setError(true);
      }
    };

    fetchMaches();
  }, []);

  return (
    <section className="py-12 flex flex-wrap w-full justify-center lg:justify-start gap-4">
      {userMatch.length > 0 &&
        userMatch.map((match, index) => (
          <CardMatch key={index} match={match} />
        ))}
    </section>
  );
}