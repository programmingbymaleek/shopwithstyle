import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CollectionCard from "../collection-card/collection-card.component";

import { useSelector } from "react-redux";

function ShoeGroup() {
  const { group } = useParams();

  console.log(`from the ${group} page`);
  const productCollections = useSelector((state) => state.products.products)

  const [product, setProduct] = useState(productCollections[group]);
  console.log("from shoe group component");
  console.log(productCollections[group]);

  const [message, setMessage] = useState("searching...");

  const Navigate = useNavigate();

  function timer() {
    setTimeout(() => {
      setMessage("No item Found");
    }, 5000);
  }

  useEffect(() => {
    setProduct(productCollections[group]);
  }, [productCollections, group]);
  return (
    <Collections_Cards>
      {product ? (
        <div className="container">
          {/* <p className="back">...../backto collections</p> */}
          <div className="arrow_holder">
            <span
              className="backArrow"
              onClick={() => {
                Navigate("../../collections");
              }}
            >
              {" "}
              <span class="material-symbols-outlined">arrow_back</span>
            </span>
            <span>go back to collections</span>
          </div>
          {
            <div className="group_title">
              <p>
                <span className="changeFont">{group.toLocaleUpperCase()}</span>
              </p>
              <div className="collections-container">
                {productCollections[group].map((shoe) => (
                  <div key={shoe.shoe_id}>
                    <CollectionCard products={shoe} />
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="list-container">
          {timer()}
          <div>
            <p>{message} </p>
            {message === "No item Found" ? (
              <p
                className="back"
                onClick={() => {
                  Navigate("../");
                }}
              >
                .....return back to collections{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </Collections_Cards>
  );
}

export default ShoeGroup;

const Collections_Cards = styled.div`
.arrow_holder{
  display:flex;
  gap:.5rem; 
  position:fixed;  
}
.backArrow{
  display:flex; 
  width:2rem;
  height:2rem; 
  justify-content:center; 
  align-items:center; 
  background-color:#212529; 
  border-radius:50%; 
  color:white; 
  z-index:20;  
  :hover{
    cursor:pointer; 
  
    background-color:green; 
  }

}
.changeFont{
  font-family: 'Ubuntu', sans-serif;
}
  .list-container {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 24px;
      color: red;
      font-weight: 500;
      text-align:center; 
    }
    .back{
      color:green;
    }
    .back:hover {
      color: blue;
      cursor: pointer;
    }
  }
  .group_title {
    margin: 2rem 0;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    span:hover {
      cursor: pointer;
    }
  }
  .collections-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    font-weight: normal;
  }

  @media screen and (max-width: 990px) {
    .collections-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      font-weight: normal;
    }
  }

  @media screen and (max-width: 590px) {
    .collections-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      font-weight: normal;
    }
`;
