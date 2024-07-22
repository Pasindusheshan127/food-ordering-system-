import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItem, removeFromCart, getTotalCardAnount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="cart">
        <div className="cart-item">
          <div className="cart-item-title">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />

          {food_list.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <div>
                  <div className="cart-item-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCardAnount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delevery Fee</p>
                <p>${getTotalCardAnount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTotalCardAnount() === 0 ? 0 : getTotalCardAnount() + 2}
                </b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promo-code">
            <div>
              <p>If you have a promo code, enter it here</p>
              <div className="cart-promo-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
