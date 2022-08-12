import React from "react";
import Salad from "../../Image/salad.webp";
import "../../css/newslettercss/newsletter.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function Newsletter() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };
  return (
        
    <>
    <Nav/>
        
    <div className="container">
    <div id="first"> 

        <h1>
            Bon App&#233;tit Daily
        </h1>
        <h3>
        Our latest and greatest recepies, articles, and cooking tips, 
        plus weekly letters from our BA editors.
        </h3>
        <br/>

        <form action="/email" method="post">

            <label>
                Enter your e-mail address 
            </label>
            <br/>
            <input type="text" placeholder="Your e-mail address" name="email"/> <br/>
            <input type="submit" value="SIGN UP NOW"/><br/>
            By signing up you agree to our User Agreement and Privacy Policy & Cookie Statement.
        </form>
    </div>
    <div>
        <img id="second" src={Salad}/>
        </div>
        </div>
        <Footer/>
        </>
        
        

  )
}

export default Newsletter;
