import React from "react";

import CitiesItem from "./CitiesItem";

import "./cities.css";

import { type ICities } from "../../../Types/types";
import { useToolkitSelector } from "../../../RTK/hooksRTK";
import citiesSelectors from "../../../RTK/selectors/citiesSelectors";
import Loader from "../../UI/Loader/Loader";

interface CitiesHeadProps {
  cities: ICities[];
}

const CitiesList = ({ cities }: CitiesHeadProps) => {
  const { isLoading, error } = useToolkitSelector(citiesSelectors.cities);
  return (
    <div className={"cities_body"}>
      <div className={"cities_body_head"}>
        <div className={"cities_body_left_head"}>Город</div>
        <div className={"cities_body_right_head"}>Адрес</div>
      </div>
      {error && <h1>Ошибка 404</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {cities.length > 0 ? (
            <div className={"cities_body_layout"}>
              {cities.map((elem) => (
                <CitiesItem key={elem.id} city={elem} />
              ))}
            </div>
          ) : (
            <p>Здесь пока нет городов</p>
          )}
        </>
      )}
    </div>
  );
};

export default CitiesList;
