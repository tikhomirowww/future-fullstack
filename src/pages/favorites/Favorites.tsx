import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { getFavoriteProducts } from "../../store/actions/products.actions";
import styles from "../products/products.module.css"
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductType } from "../../types";

const Favorites = () => {
  const { loading, favoriteProducts } = useAppSelector(
    (state) => state.products
  );
  console.log(favoriteProducts);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch]);

  return (
    <div className="container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.cardsList}>
          {favoriteProducts.results &&
            favoriteProducts.results.map((item: ProductType) => (
              <ProductCard product={item}  key={item.id} /> 
            ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
