import React from "react";

import ClientsItem from "./ClientsItem";

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
      <ClientsItem searched={searched} />
    </div>
  );
};

export default ClientsList;
