import React, { useCallback, useEffect } from "react";

import ProductsList from "./ProductsList";

import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import {
  fetchProducts,
  filter,
} from "../../../Redux/action-creators/productsAction";
import ProductSelectors from "../../../Redux/selectors/productSelector";
import "./products.css";
import SearchSelectors from "../../../Redux/selectors/searchSelector";
import { Placeholders } from "../../../Enums/placeholders";

const Products = () => {
  const dispatch = useAppDispatch();

  const { products, pages, limit, totalPages, productsFiltered } =
    useAppSelector(ProductSelectors.product);

  const search = useAppSelector(SearchSelectors.searchText);

  const totalCount = useCallback(() => {
    return Math.ceil(totalPages / +limit);
  }, [limit, totalPages]);

  useEffect(() => {
    dispatch(filter(search));
  }, [search, limit, products, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(pages, limit));
  }, [dispatch, limit, pages]);

  return (
    <main className={"products_main"}>
      <div className={"products_head"}>
        <Search placeholder={Placeholders.products} search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <ProductsList searched={productsFiltered} />
    </main>
  );
};
export default Products;
