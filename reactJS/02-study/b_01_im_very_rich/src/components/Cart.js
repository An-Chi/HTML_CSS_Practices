import React from 'react';
import { css } from '@emotion/css';
import CartItem from './CartItem';

const style = css`
  border:1px solid black;
  padding: 10px;
  margin-bottom:10px;
`;
export default function Cart(props) {
  return (
    <div className={style}>
      <h3>grandTotal:{props.grandTotal}</h3>
      <div>
        {
          props.items.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={props.onRemove}
              onUpdateQuantity={props.onUpdateQuantity}
            />
          ))
        }
      </div>
    </div>
  );
}
