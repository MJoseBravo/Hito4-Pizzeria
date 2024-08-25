import React, { useState } from "react"
import Home from "./components/Home"
// import FormularioRegistro from "./components/Register"
// import FormularioLogin from "./components/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import Header from "./components/Header"
//import Cart from "./components/Cart"
import pizzas from "./components/pizzas"
import Pizza from "./components/Pizza"

function App () {
  const [allPizzas, setAllPizzas] = useState(pizzas)
  const [total, setTotal] = useState(0)
  const [countPizzas, setCountPizzas] = useState(1)
  
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <FormularioRegistro/> */}
       {/* <FormularioLogin />  */}
      {/* <Cart 
        allPizzas={allPizzas}
        setAllPizzas={setAllPizzas}
        /> */}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App