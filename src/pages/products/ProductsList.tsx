import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { getProducts } from "../../store/actions/products.actions";
import { nextPage, prevPage } from "../../store/slices/products.slice";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import favoritesBtn from "../../images/favoritesBtn.jpg";
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
        <Loading />
      ) : (
        <div className={styles.cardsList}>
          {products?.map((item: ProductType) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      )}
      <div className={styles.pagination}>
        <Button
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <span>{currentPage}</span>
        <Button onClick={() => dispatch(nextPage())}>Next</Button>
      </div>
    </div>
  );
};

export default ProductsList;
