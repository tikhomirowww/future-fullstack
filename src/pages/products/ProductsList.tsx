import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { getProducts } from "../../store/actions/products.actions";
import { nextPage, prevPage } from "../../store/slices/products.slice";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import styles from "./products.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductType } from "../../types";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { loading, products, currentPage } = useAppSelector(
    (state) => state.products
  );

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: currentPage + "" });
    dispatch(getProducts());
  }, [dispatch, currentPage]);

  return (
    <div className="container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {products?.map((item: ProductType) => (
            <ProductCard product={item}  key={item.id} /> 
          ))}
        </>
      )}
      <div>
        <Button onClick={() => dispatch(prevPage())}>Prev</Button>
        <span>{currentPage}</span>
        <Button onClick={() => dispatch(nextPage())}>Next</Button>
      </div>
    </div>
  );
};

export default ProductsList;
