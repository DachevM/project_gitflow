import React, { useState } from "react";

import OrdersItem from "./OrdersItem";
import OrdersDescr from "./OrdersDescr";

import type { IOrders } from "../../../Types/types";

import Modal from "../../UI/PopUP/Modal";

interface OrdersItemProps {
  searched: IOrders[];
}

const OrdersItemLayout = ({ searched }: OrdersItemProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={"orders"}>
      {searched.map((order) => (
        <div key={order.id}>
          <OrdersItem setShow={setShow} key={order.id} order={order} />
          {show && (
            <Modal setShow={setShow}>
              <OrdersDescr order={order} setShow={setShow} />
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdersItemLayout;
