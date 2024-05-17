"use client";

import LoadingIndicator from "@/components/LoadingIndicator";
import StarshipSection from "@/components/StarshipSection";
import { Starship } from "@/types/Starship";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { starshipId: string } }) {
  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    const fetchStarship = async () => {
      const response = await fetch(
        `https://swapi.dev/api/starships/${params.starshipId}/`
      );
      const data = await response.json();
      setStarship({
        name: data.name,
        model: data.model,
      });
    };

    fetchStarship();
  }, [params.starshipId]);

  return (
    <>
      {!starship ? (
        <LoadingIndicator />
      ) : (
        <StarshipSection starship={starship} />
      )}
    </>
  );
}
