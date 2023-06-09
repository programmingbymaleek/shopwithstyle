import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { useContext } from "react";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CartIcon } from "../../assests/shopping-cart.svg";
import CartDropDown from "../../components/cart-dropdown.component/cart-dropdown";
// import { CreateCartContext } from "../../contexts/cart.context";
import Logo from "../../assests/wilmatech_logo_1.png";
import { useSelector, useDispatch } from "react-redux";
import { setToogleCart, } from "../../reduxtk/features/cart/cartSlice";


function Navigation() {
  const dispatch = useDispatch();
  const { toggleCart, count } = useSelector((state) => state.cart);
  const Navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const toggleCartContainer = () => {

    dispatch(setToogleCart(!toggleCart))
  };
  return (
    <NavigationContainer>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav-conatiner"
      >
        <Container>
          <Navbar.Brand
            onClick={() => {
              Navigate("/shopwithstyle");
            }}
          >
            <div className="logoContainer">
              {" "}
              <img src={Logo} alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link
                onClick={() => {
                  Navigate("/shopwithstyle/collections");
                }}
              >
                Collections
              </Nav.Link>
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <Nav.Link
                  className="custom-nav-links"
                  style={{ color: "blue" }}
                  onClick={() => {
                    Navigate("../shopwithstyle/collections/men");
                  }}
                >
                  Men's Shoes
                </Nav.Link>
                <Nav.Link
                  className="custom-nav-links"
                  onClick={() => {
                    Navigate("../shopwithstyle/collections/women");
                  }}
                >
                  Women's Shoes
                </Nav.Link>
                <Nav.Link
                  className="custom-nav-links"
                  onClick={() => {
                    Navigate("../shopwithstyle/collections/kids");
                  }}
                >
                  Kid's Shoes
                </Nav.Link>
              </NavDropdown>
              {currentUser ? (
                <Nav.Link
                  onClick={() => {
                    SignOutUser();
                  }}
                >
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => {
                    Navigate("/shopwithstyle/authentication");
                  }}
                >
                  Sign In
                </Nav.Link>
              )}

              <Nav.Link eventKey={2}>
                <div className="cart-icon-container">
                  <CartIcon
                    className="shopping-icon"
                    onClick={toggleCartContainer}
                  />
                  {count > 0 ? (
                    <span className="item-count">{count}</span>
                  ) : (
                    ""
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {toggleCart && <CartDropDown />}
      <Outlet />
    </NavigationContainer>
  );
}

export default Navigation;

const NavigationContainer = styled.div`
  .nav-conatiner {
    min-height: 10vh;
    font-size: 20px;
  }
  .logoContainer {
    width: 14rem;
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .logoContainer:hover {
    cursor: pointer;
  }

  .custom-nav-links {
    color: #212529 !important;
  }
  .custom-nav-links:hover {
    background-color: #212529;
    color: white !important;
  }

  .cart-icon-container {
    .item-count {
      position: absolute;
      text-align: center;
      top: 6px;
      right: -3px;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      background-color: yellow;
      color: black;
      font-size: 14px !important;
      padding-top: 0.19rem;
    }
    width: 45px;
    height: 45px;
    top: -0.6rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .shopping-icon {
      width: 34px;
      height: 34px;
    }

    .shopping-icon:hover {
      color: white !important;
    }

    .item-count {
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
    }
  }
`;
