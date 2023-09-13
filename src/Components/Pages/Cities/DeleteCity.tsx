import React, { useCallback } from "react";

import "./cities.css";
import { type ICities } from "../../../Types/types";
import { useToolkitDispatch } from "../../../RTK/hooksRTK";
import { removeCity } from "../../../RTK/actions/citiesAction";

interface DeleteCityProps {
  setShow: (value: boolean) => void;
  city: ICities;
}
const DeleteCity = ({ city, setShow }: DeleteCityProps) => {
  const dispatch = useToolkitDispatch();

  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const removeClick = useCallback(() => {
    dispatch(removeCity(city));
  }, [city, dispatch]);

  return (
    <div className={"сity_delete"}>
      <div>Вы действительно хотите удалить город?</div>
      <div className={"city_name_delete"}>{city.name}</div>
      <button onClick={removeClick} className={"city_delete"}>
        Удалить город
      </button>
      <button onClick={closeModal} className={"city_delete_cancel"}>
        Отменить удаление
      </button>
    </div>
  );
};

export default DeleteCity;
