import React, { useState } from "react";

import OrdersItem from "./OrdersItem";
import OrdersDescr from "./OrdersDescr";

import Modal from "../../UI/PopUP/Modal";
import { useToolkitSelector } from "../../../RTK/hooksRTK";
import Loader from "../../UI/Loader/Loader";
import "./orders.css";
import { type IOrders } from "../../../Types/types";
interface OrdersBodyProps {
  searched: IOrders[];
}

const OrdersList = ({ searched }: OrdersBodyProps) => {
  const [show, setShow] = useState<boolean>(false);
  const { isLoading, error } = useToolkitSelector((state) => state.orders);

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
            <>
              <OrdersItem setShow={setShow} key={order.id} order={order} />
              {show && (
                <Modal show={show} setShow={setShow}>
                  <OrdersDescr order={order} setShow={setShow} />
                </Modal>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;
