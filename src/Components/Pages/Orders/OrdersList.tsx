import React from "react";

import OrdersItemLayout from "./OrdersItemLayout";

import Error from "../../Elements/Error/Error";
import Loader from "../../Elements/Loader/Loader";
import { useToolkitSelector } from "../../../RTK/hooksRTK";
import ordersSelectors from "../../../RTK/selectors/ordersSelectors";
import "./orders.css";
import { type IOrders } from "../../../Types/types";

interface OrdersBodyProps {
  searched: IOrders[];
}

const OrdersList = ({ searched }: OrdersBodyProps) => {
  const { isLoading, error } = useToolkitSelector(ordersSelectors.orders);

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className={"ordersBody"}>
      <div className={"orders_descr"}>
        <p className={"orders_name"}>Покупатель</p>
        <p className={"orders_number"}>Номер Заказа</p>
        <p className={"orders_delivery"}>Способ получения</p>
        <p className={"orders_date"}>Дата оформления</p>
        <p className={"orders_total"}> Сумма заказа</p>
        <p className={"orders_isPayed"}>Оплачено</p>
      </div>
      {isLoading ? <Loader /> : <OrdersItemLayout searched={searched} />}
    </div>
  );
};

export default OrdersList;
