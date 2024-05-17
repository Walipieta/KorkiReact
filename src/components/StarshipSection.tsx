import React from "react";
import { Starship } from "@/types/Starship";

const StarshipSection = ({ starship }: { starship: Starship }) => {
  return (
    <h1>
      Nazwa statku: {starship.name} , model: {starship.model},
    </h1>
  );
};

export default StarshipSection;
