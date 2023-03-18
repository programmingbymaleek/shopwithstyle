import React from "react";
import styled from "styled-components";
import CustomButton from "../button.component/button.component";
import { useContext } from "react";
import { CreateCartContext } from "../../contexts/cart.context";
import CartItem from "../cart-items/cart-items";
import { useNavigate } from "react-router-dom";

function CartDropDown() {
  const { cartItems } = useContext(CreateCartContext);

  const navigate = useNavigate();

  const gotoCheckoutPage = () => {
    navigate("/checkout-items");
  };

  return (
    <CartDropDownContainer>
      <div className="container">
        <div className="cart-dropdown-container">
          <div className="cart-items">
            {cartItems.map((cartItem) => {
              return (
                <div key={cartItem.id}>
                  <CartItem cartItem={cartItem} />
                </div>
              );
            })}
          </div>
          <CustomButton btn_label={"go to cart"} onClick={gotoCheckoutPage} />
        </div>
      </div>
    </CartDropDownContainer>
  );
}

export default CartDropDown;

const CartDropDownContainer = styled.div`
  .container {
    position: relative;
  }
  .cart-dropdown-container {
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    right: 0rem;

    z-index: 5;

    .empty-message {
      font-size: 18px;
      margin: 50px auto;
    }

    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }

    button {
      margin-top: auto;
    }
  }
`;
