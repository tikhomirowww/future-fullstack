import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { getFavoriteProducts } from "../../store/actions/products.actions";

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
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {favoriteProducts.results &&
            favoriteProducts.results.map((item: any) => (
              <div key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2>Title: {item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Favorites;
