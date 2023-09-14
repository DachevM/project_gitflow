import { useCallback, useState } from "react";

import type React from "react";

import "./cities.css";

import { useToolkitDispatch } from "../../../RTK/hooksRTK";
import { citiesAdd } from "../../../RTK/actions/citiesAction";

const CitiesHead = () => {
  const [name, setCityName] = useState<string>("");
  const [address, setCityAddress] = useState<string>("");
  const dispatch = useToolkitDispatch();

  const newCityAdd = useCallback(() => {
    const newCity = {
      name,
      address,
      id: String(Date.now()),
    };
    newCity.name.trim().length !== 0 && dispatch(citiesAdd(newCity));
    setCityName("");
    setCityAddress("");
  }, [address, dispatch, name]);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCityName(e.target.value);
    },
    []
  );

  const ChangeInpAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCityAddress(e.target.value);
    },
    []
  );

  return (
    <div className={"cities_head"}>
      <input
        value={name}
        onChange={ChangeInpName}
        type={"text"}
        placeholder={"Введите название города"}
        className={"cities_head_inp"}
      />
      <input
        value={address}
        onChange={ChangeInpAddress}
        type={"text"}
        placeholder={"Введите адрес"}
        className={"cities_head_inp"}
      />
      <button className={"cities_head_butt"} onClick={newCityAdd}>
        Добавить город
      </button>
    </div>
  );
};

export default CitiesHead;
