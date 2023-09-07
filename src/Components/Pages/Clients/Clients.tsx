import React, { useCallback, useEffect, useMemo } from "react";

import ClientsList from "./ClientsList";

import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { fetchClients } from "../../../Redux/action-creators/clientsAction";
import "./clients.css";
import { type RootState } from "../../../Redux/store";
import { type IClients } from "../../../Types/types";

const SERVER_URL = "http://localhost:5005/clients";

const Clients = () => {
  const dispatch = useAppDispatch();

  const { pages, limit, clients, totalPages } = useAppSelector(
    (state) => state.clients
  );
  const search = useAppSelector<string>(
    (state: RootState) => state.search.text
  );

  const totalCount = useCallback(() => {
    return Math.ceil(totalPages / limit);
  }, [limit, totalPages]);

  const searchedClients = useMemo(() => {
    return clients.filter((e: IClients) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, clients]);

  useEffect(() => {
    dispatch(fetchClients(SERVER_URL, pages, limit));
  }, [dispatch, limit, pages]);

  return (
    <div className={"clients_main"}>
      <div className={"clients_head"}>
        <Search search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <ClientsList searched={searchedClients} />
    </div>
  );
};

export default Clients;
