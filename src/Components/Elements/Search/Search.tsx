import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import type React from "react";

import { useAppDispatch } from "../../../Redux/hooks";
import { searchCases } from "../../../Redux/types/search";

import "./search.css";

interface ISearchProps {
  search: string;
}

const Search = ({ search }: ISearchProps) => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: searchCases.SEARCH, payload: e.target.value });
  };
  const searchEmpty = () => {
    dispatch({ type: searchCases.CLEAN, payload: "" });
  };
  useEffect(() => {
    return () => {
      dispatch({ type: searchCases.CLEAN, payload: "" });
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
