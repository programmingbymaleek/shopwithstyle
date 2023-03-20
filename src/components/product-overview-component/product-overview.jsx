import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductQuickViewContext } from "../../contexts/product-quick-view-context";
import styled from "styled-components";
import CustomButton from "../button.component/button.component";
import MenSize from "../../shoe-sizes-data.json";

import { useState } from "react";
import { act } from "react-dom/test-utils";
import { CreateCartContext } from "../../contexts/cart.context";

function ProductOverView() {
  const [error, setError] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const { productToView, incrementItem, decrementItem } = useContext(
    ProductQuickViewContext
  );
  const { addItemToCart } = useContext(CreateCartContext);

  const isnowClicked = (e) => {
    const setSize = e.target.value;
    productToView.size = setSize;
    setShoeSize(setSize);
    setError("");
  };
  const Navigate = useNavigate();
  const goBackToCollections = () => {
    Navigate("/collections");
  };

  const { name, price, quantity, shoe_id, imageUrl } = productToView;

  const addCartItem = () => {
    if (productToView.size === "") {
      setError("Please select a size");
      return;
    }
    addItemToCart(productToView);
    // Navigate("/checkout-items");
  };

  if (!productToView.shoe_id) {
    return (
      <div>

      </div>
    );
  }
  return (
    <Product_overview_container className="container">
      <div className="product_container" key={shoe_id}>
        <div className="product_image-conatiner">
          <img src={`${imageUrl}`} alt={`${name}`} />
        </div>
        <div className="product_overview">
          <h1>{name}</h1>
          <h2>{`$${price}.00`}</h2>
          <p>$40 OFF your qualifing first order of $20</p>
          <p>Pro price: $members only</p>
          <br />
          <br />
          <p>free shipping </p>
          <p>get it between Thu. feb 2 - Sat. Feb 4 to 'api call'</p>
          <br />
          <br />
          <div className="qantity_adjustment">
            <p className="select">
              Select Quantity: <span className="p-quantity">{quantity}</span>{" "}
            </p>

            <div className="btn_container">
              <button
                className="left"
                onClick={() => {
                  decrementItem(productToView);
                }}
              >
                -
              </button>
              <button>{quantity}</button>
              <button
                className="right"
                type="button"
                onClick={() => {
                  incrementItem(productToView);
                }}
              >
                +
              </button>
            </div>
          </div>
          <br />
          <div>
            {error ? (
              <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
            ) : (
              <p className="select">
                Select Your Size: <span className="p-quantity">{shoeSize}</span>
              </p>
            )}
          </div>
          <div className="size">
            {MenSize.mens.map((size) => (
              <button key={size} onClick={isnowClicked} value={size}>
                {size}
              </button>
            ))}
          </div>
          <div className="addToCart">
            <CustomButton
              type={"button"}
              btn_label={"Add to cart"}
              btntype="inverted"
              onClick={addCartItem}
            />
          </div>
        </div>
      </div>
    </Product_overview_container>
  );
}

export default ProductOverView;

const Product_overview_container = styled.div`

.select{
  color:#7C0F00;
  font-weight:bold;
  
  span{
    font-weight:bold;

    border:none !important;
  }
}

  .product_container {
    padding:2rem 2rem;
    display:flex;
    gap:5%;
    
    .product_image-conatiner{
      max-width:60%; 
      // max-height:60rem;
      img{
        width:100%;
        // height:100%;
        object-fit:fill;
      }
    }
    }
    .size {
      button {
        border: 1px solid black;
        margin: 0.2rem;
        width: 4.5rem !important;
        border-radius:.5rem; 
        :hover{
          background-color:#7C0F00; 
          color:white; 
        }
        :focus{
          background-color: #7C0F00; 
          color:white; 
        }
      }

    }
  }
 
.addToCart{
   margin-top:2rem; 
  
}
  .product_image {
   
  }
  .product_overview {
    button {
      width: 3rem !important;
      height: 3rem !important;
      background: none;
      border:1px solid black; 
    }

    .qantity_adjustment {      
      .btn_container {
      }
      span {
        border: 1px solid green;
        padding: 0.9rem;
      }
      span:focus {
        outline: none;
        box-shadow: none;
      }
      span:hover {
        cursor: pointer;
      }
      .right {
        border-bottom-right-radius: 50%;
        border-top-right-radius: 50%;
        border-left: none;
      }
      .left {
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        border-right: none;
      }
    }
  }

  @media screen and (max-width: 560px) {
    .product_container{
      flex-direction:column; 
    }
    .product_image-conatiner{
      max-width:20rem !important;
      height:20rem;  

      img{
        width:100%;
        height:100%;
        object-fit:fill;
      }
    }
  }
`;
