import React from 'react'

export default function BuildItem(props) {
  const {
    title,
    quantity,
    price,
    id,
    onRemoveItem,
    onUpdateQuantity,
  } = props;

  /* // TODO1
  const [value, setValue] = React.useState(quantity);

  React.useEffect(() => {
    setValue(quantity);
  }, [quantity])

  const atClick = () => {
    onRemoveItem(id);
  }
  const atInputChange = (event) => {
    setValue(event.target.value);
    onUpdateQuantity(id);
  }

  const totalPrice = price * quantity;
  // */
  return (
    /* // TODO2
    <tr>
      <td>{title}</td>
      <td><input type="number" min="1" className="quantity" value={value} onChange={atInputChange}/></td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td>
        <button className="remove-item-btn btn btn-danger btn-sm" onClick={atClick}><i className="fas fa-trash-alt"></i></button>
      </td>
    </tr>
    // */
  )
}
