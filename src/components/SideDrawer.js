import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  //const sidedrawerClass = ["sidedrawer"];
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  // Mettre le nombre des produits dans le panier du client
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(qty + item.qty), 0);
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
