import React from "react";
// import { useContext } from "react";
// import { CreateCartContext } from "../../contexts/cart.context";
import { MdDeleteForever } from "react-icons/md"
import { GrFormAdd, GrFormSubtract } from "react-icons/gr"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deletCartItem, incrementCartItem, decrementCartItem, addItemsTocart } from "../../reduxtk/features/cart/cartSlice";

function ItemToCheckOut({ item }) {
  const dispatch = useDispatch()
  const { name, imageUrl, quantity, price, id, size } = item;
  return (
    <ProductCheckOutContainer>
      <div className="main-product">
        <div className="image-content">
          <div className="image_container">
            <img src={imageUrl} alt={`${name}`} />
          </div>

          <div className="description">
            <p className="item-name">{name}</p>
            <p>item # {id}</p>
            <p>Size: {size}</p>
          </div>
        </div>
        <div className="description1">
          <p className="item-name">{name}</p>
          <p>item # {id}</p>
          <p>Size: {size}</p>
          <div className="product-quanity">quantity: {quantity}</div>
          <div className="total"> total: {price}</div>
        </div>
        <div className="product-quanity phidden">
          <span
            onClick={() => {
              dispatch(decrementCartItem(item));
            }}
          >
            <GrFormSubtract className="icons" />
          </span>
          <span className="itemQ">{quantity}</span>
          <span
            onClick={() => {
              dispatch(incrementCartItem(id));
            }}
          >
            <GrFormAdd className="icons" />
          </span>
        </div>
        <div className="price phidden">{price}</div>
        <div className="total phidden">
          {name}{" "}
          <span
            style={{ marginLeft: "3rem" }}
            onClick={() => {
              dispatch(deletCartItem(item));
            }}
          >
            <MdDeleteForever className="icons" />
          </span>
        </div>
      </div>

      {/* <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
          <span
            className="pointer"
            onClick={() => {
              decrementItem(item);
            }}
          >
            &#60;
          </span>
          <span className="q">{quantity}</span>
          <span
            className="pointer"
            onClick={() => {
              incrementItem(item);
            }}
          >
            &#62;
          </span>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              decrementItem(id);
            }}
          >
            delete
          </span>
        </div>
      </div> */}
    </ProductCheckOutContainer>
  );
}

export default ItemToCheckOut;

const ProductCheckOutContainer = styled.div`
.itemQ{
  padding:0 1rem;
}
.icons{
  font-size:1.5rem; 
  :hover{
    cursor:pointer; 
  }
}
  .description1 {
    display: none;
  }
  .description {
    padding: 0 1rem;
    .item-name {
      font-weight: normal;
      font-size: 20px;
      text-transform: capitalize;
    }
  }
  .main-product > * {
    flex-basis: 5rem;
    padding: 0;
  }
  .main-product {
    margin: 1rem;
    display: flex;
    .image-content {
      display: flex;
      flex-grow: 3;
      .image_container {
        max-width: 10rem;
        img {
          width: 100%;
        }
      }
    }
    .product-quanity {
      flex-grow: 1;
      margin-left: 1rem;
    }
    .price {
      flex-grow: 1;
    }
    .total {
      flex-grow: 1;
    }
  }

  // media queries

  @media screen and (max-width: 775px) {
    .product-quanity {
      margin-left: 0rem !important;
    }
    .phidden {
      display: none;
    }
    .image_container {
      width: 10rem;
    }
    .main-product {
      display: flex;
      gap: 1rem;
    }
    .main-product > * {
      flex: 1 !important;
    }
    .description {
      display: none;
    }
    .description1 {
      display: block;
    }
  }
`;
