import React from 'react';
import { css } from '@emotion/css';
import ProductItem from './ProductItem';

const style = css`
  display: flex;
  width: 100%;
`;
export default function Products(props) {
  const { products } = props;

  /* // TODO1
  return (
    <div className={style}>
      {
        products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onAddToCart={props.onAddToCart}
          />
        ))
      }
    </div>
  );
  // */
}
