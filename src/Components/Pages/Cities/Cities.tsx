import React, { useEffect } from "react";

import CitiesHead from "./CitiesHead";
import CitiesList from "./CitiesList";

import "./cities.css";

import { useToolkitDispatch, useToolkitSelector } from "../../../RTK/hooksRTK";
import citiesSelectors from "../../../RTK/selectors/citiesSelectors";
import { fetchCities } from "../../../RTK/actions/citiesAction";

const Cities = () => {
  const { cities } = useToolkitSelector(citiesSelectors.cities);

  const dispatch = useToolkitDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div className={"cities_main"}>
      <CitiesHead />
      <CitiesList cities={cities} />
    </div>
  );
};

export default Cities;
