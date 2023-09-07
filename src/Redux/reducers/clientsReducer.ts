import { type ClientAction, ClientsEnum, type IClient } from "../types/clients";

const ClientsState: IClient = {
  clients: [],
  pages: 1,
  limit: 5,
  totalPages: 0,
};

export const clientsReducer = (
  state = ClientsState,
  action: ClientAction
): IClient => {
  switch (action.type) {
    case ClientsEnum.FETCH_CLIENT:
      return { ...state, clients: action.payload };
    case ClientsEnum.SET_PAGES:
      return { ...state, pages: action.payload };
    case ClientsEnum.SET_LIMIT:
      return { ...state, limit: action.payload };
    case ClientsEnum.TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    default:
      return state;
  }
};
