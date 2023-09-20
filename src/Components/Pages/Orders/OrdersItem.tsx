import React, { useCallback } from "react";

import { type IOrders } from "../../../Types/types";

interface ListProps {
  order: IOrders;
  setShow: (v: boolean) => void;
}

const OrdersItem = ({ order, setShow }: ListProps) => {
  const showModal = useCallback(() => {
    setShow(true);
  }, [setShow]);

  return (
    <div onClick={showModal} key={order.user.id} className={"orders_section"}>
      <p className={"orders_name"}>
        {order.user.name} {order.user.lastName}
      </p>
      <p className={"orders_number"}>{order.order_number}</p>
      <p className={"orders_delivery"}>{order.delivery_type}</p>
      <p className={"orders_date"}>{order.date}</p>
      <p className={"orders_total"}>{order.total}</p>
      <p className={"orders_isPayed"}>{order.isPayed ? "Да" : "Нет"}</p>
    </div>
  );
};

export default OrdersItem;
