// https://emotion.sh/docs/introduction
import React from 'react';
import { css, cx } from '@emotion/css';

const rootStyle = css`
  width: 100%;
  background-color: green;
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
  h1{
    font-size: 100px;
  }
`;

export default function Example06() {
  return (
    <div className={cx('example06', rootStyle)}>
      <h1>hi emotion</h1>
      <button
        className={css`
          background:black;
          color: white;
        `}
      >Switch
      </button>
    </div>
  );
}
