import React from "react";

import CitiesItemLayout from "./CitiesItemLayout";

import "./cities.css";

import Loader from "../../Elements/Loader/Loader";
import Error from "../../Elements/Error/Error";
import { type ICities } from "../../../Types/types";
import { useToolkitSelector } from "../../../RTK/hooksRTK";
import citiesSelectors from "../../../RTK/selectors/citiesSelectors";

interface CitiesHeadProps {
  cities: ICities[];
}

const CitiesList = ({ cities }: CitiesHeadProps) => {
  const { isLoading, error } = useToolkitSelector(citiesSelectors.cities);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className={"cities_body"}>
      <div className={"cities_body_head"}>
        <div className={"cities_body_left_head"}>Город</div>
        <div className={"cities_body_right_head"}>Адрес</div>
      </div>
      {isLoading ? <Loader /> : <CitiesItemLayout cities={cities} />}
    </div>
  );
};

export default CitiesList;
