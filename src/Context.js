import React, {useState, useEffect} from "react"

const Context = React.createContext();

function ContextProvider (props){

    const [allPhotos , setAllPhotos]  = useState([]);
    const [cartItems, setCartItems]  = useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    useEffect(() => {

        fetch(url).then(res => res.json()).then(data => setAllPhotos(data))

    },[]);

    function toogleFavorite (id){

        const updatedArr = allPhotos.map(photo => {

                if(photo.id === id){

                    console.log(id)
                    
                    console.log(!photo.isFavorite)

                //  {...photo, isFavorite : !photo.isFavourite  }

                photo.isFavorite = !photo.isFavorite;

                }

                return photo;
            
        })

        setAllPhotos(updatedArr)

    }

    function AddToCart(newitem){

        setCartItems(prev => [...prev, newitem])

    }

    function removeFromCart(id){

        setCartItems(prevItems => prevItems.filter( item => item.id !== id))
    }

    function emptyCart (){

        setCartItems([])
    }

   

    return (

        <Context.Provider value = {{allPhotos, toogleFavorite, AddToCart, cartItems, removeFromCart, emptyCart}}>
                {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}