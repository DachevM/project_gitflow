import { useCallback, useEffect, useState } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useNavigate } from "react-router-dom";

import type React from "react";

import { useToolkitDispatch } from "../../../RTK/hooksRTK";
import { setLim, setPage } from "../../../RTK/actions/orderAction";
import {
  setLimit,
  setPages,
} from "../../../Redux/action-creators/productsAction";

import "./pagination.css";

interface IPaginationProps {
  pages: number;
  total: () => number;
}

const Pagination = ({ pages, total }: IPaginationProps) => {
  const [menu, setMenu] = useState<string>("5");
  const dispatch = useToolkitDispatch();
  const history = useNavigate();
  const pagesPlus = () => {
    dispatch(setPage(pages + 1));
  };
  const pagesMinus = () => {
    dispatch(setPage(pages - 1));
  };
  const limitChange = () => {
    dispatch(setLim(menu));
  };

  const selectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setMenu(e.target.value);
    },
    []
  );

  useEffect(() => {
    return () => {
      dispatch(setPage(1));
      dispatch(setLim("5"));
    };
  }, [history]);

  useEffect(() => {
    return () => {
      dispatch(setPages(1));
      dispatch(setLimit("5"));
    };
  }, [history]);

  return (
    <div className={"pagination_pages"}>
      Показывать
      <select onClick={limitChange} onChange={selectChange} className={"menu"}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      Страница
      <button disabled={true} className={"pagination_pages_butt"}>
        {pages}
      </button>
      <div className={"total_pages"}>из {total()}</div>
      <button
        disabled={pages <= 1}
        onClick={pagesMinus}
        className={"pagination_pages_arrow1"}
      >
        <KeyboardArrowLeftOutlinedIcon fontSize={"small"} />
      </button>
      <button
        disabled={pages === total()}
        onClick={pagesPlus}
        className={"pagination_pages_arrow2"}
      >
        <KeyboardArrowRightOutlinedIcon fontSize={"small"} />
      </button>
    </div>
  );
};

export default Pagination;
