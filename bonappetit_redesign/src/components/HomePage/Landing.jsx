import React from 'react'
import Categories from "./Categories"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

const Landing = () => {
  return (
    <div className="App">
        <Nav/>
        <Categories />
        <Footer/>
    </div>
  )
}

export default Landing;