import React from "react";
import styled from "styled-components";
// import { ReactComponent as Banner } from '../../../assests/pics.jpg';
import "./hero.styles.scss";
import CustomButton from "../../button.component/button.component";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <img
        src={"https://i.postimg.cc/wBxLDcmw/bg-shoes.gif"}
        alt="background"
      />
      <div className="hero-main-container">
        <div className="container">
          <div className="hero-container">
            <div className="hero-header">
              {/* <h2>WILMATECH ENTERPRISE</h2> */}
              <h2>Step into Style with Our Wide Range of Shoes</h2>
            </div>
            <div className="hero-content">
              <p>
                From sleek heels to comfortable sneakers, we've got a shoe for
                every occasion. Our selection features the latest designs and
                trends from top brands, ensuring that you'll always look and
                feel your best. Whether you're dressing up for a special event
                or just running errands, our shoes will elevate any outfit.
                Browse now and find your perfect pair!
              </p>
              <div className="hero-btn">
                <CustomButton
                  btn_label="Shop now"
                  onClick={() => {
                    navigate("./collections");
                  }}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

export default HeroBanner;

const HeroContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }

  .hero-main-container {
    position: absolute;
    top: 12rem;
    width: 100%;
  }

  .hero-container {
    max-width: 37rem;
    padding: 1.5rem;
    height: 32rem;
    // background-color:rgba(207, 203, 195,.5);
    background: linear-gradient(#a6937a, #a6937a 10%, #cfcbc3 100%);
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    .hero-header {
      h2 {
        color: black;
        text-transform: uppercase;
        font-weight: Bold;
        letter-spacing: 0.1rem;
      }
    }
    .hero-content {
      p {
        font-size: 24px;
      }
    }
  }
  .hero-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1800px) {
    .hero-main-container {
      top: 9rem;
      width: 100%;
    }
    .hero-container {
      max-width: 30rem;
      padding: 1rem;
      height: 26rem;

      .hero-content {
        p {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 990px) {
    .hero-main-container {
      top: 9rem;
      width: 100%;
    }
    .hero-container {
      max-width: 30rem;
      padding: 1rem;
      height: 23rem;

      .hero-content {
        p {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 775px) {
    .hero-main-container {
      position: absolute;
      top: 9rem;
      width: 100%;
    }
    .hero-container {
      max-width: 30rem;
      padding: 1rem;
      height: 23rem;

      .hero-content {
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (max-width: 435px) {
    .hero-main-container {
      position: absolute;
      top: 10rem;
      width: 100%;
    }
    .hero-container {
      max-width: 30rem;
      padding: 1rem;
      height: 23rem;

      .hero-content {
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
