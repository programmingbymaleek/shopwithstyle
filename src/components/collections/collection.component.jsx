import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Product_Context } from "../../contexts/product.context.component";
import CollectionCard from "../collection-card/collection-card.component";
import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Collections() {
  const { productCollections } = useContext(Product_Context);
  console.log("From collection componet..");

  return (
    <Collections_Cards className="container">
      {Object.keys(productCollections).map((title) => (
        <div key={title} className="group_title">
          <p>
            <Link to={title} className="linkTitle">
              {title.toUpperCase()}
            </Link>
          </p>
          <div className="collections-container">
            {productCollections[title]
              .filter((_, indexes) => indexes < 4)
              .map((shoe) => (
                <div key={shoe.shoe_id}>
                  <CollectionCard products={shoe} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </Collections_Cards>
  );
}

export default Collections;

const Collections_Cards = styled.div`
  .linkTitle {
    font-family: "Ubuntu", sans-serif;
    text-decoration: none;
    color: black;
    :hover {
      color: blue;
      text-decoration: underline;
    }
  }
  .group_title {
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
  }
`;
