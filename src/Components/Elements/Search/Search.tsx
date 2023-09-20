import { useCallback } from "react";

import type React from "react";

import { useToolkitDispatch } from "../../../RTK/hooksRTK";
import "./search.css";
import { searchClean, searchMod } from "../../../RTK/actions/searchAction";

interface ISearchProps {
  search: string;
}

const Search = ({ search }: ISearchProps) => {
  const dispatch = useToolkitDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchMod(e));
    },
    [dispatch]
  );

  const searchEmpty = useCallback(() => {
    dispatch(searchClean());
  }, [dispatch]);

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
