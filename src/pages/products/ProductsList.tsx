import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { getProducts } from "../../store/actions/products.actions";
import Button from "../../ui/Button";
import { nextPage, prevPage } from "../../store/slices/products.slice";
import { useSearchParams } from "react-router-dom";

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
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {products?.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>Title: {item.title}</h2>
              <p>{item.description}</p>
            </div>
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
