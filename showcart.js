import products from "./api/products.json"
import { getcartProductFromLS } from "./api/getCartProducts"
import  {fetchquantity}  from "./api/fetchquantity"
import { removeProductfromCart } from "./api/removeProductfromCart"

let cartProducts =  getcartProductFromLS()

let filterproducts = products.filter((curProd) => {
            return cartProducts.some((curElem) => curElem.id === curProd.id)
})

console.log(filterproducts)



// to update the addtocart page 


const cartElement = document.querySelector("#productCartContainer")

const templateContainer = document.querySelector("#productCartTemplate")

const showCartProduct  = () =>{
          filterproducts.forEach((curProd)=>{
            const { category , id, image , name , stock , price} = curProd

            const LSActualData  = fetchquantity(id,price)


            const productClone = document.importNode(templateContainer.content , true)

            productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`)

            productClone.querySelector(".category").textContent = category

            productClone.querySelector(".productName").textContent = name

            productClone.querySelector(".productImage").src = image

            productClone.querySelector(".productQuantity").textContent = LSActualData.quantity

            productClone.querySelector('.productPrice').textContent = LSActualData.price

            productClone.querySelector(".remove-to-cart-button").addEventListener('click',() => removeProductfromCart(id))

            cartElement.appendChild(productClone)

          })

         

}

showCartProduct()




















