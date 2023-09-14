import React, { useCallback, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import type { SelectChangeEvent } from "@mui/material";
import type { IOrders } from "../../../Types/types";

interface IOrdersDescrBody {
  order: IOrders;
}
const styles = { color: "#737680" };

const OrdersDescrBody = ({ order }: IOrdersDescrBody) => {
  const [categ, setCateg] = useState("");

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setCateg(e.target.value);
  }, []);

  return (
    <div className={"edit_descr"}>
      <label form={"outlined-basic"}>Заказчик</label>
      <input
        type={"text"}
        value={order.user.name + " " + order.user.lastName}
        className={"orders_descr_inp"}
      />
      <label form={"outlined-basic"}>Номер заказа</label>
      <input
        type={"text"}
        value={order.order_number}
        className={"orders_descr_inp"}
      />
      <label form={"outlined-basic"}>Дата оформления</label>
      <input type={"text"} value={order.date} className={"orders_descr_inp"} />

      <label form={"outlined-basic"}>Способ оплаты</label>
      <div className={"orders_descr_select"}>
        <FormControl fullWidth={true} size="small">
          <Select
            displayEmpty
            id="demo-select-small"
            value={categ}
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              <em style={styles}>Выберите категорию</em>
            </MenuItem>
            <MenuItem value={5}>Наличными курьеру</MenuItem>
            <MenuItem value={10}>Онлайн</MenuItem>
          </Select>
        </FormControl>
      </div>
      <label form={"demo-select-small"}>Способ получения</label>
      <input
        type={"text"}
        value={order.delivery_type}
        className={"orders_descr_inp"}
      />
      <label form={"demo-select-small"}>
        {order.delivery_type === "DELIVERY"
          ? "Пункт доставки"
          : "Пункт самовывоза"}
      </label>
      <input
        type={"text"}
        value={order.warehouse.city}
        className={"orders_descr_inp"}
      />
      <label form={"demo-select-small"}>Дополнительная информация</label>
      <input
        type={"text"}
        placeholder={"Поднимитесь, пожалуйста, на 4 этаж"}
        className={"orders_descr_large_inp"}
      />
      <label form={"demo-select-small"}>
        Дополнительная информация по оплате
      </label>
      <input
        type={"text"}
        placeholder={"Перевести на карту"}
        className={"orders_descr_large_inp"}
      />
    </div>
  );
};

export default OrdersDescrBody;
