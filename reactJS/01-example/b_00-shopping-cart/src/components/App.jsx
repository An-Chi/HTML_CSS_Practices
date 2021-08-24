import React from 'react';
import Item from './Item';
import BuildItem from './BuildItem';
import { PRODUCTS } from './config';

function App() {
  const [cart, setCart] = React.useState([]);


  const onUpdateQuantity = (id) => {
    // 增加數量
    const newCart = cart.map((item) => {
      if(item.id === id) {
        return {
          // ...item,
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity + 1
        }
      }
      return item;
    })
    setCart(newCart)
  }

  const onAddToCart = (id) => {
    const foundItem = cart.find(data => data.id === id);
    if (foundItem) {
      onUpdateQuantity(id);
    } else {
      // 新增\
      const foundOriginItem = PRODUCTS.find(data => data.id === id);

      const lineItem = {
        id,
        price: foundOriginItem.price,
        title: foundOriginItem.title,
        quantity: 1,
      }
      setCart(cart.concat(lineItem))
    }
  }

  const onRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }
  
  const totalPrice = Math.round(cart.reduce(
    (total, currentItem) => total + (currentItem.price * currentItem.quantity),
    0
  )* 100) / 100;
 
  return (
    <div className="app">
      <div className="container mt-4">
        <section>
          <div className="row">
            {
              PRODUCTS.map((itemData) => {
                return (
                  <div className="col-sm-2" key={itemData.id}>
                    <Item
                      id={itemData.id}
                      img={itemData.img}
                      title={itemData.title}
                      price={itemData.price}
                      onAddToCart={onAddToCart}
                    />
                  </div>
                );
              })
            }
          </div>
        </section>

        <section className="cart mt-4">
          <h2>購物車</h2>
          <table className="table cart-item-table">
            <thead>
              <tr>
                <th scope="col">項目</th>
                <th scope="col">數量</th>
                <th scope="col">單價</th>
                <th scope="col">小計</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((data) => {
                  return (
                    <BuildItem
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      price={data.price}
                      quantity={data.quantity}
                      onUpdateQuantity={onUpdateQuantity}
                      onRemoveItem={onRemoveItem}
                      />
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>總價</td>
                <td><span className="total-price">${totalPrice}</span></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <button
            disabled={cart.length === 0}
            className="btn btn-lg btn-success empty-cart"
            onClick={()=> setCart([])}>
            <i className="fas fa-baby-carriage"></i> 清空購物車
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
