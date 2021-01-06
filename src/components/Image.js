import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"



function Image(props){

    const [hovered, sethovered] = useState(false)
    const {toogleFavorite,  AddToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon() {
        if(props.img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toogleFavorite(props.img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toogleFavorite(props.img.id)}></i>
        }
    }
    
    function cartIcon (){

        const alreadyInCart = cartItems.some(item => (item.id == props.img.id));

        if(alreadyInCart){

            return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromCart(props.img.id)}></i>

        }else if (hovered){


          return   <i className="ri-add-circle-line cart" onClick={()=> { AddToCart(props.img)}}></i>
        }

    }
    
    return (

        <div 
        className ={ `${props.className}  image-container `}
        onMouseOver = {() => sethovered(true) }
        onMouseLeave = {() => sethovered(false)}
        
        >
           <img src= {props.img.url} className="image-grid"/>
       {/* { hovered ?  <div>   <i className="ri-heart-line favorite" onClick={() => toogleFavorite(props.img.id)}></i>  <i className="ri-add-circle-line cart" onClick={()=> { AddToCart(props.img)}}></i></div>: ""  } */}
       {heartIcon()}
       {cartIcon()}
         
         {/* {   hovered &&
                <i className="ri-heart-line favorite"></i> 
         }

         {
                hovered &&
                <i className="ri-add-circle-line cart"></i>
        } */}

             
        </div>
    )
}

Image.propTypes = {

    className : PropTypes.string,
    img : PropTypes.shape({

        id : PropTypes.string.isRequired,
        url : PropTypes.string.isRequired,
        isFavorite : PropTypes.bool
    })


}



export default Image