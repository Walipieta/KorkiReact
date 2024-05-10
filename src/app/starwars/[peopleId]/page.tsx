"use client";

import LoadingIndicator from "@/components/LoadingIndicator";
import PeopleSection from "@/components/PeopleSection";
import { People } from "@/types/People";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { peopleId: string } }) {
  const [people, setPeople] = useState<People | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(
        `https://swapi.dev/api/people/${params.peopleId}/`
      );
      const data = await response.json();
      setPeople({
        name: data.name,
        birth: data.birth_year,
        height: data.height,
      });
    };

    fetchPeople();
  }, [params.peopleId]);

  return (
    <>{!people ? <LoadingIndicator /> : <PeopleSection people={people} />}</>
  );
}
