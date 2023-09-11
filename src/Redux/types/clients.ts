import type { IClients } from "../../Types/types";

enum ClientsEnum {
  FETCH_CLIENT = "FETCH_CLIENT",
  SET_PAGES = "SET_PAGES",
  SET_LIMIT = "SET_LIMIT",
  TOTAL_PAGES = "TOTAL_PAGES",
}

interface ClientAction {
  type: "FETCH_CLIENT" | "SET_PAGES" | "SET_LIMIT" | "TOTAL_PAGES";
  payload: any;
}

interface IClient {
  clients: IClients[];
  pages: number;
  limit: number;
  totalPages: number;
}
export { ClientsEnum, type ClientAction, type IClient };
