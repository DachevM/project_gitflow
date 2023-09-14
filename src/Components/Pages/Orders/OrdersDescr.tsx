import React, { useCallback } from "react";

import OrdersDescrBody from "./OrdersDescrBody";

import { type IOrders } from "../../../Types/types";

interface DescrProps {
  order: IOrders;
  setShow: (v: boolean) => void;
}

const OrdersDescr = ({ order, setShow }: DescrProps) => {
  const CloseModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  return (
    <div className={"orders_modal_descr"}>
      <div className={"orders_descr_head"}>
        <button onClick={CloseModal} className={"order_butt_close"}>
          Закрыть
        </button>
        <button onClick={CloseModal} className={"order_butt_confirm"}>
          Подтвердить
        </button>
      </div>
      <div className={"orders_descr_body"}>
        <OrdersDescrBody order={order} />
        <p>Товары</p>
        <div className={"orders_products"}>
          <div className={"orders_ins_product"}>
            <span>Крем</span>
            <span>SKUOO2</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Количество</span>
            <span>1</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Биостимулирующий дневной крем</span>
            <span></span>
          </div>
          <div className={"orders_ins_product"}>
            <span>100 мл</span>
            <span>4 576 $</span>
          </div>
        </div>
        <h4 className={"orders_descr_change"}>Изменить</h4>
        <p>Сумма заказа</p>
        <div className={"orders_products"}>
          <div className={"orders_ins_product"}>
            <span>Товары</span>
            <span>9134 $</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Скидки</span>
            <span>883 $</span>
          </div>
          <div className={"orders_ins_product"}>
            <span>Сумма наличных бонусов</span>
            <span>888 $</span>
          </div>
          <div className={"orders_ins_product_price"}>
            <span>Итого</span>
            <span>{order.total} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDescr;
