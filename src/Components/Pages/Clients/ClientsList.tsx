import React from "react";

import "./clients.css";
import { type IClients } from "../../../Types/types";

interface ClientsBodyProps {
  searched: IClients[];
}

const ClientsList = ({ searched }: ClientsBodyProps) => {
  return (
    <div className={"clients_body"}>
      <div className={"clients_descr"}>
        <div className={"clients_descr_ins"}>ФИ</div>
        <div className={"clients_descr_mail"}>Почта</div>
        <div className={"clients_descr_categ"}>Телефон</div>
      </div>

      {searched.length !== 0 ? (
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
      ) : (
        <p>Здесь пока нет пользователей</p>
      )}
    </div>
  );
};

export default ClientsList;
