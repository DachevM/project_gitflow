import React, { useCallback, useState } from "react";

import DeleteCity from "./DeleteCity";

import DeleteModal from "../../UI/PopUP/DeleteModal";
import { Img } from "../../../Images/Img";
import "./cities.css";
import { type ICities } from "../../../Types/types";
interface CitiesListProps {
  city: ICities;
}

const CitiesItem = ({ city }: CitiesListProps) => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <div key={city.id} className={"cities_body_cities"}>
      <div className={"cities_body_left_cities"}>{city.name}</div>
      <div className={"cities_body_right_cities"}>
        <span className={"cities_address"}>{city.address}</span>
        <div className={"cities_img"}>
          <img className={"cities_pen"} src={Img.pen} alt={""} />
          <img
            className={"cities_trash"}
            src={Img.trash}
            alt={""}
            onClick={showModal}
          />
        </div>
        {show && (
          <DeleteModal show={show} setShow={setShow}>
            <DeleteCity setShow={setShow} city={city} />
          </DeleteModal>
        )}
      </div>
    </div>
  );
};

export default CitiesItem;
