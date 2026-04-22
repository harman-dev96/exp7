import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import "./Cart.css";

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Cart</h1>

      <div className="table">
        <div className="header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Action</span>
        </div>

        {items.map(item => (
          <div className="row" key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>

            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={e =>
                dispatch(updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value)
                }))
              }
            />

            <button
              className="remove"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h2 className="total">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;