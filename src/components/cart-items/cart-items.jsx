import React from "react";
import styled from "styled-components";

function CartItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <div className="cart-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </div>
      </div>
    </CartItemContainer>
  );
}

export default CartItem;

const CartItemContainer = styled.div`
  .cart-item-container {
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
      width: 30%;
    }

    .item-details {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 10px 20px;

      .name {
        font-size: 16px;
      }
    }
  }
`;
