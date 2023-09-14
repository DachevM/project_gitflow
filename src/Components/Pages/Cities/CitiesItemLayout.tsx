import React from "react";

import CitiesItem from "./CitiesItem";

import type { ICities } from "../../../Types/types";

interface CitiesItemProps {
  cities: ICities[];
}

const CitiesItemLayout = ({ cities }: CitiesItemProps) => {
  if (!cities.length) {
    return <p>Здесь пока нет городов</p>;
  }

  return (
    <div className={"cities_body_layout"}>
      {cities.map((elem) => (
        <CitiesItem key={elem.id} city={elem} />
      ))}
    </div>
  );
};

export default CitiesItemLayout;
