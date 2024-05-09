import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../helpers/hooks";
import { getProducts } from "../../store/actions/products.actions";

const Search = () => {
  const [value, setValue] = useState("");
  const [searcharams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    setSearchParams({ title: value });
    dispatch(getProducts());
  }, [value]);
  return (
    <Input
      value={value}
      placeholder="Search..."
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      name="search"
    />
  );
};

export default Search;
