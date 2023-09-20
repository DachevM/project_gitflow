import React from "react";

import type { IClients } from "../../../Types/types";

import MissingError from "../../Elements/Error/MissingError";

interface ItemProps {
  searched: IClients[];
}

const ClientsItem = ({ searched }: ItemProps) => {
  if (!searched.length) {
    return <MissingError title={"пользователей"} />;
  }

  return (
    <div className={"clients_body_ins"}>
      {searched.map((elem) => (
        <div key={elem.phone} className={"clients_body_section"}>
          <div className={"clients_descr_ins"}>
            {elem.name} {elem.lastName}
          </div>
          <div className={"clients_descr_mail"}>{elem.email}</div>
          <div className={"clients_descr_categ"}>{elem.phone}</div>
        </div>
      ))}
    </div>
  );
};

export default ClientsItem;
