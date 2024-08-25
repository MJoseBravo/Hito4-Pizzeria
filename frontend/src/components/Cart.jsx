import React, { useState } from 'react'
import pizzaCart from './pizzas'
import CartItem from './cartItem'

const Cart = () => {
    const [buyPizza, setBuyPizza] = useState(pizzaCart) 
    const [countPizzas, setCountPizzas] = useState({})
    const [total, setTotal] = useState(0)


    const totalPizzas = {}
    const addTotalPizza = (id, total) => {
        totalPizzas[id] = total
        const totalValues = Object.values(totalPizzas)
        let tempTotal = totalValues.reduce(
            (acc, amount)=> acc + amount, 0
        ) 
        setTotal(tempTotal)
    }

  return (
    <>
    <h3 className='mt-3'>Carro de Compras</h3>
    <div>
        {buyPizza.map(purchased => (
            <CartItem 
                key={purchased.id}
                id={purchased.id}
                name={purchased.name}
                price={purchased.price}
                img={purchased.img}
                cantidadActual={1}
                addTotalPizza={addTotalPizza}
            />
        ))}
        <div className='total-carrito mt-5'>
            <h4>Total: ${numberWithCommas(total)} </h4>
            <button className='btn btn-info'>Pagar</button>
        </div>
       
    </div>
    </>
  )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Cart