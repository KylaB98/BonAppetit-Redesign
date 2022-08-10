import React from "react";
import { Link } from "react-router-dom";
import "../../css/navcss/nav.css";

function Nav() {


  return (
    <div>
      <div className="main-container">
        <h1 className="main-heading-h1">bon appétit</h1>
        <div className="main-heading-props">
          <p className="prop1">NEWSLETTER</p>
          <p className="prop1">SIGN IN</p>
          <p className="prop1">SUBSCRIBE</p>
        </div>
      </div>
      <hr />
      <nav className="nav-container">
        <div className="nav-links">
          <Link className="navs" to="/">Home</Link>
          <Link className="navs" to="/">Recipes</Link>
          <Link className="navs" to="/">Cooking</Link>
          <Link className="navs" to="/">Newsletter</Link>
        </div>
        <input id="input-search" type="text" placeholder='Search for "stir-fry"' disabled/>
      </nav>
    </div>
  );
}

export default Nav;
