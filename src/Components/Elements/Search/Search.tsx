import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import type React from "react";

import { useAppDispatch } from "../../../Redux/hooks";
import "./search.css";
import {
  changeEvent,
  empty,
} from "../../../Redux/action-creators/searchAction";

interface ISearchProps {
  search: string;
}

const Search = ({ search }: ISearchProps) => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEvent(e));
  };
  const searchEmpty = () => {
    dispatch(empty());
  };
  useEffect(() => {
    return () => {
      dispatch(empty());
    };
  }, [dispatch, history]);

  return (
    <div className={"search_form"}>
      <input
        value={search}
        onChange={handleChange}
        type={"text"}
        placeholder={"Поиск по товарам"}
        className={"search_input"}
      />
      <button onClick={searchEmpty} className={"search_form_button"}></button>
    </div>
  );
};

export default Search;
