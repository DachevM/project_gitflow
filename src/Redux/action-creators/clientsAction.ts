import { type Dispatch } from "redux";
import axios from "axios";

import { type IClients } from "../../Types/types";
import { type ClientAction, ClientsEnum } from "../types/clients";

export const fetchClients = (
  server: string,
  pages: number,
  limit: number
): any => {
  return async (dispatch: Dispatch<ClientAction>) => {
    try {
      const response = await axios.get<IClients[]>(server, {
        params: {
          _limit: limit,
          _page: pages,
        },
      });
      dispatch({ type: ClientsEnum.FETCH_CLIENT, payload: response.data });
      dispatch({
        type: ClientsEnum.TOTAL_PAGES,
        payload: response.headers["x-total-count"],
      });
    } catch (e) {
      console.log(e);
    }
  };
};
