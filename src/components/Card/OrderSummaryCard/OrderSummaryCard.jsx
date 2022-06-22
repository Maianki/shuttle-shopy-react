import React from "react";
import {
  calculateTotalAmount,
  calculateTotalDiscount,
  calculateDeliveryCharges,
} from "../../../utils/cartAndWishlistFunctions";
import "./order-summary-card.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { initializeRazorpay } from "../../../utils/initializeRazorpay";
import { useAddress, useSnackbar, useCartWishlist } from "../../../context";
import { v4 as uuid } from "uuid";

export function OrderSummaryCard() {
  const {
    cartWishlist: { cart },
    cartWishlistDispatcher,
    emptyCart,
  } = useCartWishlist();

  const { addSnackbar } = useSnackbar();

  const {
    address: { currentAddress },
  } = useAddress();

  const totalPrice = calculateTotalAmount(cart);
  const totalDiscount = calculateTotalDiscount(cart);
  const deliveryCharges = calculateDeliveryCharges(totalPrice);

  const totalAmount =
    totalPrice - (totalPrice - totalDiscount) + deliveryCharges;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const displayRazorpay = async (amount) => {
    const res = await initializeRazorpay();
    if (!res) {
      console.log("You are offline... Failed to load Rzorpay SDK.");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      currency: "INR",
      amount: amount * 100,
      name: "Shuttle Shopy",
      description: "Test transaction",
      handler: function (response) {
        const paymentId = response?.razorpay_payment_id;
        const orderId = uuid();

        const order = {
          paymentId,
          orderId,
          amountPaid: amount,
          orderedProducts: [...cart],
          deliveryAddress: { ...currentAddress },
        };
        cartWishlistDispatcher({ type: "UPDATE_ORDERS", payload: order });
        emptyCart();
        navigate("/summary", { replace: true });
      },
      prefill: {
        name: "shuttle shopy",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", () =>
      addSnackbar(`Payment failed please try again!`, "snackbar-danger")
    );
    paymentObject.open();
  };

  return (
    <div
      className={
        pathname === "/checkout"
          ? `card-order-summary`
          : `card card-order-summary`
      }
    >
      <div className='card-header'>
        <h2 className='text-primary text-center'>
          {pathname === "/checkout" ? `PRICE DETAILS` : `ORDER SUMMARY`}
        </h2>
      </div>
      <div className='card-body'>
        <ul>
          <li className='list-unstyled order-price order-item flex-row'>
            <p className='order-item-text'>Price ({cart.length} Items)</p>
            <p className='order-item-text'>&#8377; {totalPrice}</p>
          </li>
          <li className='list-unstyled order-discount order-item flex-row'>
            <p className='order-item-text'>Discount</p>
            <p className='order-item-text text-primary order-summary-htext'>
              - &#8377; {totalPrice - totalDiscount}
            </p>
          </li>
          <li className='list-unstyled order-delivery-charge order-item flex-row'>
            <p className='order-item-text'>Delivery Charges</p>
            <p className='order-item-text order-summary-htext'>
              {deliveryCharges ? <span>- &#8377;</span> : ""}
              {deliveryCharges ? deliveryCharges : `FREE`}
            </p>
          </li>
          <li className='list-unstyled order-item flex-row total-price'>
            <p className='text-bold-500'>TOTAL AMOUNT</p>
            <p className='text-bold-500'>&#8377; {totalAmount}</p>
          </li>
        </ul>
      </div>
      <div className='card-footer'>
        <p className='text-sm text-center text-highlight'>
          * You will save &#8377; {totalPrice - totalAmount} on this order
        </p>
        {pathname === "/cart" ? (
          <Link to='/checkout'>
            <button className='card-btn btn btn-primary'>
              <span className='md-ht-1'>PLACE YOUR ORDER</span>
            </button>
          </Link>
        ) : (
          <button
            className='card-btn btn btn-primary'
            onClick={() => displayRazorpay(totalAmount)}
          >
            <span className='md-ht-1'>PROCEED TO PAY</span>
          </button>
        )}
      </div>
    </div>
  );
}
