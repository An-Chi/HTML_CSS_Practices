import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setCookie, getCookie } from '@/utils/cookie-utils';
import Products from './Products';
import Cart from './Cart';

const fetcher = (url, method = 'get', data) => {
  const body = data ? JSON.stringify(data) : null;
  return fetch(url, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body,
  }).then((response) => response.json());
};

function App() {
  const [cart, setCart] = useState({
    grandTotal: 0,
    items: [],
  });

  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');

  React.useEffect(() => {
    let cookieToken = getCookie('rich');
    if (!cookieToken) {
      cookieToken = uuidv4();
      setCookie('rich', cookieToken, 7);
    }
    setToken(cookieToken);
    console.log('token', cookieToken);

    fetcher(`/api/rich/${cookieToken}`)
      .then((response) => {
        setCart(response);
      });

    fetcher('/api/rich/products')
      .then((response) => {
        setProducts(response);
      });
  }, []);

  const atAddToCart = (id) => {
    console.log('atAddToCart', id);
    fetcher(`/api/rich/${token}`, 'POST', { id })
      .then((response) => {
        setCart(response);
      });
  };
  const atRemove = (id) => {
    fetcher(`/api/rich/${token}`, 'DELETE', { id })
      .then((response) => {
        setCart(response);
      });
  };

  const atUpdateQuantity = (id, quantity) => {
    fetcher(`/api/rich/${token}`, 'PUT', { id, quantity })
      .then((response) => {
        setCart(response);
      });
  };

  const atCheckoutClick = () => {
    fetcher(`/api/rich/${token}/checkout`, 'POST')
      .then((response) => {
        if (response.status === 'ok') {
          alert('complete');
          setCart({
            grandTotal: 0,
            items: [],
          });
        }
      });
  };
  return (
    <div className="app container">
      <Cart
        grandTotal={cart.grandTotal}
        items={cart.items}
        onRemove={atRemove}
        onUpdateQuantity={atUpdateQuantity}
      />
      <Products
        products={products}
        onAddToCart={atAddToCart}
      />
      <button
        className="btn btn-primary"
        disabled={cart.items.length === 0}
        onClick={atCheckoutClick}
      >Checkout</button>
    </div>
  );
}

export default App;
