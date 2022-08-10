import React from "react";
import "../../css/footercss/footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <div className="bg">
          <div className="footer-container">
            {/* Para */}
            <div className="para">
              <h3>
                Recipes you want to make. Cooking advice that works. Restaurant
                recommendations you trust.
              </h3>
            </div>
            {/* Para */}

            {/* Footer Header / Icons */}
            <div className="footer-header">
              <h1>bon appétit</h1>

              <section className="icons">
                <a
                  className="icon-links"
                  id="facebook"
                  href="https://www.facebook.com/bonappetitmag">
                  <FaFacebookF />
                </a>
                <a
                  className="icon-links"
                  id="twitter"
                  href="https://twitter.com/bonappetit/">
                  <FaTwitter />
                </a>
                <a
                  className="icon-links"
                  id="pinterest"
                  href="https://www.pinterest.com/bonappetitmag/">
                  <FaPinterestP />
                </a>
                <a
                  className="icon-links"
                  id="instagram"
                  href="https://www.instagram.com/bonappetitmag/">
                  <GrInstagram />
                </a>
                <a
                  className="icon-links"
                  id="youtube"
                  href="https://www.youtube.com/channel/UCbpMy0Fg74eXXkvxJrtEn3w">
                  <AiFillYoutube />
                </a>
              </section>
            </div>
            {/* Footer Header / Icons */}

            {/* Links */}
            <div className="nav-links-2">
              <Link className="navs" to="/">
                Home
              </Link>
              <Link className="navs" to="/">
                Recipes
              </Link>
              <Link className="navs" to="/">
                Cooking
              </Link>
              <Link className="navs" to="/">
                Newsletter
              </Link>
            </div>
            {/* Links */}
          </div>

          {/* Copyright */}
          <hr />
          <div className="footer-copyright">
            <p>© 2022 bon appétit Redesign</p>
          </div>
          {/* Copyright */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
