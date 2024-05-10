import React, { FC, useState } from "react";
import { useAppDispatch } from "../../helpers/hooks";
import { addToFavorites } from "../../store/actions/products.actions";
import Button from "../../ui/Button";
import favoritesBtn from "../../images/favoritesBtn.jpg";
import styles from "../../pages/products/products.module.css";
import { ProductType } from "../../types";


const ProductCard:FC<{ product: ProductType }> = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState('down');
  const dispatch = useAppDispatch();

  const toggleExpand = () => {
    setExpanded(!expanded);
    setIcon(!expanded ? 'up' : 'down');
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.cardPic}/>
      <div className={styles.cardTop}>
        <h2>{product.title}</h2>
        <img
          src={favoritesBtn}
          alt=""
          className={styles.favoritesBtn}
          onClick={() => dispatch(addToFavorites(product.id))}
        />
      </div>
      <span>{String(product.description).split(' ').slice(0, 10).join(' ')}</span>
      {expanded && (
        <span className={styles.visible}>
          {String(product.description).split(' ').slice(10, 150).join(' ')}
        </span>
      )}

      <button className={styles.btn} onClick={toggleExpand}>
        {expanded ? 'Свернуть' : 'Развернуть'}

        {icon === 'down' ? (
          <svg width="9" height="13" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 6.79L5.31 4.97C5.5 4.78 5.82 4.78 6.01 4.97C6.21 5.17 6.21 5.49 6.01 5.68L3.35 8.35C3.15 8.54 2.83 8.54 2.64 8.35L-0.03 5.68C-0.22 5.49 -0.22 5.17 -0.03 4.97C0.17 4.78 0.49 4.78 0.68 4.97L2.5 6.79L2.5 0.33C2.5 0.05 2.72 -0.17 3 -0.17C3.27 -0.17 3.5 0.05 3.5 0.33L3.5 6.79Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero" />
          </svg>
        ) : (
          <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.53 4.53C0.23 4.82 -0.24 4.82 -0.54 4.53C-0.83 4.23 -0.83 3.76 -0.54 3.46L3.46 -0.54C3.76 -0.83 4.23 -0.83 4.53 -0.54L8.53 3.46C8.82 3.76 8.82 4.23 8.53 4.53C8.23 4.82 7.76 4.82 7.46 4.53L4.75 1.81L4.75 11.5C4.75 11.91 4.41 12.25 4 12.25C3.58 12.25 3.25 11.91 3.25 11.5L3.25 1.81L0.53 4.53Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
