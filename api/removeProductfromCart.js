import { getcartProductFromLS } from "./getCartProducts"

export const removeProductfromCart = (id)  => {
    let cartProducts = getcartProductFromLS()

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id)

    localStorage.setItem("cartProductLs", JSON.stringify(cartProducts))

    let removeDiv = document.getElementById(`card${id}`)

    if(removeDiv){
        removeDiv.remove()
    }

    updateCartValue(cartProducts)

}


