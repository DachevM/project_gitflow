import React, { useCallback, useEffect } from "react";

import OrdersList from "./OrdersList";

import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import { useToolkitDispatch, useToolkitSelector } from "../../../RTK/hooksRTK";
import ordersSelectors from "../../../RTK/selectors/ordersSelectors";
import searchSelectors from "../../../RTK/selectors/searchSelectors";
import {
  fetchOrders,
  fetchTotal,
  orderFilter,
} from "../../../RTK/actions/orderAction";
import { Placeholders } from "../../../Enums/placeholders";

import "./orders.css";

const Orders = () => {
  const { order, lim, page, total, orderFiltered } = useToolkitSelector(
    ordersSelectors.orders
  );
  const { search } = useToolkitSelector(searchSelectors.search);
  const dispatch = useToolkitDispatch();

  const params = {
    limit: lim,
    page,
  };

  const totalCount = useCallback(() => {
    return Math.ceil(total / lim);
  }, [lim, total]);

  useEffect(() => {
    dispatch(fetchOrders(params));
    dispatch(fetchTotal(params));
  }, [lim, page]);

  useEffect(() => {
    dispatch(orderFilter(search));
  }, [search, lim, order]);

  return (
    <div className={"orders_main"}>
      <div className={"orders_head"}>
        <Search placeholder={Placeholders.orders} search={search} />
        <Pagination pages={page} total={totalCount} />
      </div>
      <OrdersList searched={orderFiltered} />
    </div>
  );
};
export default Orders;
