import { useContext } from "react";
import { HiBars2, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProductsContext } from "../context/products_context";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const { openSidebar } = useContext(ProductsContext);

  return (
    <NavContainer>
      <div className="header-center">
        <div className="header-container">
          <div className="nav-links-left">
            <Link to="/products">Shop</Link>
            <div className="vl"></div>
            <form className="search-form">
              <input
                placeholder="search"
                name="nav-text"
                type="text"
                className="search-input"
              />
              <button
                type="submit"
                className="btn-transparent search-btn"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <HiOutlineSearch />
              </button>
            </form>
          </div>
          <button
            type="button"
            className="btn-transparent nav-toggle"
            onClick={openSidebar}
          >
            <HiBars2 />
          </button>
          <Link to="/">
            <img src={Logo} alt="website logo" />
          </Link>
          <div className="nav-links-right">
            <Link to="/about">About</Link>
            <button className="btn-transparent cart-btn">
              <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--clr-bg-accent);
  z-index: 999;

  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.06rem solid #cbcac0;

  .header-center {
    width: 90vw;
    margin: 0 auto;
    /* max-width: var(--max-width); */
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-btn svg,
  .nav-toggle svg {
    font-size: 2rem;
  }

  .nav-links-left {
    display: none;
  }

  .nav-links-right a {
    display: none;
  }

  @media (min-width: 1000px) {
    .header-center {
      width: 100vw;
    }

    .nav-toggle {
      display: none;
    }

    .header-container {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      justify-items: center;
      align-items: center;
    }

    .nav-links-left {
      justify-self: stretch;
      display: flex;
      justify-items: center;
      align-items: center;
    }

    .nav-links-left a {
      padding: 0 30px;
    }

    .vl {
      border-left: 0.06rem solid #cbcac0;
      height: 5rem;
    }

    .search-input {
      width: 15rem;
      padding: 0.4rem 0;
      background-color: transparent;
      border-bottom: 0.06rem solid #cbcac0;
    }
    .search-input::placeholder {
      text-transform: capitalize;
    }

    .search-form {
      position: relative;
      margin-left: 10px;
    }

    .search-btn {
      position: absolute;
      right: 0;
      top: 4px;
      color: #757575;
    }

    .search-btn svg {
      font-size: 1rem;
    }

    .nav-links-right {
      justify-self: end;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .nav-links-right a {
      display: inline-block;
    }

    .cart-btn {
      padding: 0 30px;
    }
  }
`;

export default Navbar;
