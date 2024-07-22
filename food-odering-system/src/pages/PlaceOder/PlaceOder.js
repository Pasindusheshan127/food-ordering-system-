import { useContext } from "react";
import "./PlaceOder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOder = () => {
  const { getTotalCardAnount } = useContext(StoreContext);
  return (
    <form className="place-oder">
      <div className="place-oder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feild">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-feild">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-feild">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-oder-right">
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
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCardAnount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOder;
