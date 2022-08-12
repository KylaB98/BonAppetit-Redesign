import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "../../css/cookingcss/cooking.css";
import pic1 from "../../img/pic1.webp";
import pic2 from "../../img/pic2.webp";
import pic3 from "../../img/pic3.webp";
import pic4 from "../../img/pic4.webp";
import pic5 from "../../img/pic5.webp";
import pic6 from "../../img/pic6.webp";

function Cooking() {
  return (
    <>
      <Nav />
      <section className="banner">
        <h1>Cooking</h1>
        <h3>Tips, tricks, and techniques</h3>
      </section>

      <div className="cooking-section">
        <div className="cooking-articles">
          <img src={pic1} alt="" />
          <div className="cooking-para">
            <p>COOKING</p>
            <a href="https://www.bonappetit.com/story/cheap-tofu-scramble">
              <h4>I Make This Thrifty Tofu Scramble at Least Once a Week</h4>
            </a>
            <h5>Tasty, Cheap, and pantry-friendly</h5>
          </div>
        </div>
        <hr />
        <div className="cooking-articles">
          <img src={pic2} alt="" />
          <div className="cooking-para">
            <p>COOKING</p>
            <a href="https://www.bonappetit.com/story/mums-easy-berry-pie">
              <h4>My Mum's Little Berry Pies Are the Laziest Summer Dessert</h4>
            </a>
            <h5>Let puff pastry and jam do all the</h5>
          </div>
        </div>
        <hr />
        <div className="cooking-articles">
          <img src={pic3} alt="" />
          <div className="cooking-para">
            <p>COOKING</p>
            <a href="https://www.bonappetit.com/story/tomato-egg-stir-fry">
              <h4>If You Have Eggs and Tomatoes, You Have Dinner</h4>
            </a>
            <h5>
              Servers it hot, cold, or cold, or at room temp, for any meal of
              the day
            </h5>
          </div>
        </div>
        <hr />
        <div className="cooking-articles">
          <img src={pic4} alt="" />
          <div className="cooking-para">
            <p>COOKING</p>
            <a href="https://www.bonappetit.com/story/recipes-ba-editors-cooked-august-2022">
              <h4>The Best Dishes Bon Appétit Staffers Cooked This Week</h4>
            </a>
            <h5>A tomato sandwich is a must.</h5>
          </div>
        </div>
        <hr />
        <div className="cooking-articles">
          <img src={pic5} alt="" />
          <div className="cooking-para">
            <p>COOKING</p>
            <a href="https://www.bonappetit.com/story/how-to-cut-a-mango">
              <h4>How to Cut a Mango (Yes, Including the Hedgehog Method)</h4>
            </a>
            <h5>For salads, smoothies, salads, and, of course, snacking.</h5>
          </div>
        </div>
        <div className="cooking-articles">
          <img src={pic6} alt="" />
          <div className="cooking-para">
            <p>COOKING</p>
            <a href="https://www.bonappetit.com/story/how-to-pit-peaches-with-pliers">
              <h4>Pitting Peaches With Pliers Actually Works Like a Charm</h4>
            </a>
            <h5>
              Peach pies, cobblers, and galettes just got a whole lot easier.
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cooking;
