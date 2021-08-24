import React from 'react';
import { css, cx } from '@emotion/css';

const style = css`
  display: flex;
  align-items: center;
  border:1px solid black;
  margin-bottom: 10px;
  padding: 10px 0;
  p {
    margin-bottom:0;
  }
  > * {
    margin-left: 10px
  }
`;

const quantityStyle = css`
  border-radius: 15px;
  border: 1px solid #ff8800;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    padding: 0 10px;
    font-weight: 700;
    &:hover{
      background-color: #dddddd;
    }
    &[disabled] {
      opacity: 0.7;
      pointer-events: none;
    }
  }
  .quantity-sub {
  }
`;
export default function CartItem(props) {
  const {
    name, quantity, price, id, onRemove,
  } = props;

  const atQuantitySub = () => {
    props.onUpdateQuantity(id, quantity - 1);
  };
  const atQuantityAdd = () => {
    props.onUpdateQuantity(id, quantity + 1);
  };
  return (
    <div className={style}>
      <p>{name}</p>
      <p>x {quantity}</p>
      <p>${price}</p>
      <div className="ml-auto d-flex">
        <div className={cx(quantityStyle, 'mr-3 d-flex')}>
          <button className="quantity-sub" disabled={quantity === 1} onClick={atQuantitySub}>-</button>
          <span className="mx-2">{quantity}</span>
          <button className="quantity-add" onClick={atQuantityAdd}>+</button>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            onRemove(id);
          }}
        >Remove
        </button>
      </div>
    </div>
  );
}
