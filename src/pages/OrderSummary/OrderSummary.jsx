import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "../../hooks";
import "./order-summary.css";
import { CartProductCard } from "../../components";
import { useCartWishlist } from "../../context";
import { Link } from "react-router-dom";

export function OrderSummary() {
  const { width, height } = useWindowSize();
  const {
    cartWishlist: { orders },
  } = useCartWishlist();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={800}
        recycle={false}
      />
      <div className='order-summary-container'>
        <h1 className='text-primary text-center'>Order Summary</h1>
        <main className='order-summary-main'>
          <section className='card-summary'>
            <h3 className='text-order-msg text-center'>
              Order Placed Successfully
            </h3>
            <h4 className='text-order-msg text-center'>
              Thank you for shopping with us🎉
            </h4>
            <div className='order-summary-details'>
              <div>
                <p className='pd-ht-1'>
                  <span className='text-bold-500'>Payment ID: </span>
                  {orders?.paymentId}
                </p>
                <p className='pd-ht-1'>
                  <span className='text-bold-500'>Order ID: </span>
                  {orders?.orderId}
                </p>
                <p className='pd-ht-1'>
                  <span className='text-bold-500'>Amount Paid: </span>
                  {orders?.amountPaid}
                </p>
                <h3>Order will be delivered to:</h3>
                <p className='text-md text-bold-500 pd-ht-1'>
                  {orders?.deliveryAddress?.name}
                </p>
                <p className='pd-ht-1'>{orders?.deliveryAddress?.street}</p>
                <p className='pd-ht-1'>
                  {orders?.deliveryAddress?.city},{" "}
                  {orders?.deliveryAddress?.state}
                  {orders?.deliveryAddress?.country},
                  {orders?.deliveryAddress?.pincode}
                </p>
                <p className='pd-ht-1'>
                  Phone number - {orders?.deliveryAddress?.phone}
                </p>
                <Link to='/shop-now'>
                  <button className='btn btn-primary'>Shop more</button>
                </Link>
              </div>

              <div className='order-summary-orders'>
                {orders?.orderedProducts?.map((product) => {
                  return (
                    <CartProductCard key={product._id} product={product} />
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
