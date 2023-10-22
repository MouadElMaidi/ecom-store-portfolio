import { useContext } from "react";
import styled from "styled-components";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { ProductsContext } from "../context/products_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ProductsContext);

  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} alt="store logo" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <HiOutlineXMark />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeSidebar}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeSidebar}>
              Cart
            </Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    margin-top: 0.2rem;
  }

  /* .logo {
    justify-self: center;
    height: 45px;
  } */

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-bg-accent);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: 1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
