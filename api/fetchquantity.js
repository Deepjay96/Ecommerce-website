import { getcartProductFromLS } from "./getCartProducts"


export const fetchquantity = (id,price) =>{
     let cartproducts = getcartProductFromLS()

     let existingProduct = cartproducts.find((curProd) => curProd.id === id)

     let quantity = 1

     if(existingProduct){
        quantity = existingProduct.quantity
        price = existingProduct.price
     }

   
    

     return { quantity , price }

}

