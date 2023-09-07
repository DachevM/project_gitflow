import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import ProductsList from "./ProductsList";

import type { RootState } from "../../../Redux/store";

import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import {
  fetchProducts,
  filter,
} from "../../../Redux/action-creators/productsAction";
import Selectors from "../../../Redux/selectors";

import "./products.css";

const SERVER_URL = "http://localhost:5005/products2";

const Products = () => {
  const dispatch = useAppDispatch();

  const { products, pages, limit, totalPages } = useSelector(
    Selectors.product.product
  );
  const productsFiltered = useAppSelector(
    (state) => state.product.productsFiltered
  );
  const search = useAppSelector<string>(
    (state: RootState) => state.search.text
  );

  const totalCount = useCallback(() => {
    return Math.ceil(totalPages / limit);
  }, [limit, totalPages]);

  useEffect(() => {
    dispatch(filter(search));
  }, [search, limit, products, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(SERVER_URL, pages, limit));
  }, [dispatch, limit, pages]);

  return (
    <main className={"products_main"}>
      <div className={"products_head"}>
        <Search search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <ProductsList searched={productsFiltered} /> {/* local state */}
    </main>
  );
};
export default Products;
