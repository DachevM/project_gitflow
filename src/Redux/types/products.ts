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
  productsFiltered: any;
  products: any;
  pages: number;
  limit: number;
  totalPages: number;
}
export { ProductsEnum, type ProdAction, type IProd };
