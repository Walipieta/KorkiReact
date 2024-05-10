import { People } from "@/types/People";
import React from "react";

const PeopleSection = ({ people }: { people: People }) => {
  return (
    <h1>
      Postać: {people.name}, Urodzony: {people.birth}, Wzrost: {people.height}
      cm
    </h1>
  );
};

export default PeopleSection;
