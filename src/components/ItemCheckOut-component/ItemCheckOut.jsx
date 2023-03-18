import React, { Fragment } from "react";
import { useContext } from "react";
import { CreateCartContext } from "../../contexts/cart.context";
import ItemToCheckOut from "../itemToCheckout.component/itemTocheckout";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ItemCheckOut() {
  const { cartItems, total } = useContext(CreateCartContext);

  const NavigateToCollections = useNavigate();

  const coupon = () => {
    alert("No coupon avalible at this time");
  };
  const promotion = () => {
    alert("no promotion ongoing at this time check back later");
  };

  const [sticky, setSticky] = useState();
  // adding the scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
      console.log(window.screenY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <CheckoutContainer>
      {cartItems.length < 1 ? (
        <div className="container noItem-container">
          <h1>Your shopping cart is empty</h1>
          <p
            onClick={() => {
              NavigateToCollections("/collections");
            }}
          >
            ..continue shopping
          </p>
        </div>
      ) : (
        <div className="container">
          <div className={`${sticky ? "sticky" : ""}`}>
            <div className="checkout-header">
              <h1>Shopping Cart</h1>
            </div>
            <div className="checkout-options">
              <div className="paypal">PayPal</div>
              <div className="checkout">checkout</div>
            </div>
          </div>
          <div className="product-header">
            <p className="p-product">Product</p>
            <p className="p-quantity">Quantity</p>
            <p className="p-price">Price</p>
            <p className="p-total">Total</p>
          </div>
          <div className="main-class">
            {" "}
            {cartItems.map((cartItem) => {
              return (
                <div key={cartItem.id}>
                  <ItemToCheckOut item={cartItem} />
                </div>
              );
            })}
          </div>
          <div className="checkout-sub-header">
            <div className="checkout-sub-title">
              Purchase <span>$35.02</span> more and recive Free Standard
              Shipping
            </div>
          </div>

          <div className="shipping-footer">
            {" "}
            <div className="coupon">
              <form action="">
                <input type="text" placeholder="Enter coupon code" />
                <button type="button" onClick={coupon}>
                  Apply
                </button>
              </form>
              <button type="button" onClick={promotion}>
                View Active promotions
              </button>
            </div>
            <div className="cartTotal">
              <div>
                {" "}
                <div className="subtotal b-bold">Subtotal</div>
                <div className="subtotal-amount">${total}</div>
              </div>
              <div>
                {" "}
                <div className="shipping-header">Shipping Standard</div>
                <div className="subtotal-amount">$({total / 10})</div>
              </div>
              <div>
                {" "}
                <div className="tax-header">Sale Tax</div>
                <div className="subtotal-amount">$({total / 15})</div>
              </div>
              <hr />
              <div>
                {" "}
                <div className="order-total b-bold">Order Total</div>
                <div className="order-amount">${total}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </CheckoutContainer>
  );
}

export default ItemCheckOut;

const CheckoutContainer = styled.div`
  .noItem-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20vh;
    min-height: 40vh;
    border-top: 5px solid #212529;
    border-bottom: 5px solid #212529;
    letter-spacing: 0.3rem;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      font-size: 24px;
      color: green;
      font-weight: 500;
    }
    p:hover {
      color: blue;
      cursor: pointer;
    }
  }
  .coupon button {
    width: 17rem;
    padding: 0.3rem;
    background-color: #6db33e;
    color: white;
    text-transform: uppercase;
    border: none;
  }
  .coupon form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      width: 17rem;
      padding: 0.5rem;
    }
    button {
      width: 8rem;
      background-color: black;
      text-transform: uppercase;
    }
  }
  .shipping-footer {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
  }
  .shipping-footer > * {
    flex-basis: 30rem;
  }
  .cartTotal > * {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
  }
  .b-bold {
    font-weight: bold;
  }
  .sticky {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #212529;
    padding: 1rem 1rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    h1 {
      color: white;
    }
  }
  // .main-class > *:last-child {
  //   border-bottom: none;
  // }
  .main-class > * {
    border-bottom: 1px solid black;
  }

  .checkout-options {
    max-width: 100%;
    display: flex;
    justify-content: end;
    gap: 0.5rem;
  }
  .checkout-options > * {
    flex-basis: 10rem;
    padding: 0.5rem;
    text-align: center;
    :hover {
      cursor: pointer;
    }
  }

  .paypal {
    background-color: #006fb9;
    color: white;
    font-weight: bold;
  }
  .checkout {
    background-color: #6db33e;
    text-transform: capitalize;
    color: white;
    font-weight: thin;
  }

  .product-header > * {
    margin: 0.4rem;
    font-size: 1rem;
    padding: 0.5rem;
    flex-basis: 5rem;
  }
  .checkout-sub-header {
    display: flex;
    background-color: #e5e9f4;
    font-size: 1rem;
    margin-top: 1rem;
    justify-content: center;

    .checkout-sub-title {
      padding: 0.5rem 0;
      span {
        color: red;
      }
    }
  }
  .product-header {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    text-transform: uppercase;
    background-color: #e5e9f4;
  }
  .p-product {
    flex-grow: 3;
    color: green;
  }

  .p-quantity {
    flex-grow: 1;
  }

  .p-price {
    flex-grow: 1;
  }

  .p-total {
    flex-grow: 1;
  }
  // media queries

  @media screen and (max-width: 990px) {
    .shipping-footer {
      flex-direction: column-reverse;
      gap: 1rem;
    }
    .shipping-footer > * {
      flex-basis: 0rem !important;
    }
    .coupon button {
      width: 100%;
      padding: 0.3rem;
      background-color: #6db33e;
      color: white;
      text-transform: uppercase;
      border: none;
    }
  }

  @media screen and (max-width: 775px) {
    .shipping-footer {
    }
    .product-header {
      display: none;
    }
  }
`;
