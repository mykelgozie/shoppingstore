import React, {useContext, useState} from "react"
import { Context } from "../Context"
import  Cartitem  from "../components/Cartitem"

function Cart(){

    const { cartItems, emptyCart } = useContext(Context);
    const [textButton , setTexButton] = useState("Place Order")
   

    
    console.log(cartItems)

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-Us",  {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(prev => (

        <Cartitem key={prev.id} item = {prev} > </Cartitem>
    ))

    function PlaceOrder(){

        setTexButton("Ordering....")
        setTimeout(()=>{

            setTexButton("Placed order")
            emptyCart()


        }, 3000)
    }
    
    return (

        <main className= "cart-page">
            <h1>Check Out</h1>

            {cartItemElements}

            <p className="total-cost">Total:{totalCost} </p>
            {
        
        cartItems.length > 0 ?

            <div className="order-button">
    <button onClick = {()=>PlaceOrder() }>{textButton}</button>
            </div> :

            <p>You have No Item In your cart</p>

            }
        </main>
    )
}

export default Cart 