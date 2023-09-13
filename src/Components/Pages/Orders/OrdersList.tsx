import React, { useState } from "react";

import OrdersItem from "./OrdersItem";
import OrdersDescr from "./OrdersDescr";

import type { IOrders } from "../../../Types/types";

import Modal from "../../UI/PopUP/Modal";
import Loader from "../../UI/Loader/Loader";
import { useToolkitSelector } from "../../../RTK/hooksRTK";
import ordersSelectors from "../../../RTK/selectors/ordersSelectors";

import "./orders.css";

interface OrdersBodyProps {
  searched: IOrders[];
}

const OrdersList = ({ searched }: OrdersBodyProps) => {
  const [show, setShow] = useState<boolean>(false);
  const { isLoading, error } = useToolkitSelector(ordersSelectors.orders);

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
      {error && <h1>Ошибка 404</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={"orders"}>
          {searched.map((order) => (
            <div key={order.id}>
              <OrdersItem setShow={setShow} key={order.id} order={order} />
              {show && (
                <Modal show={show} setShow={setShow}>
                  <OrdersDescr order={order} setShow={setShow} />
                </Modal>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;
