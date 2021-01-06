import React, {useContext, useState} from "react"
import {Context} from "../Context"

function Cartitem (props){

    const {removeFromCart} = useContext(Context);
    const [hovered, setHovered] = useState(false);
    const deleteClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"



    
    return (

        <div className="cart-item">
            <i className={deleteClass } 
            onClick={() => removeFromCart(props.item.id) } 
            onMouseOver= {() => setHovered(true)} 
            onMouseOut = {() => setHovered (false)}
            
            ></i>
            <img src={props.item.url} width="130px" />
            <p>$5.99</p>
       </div>
    )
}


export default Cartitem