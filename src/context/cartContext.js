import { createContext, useContext, useReducer } from "react";
import { useContext } from "react";
const cartInitialState = {
    cartList:[],
    total: 0
}
const cartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer, cartInitialState)
    function addToCart(product){
        updatedList = state.cartList.concat(product);
        updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: updatedList,
            total: updatedTotal
        })
    }
    function removeFromCart(product){
        let  filteredProducts = state.cartList.filter((item)=> item.id !== product.id );
        updatedTotal = state.total - product.price;

        dispatch({
            type:"REMOVE_FROM_CART",
            payload: filteredProducts,
            total: updatedTotal
        })};
    // function clearCart(product){
    //     let updatedList = state.cartList.remove(product);
    //     dispatch({
    //         type:"CLEAR_CART",
    //         payload: updatedList
    //     })
    // }
    function clearCart(){
        dispatch({
            type:"CLEAR_CART",
            payload: {
                products:[],
                total: 0 
            }
        })
    }


    const value ={
        cartList : state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () =>{
    const context = useContext(cartContext);
    return context;
}