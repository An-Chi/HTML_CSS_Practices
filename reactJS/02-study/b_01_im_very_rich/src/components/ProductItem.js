import React from 'react';
import { css } from '@emotion/css';

const style = css`
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
  background-color: white;
`;

export default function ProductItem(props) {
  const atClick = () => {
    props.onAddToCart(props.id);
  };
  return (
    <button className={style} onClick={atClick}>
      <img src={props.image} alt="" />
      <p>${props.price}</p>
      <p>{props.name}</p>
    </button>
  );
}
