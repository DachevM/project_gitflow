import type { IProducts } from "../../Types/types";

enum ProductsEnum {
  FETCH_PROD = "FETCH_PROD",
  FILTERED = "FILTERED",
  SET_PAGES = "SET_PAGES",
  SET_LIMIT = "SET_LIMIT",
  TOTAL_PAGES = "TOTAL_PAGES",
}

interface ProdAction {
  type: ProductsEnum;
  payload: any;
}

interface IProd {
  productsFiltered: IProducts[];
  products: IProducts[];
  pages: number;
  limit: string;
  totalPages: number;
}
export { ProductsEnum, type ProdAction, type IProd };
