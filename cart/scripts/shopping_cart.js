import headerContainer from "../../components/header.js";
import footerContainer from "../../components/footer.js";
import { getCart, deleteById, setCart } from "../../helpers/session_cart.js";

document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);

const itemContainer = document.getElementById("itemsContainer");
const shoppingCart = document.getElementById("shoppingCart");
const clearCartBtn = document.querySelector('.clear-cart');
const totalCartBtn = document.querySelector('.cart-total');


let applyBtn = document.getElementById('apply');
let proceedToPayBtn = document.getElementById('proceedToPay');

function GetToCheckoutPage(){
  window.location.href = "checkout.html";
}

proceedToPayBtn.addEventListener("click", GetToCheckoutPage);

let cart = [{"id": 2,
"name": "Smart Plug",
"description": "Turn any device into a smart device with this easy-to-use smart plug.",
"price": 24.99,
"imageUrl": "#",
"category": "plug"}];

// cart = getCart();

//getting products
// class Products {
//     async getProducts() {
//     try {
//         let result = await fetch ("/assets/smart_lights.json");
//         let data = await result.json();
//         return data;
//         } catch(error) {
//         console.log(error);
//     }
// }
// }

//display products
class UI {
    displayProducts(products) {
    console.log(products);
    let result = '';
    products.forEach(product => {
        result += `
        <div id="itemsContainer" class="text-center">
            <div class="card rounded-3 mb-4" id="shoppingCart">
                          <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                        <img src="${product.imageUrl}"
                                      class="img-fluid rounded-3" alt="Product-image">
                                    </div>
                                  
                                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        <button class="btn btn-link px-2"
                                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                        <i class="fas fa-minus"></i>
                                        </button>
                    
                                        <input id="form1" min="0" name="quantity" value="2" type="number"
                                        class="form-control form-control-sm" />
                    
                                        <button class="btn btn-link px-2"
                                        <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">$ ${product.price}</h5>
                                  </div>
                                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                                  </div>
                                </div>
                            </div>
            </div>
        </div>

        `;
        shoppingCart.innerHTML = result;
    });
    }
}

const ui = new UI();
ui.displayProducts(cart);
//local storage
// class LocalStorage {
//     static saveProducts(products) {
//         localStorage.setItem('products', JSON.stringify(products));
//     }
// }

// document.addEventListener(, () => {
//     const ui = new UI();
//     const products = new Products();

//     //get all products
//     products.getProducts().then(data => console.log(data));  
//     products.getProducts().then(products => {
//         ui.displayProducts(products);
//         LocalStorage.saveProducts(products)
//     });
// })

// const urls = [
//     "http://127.0.0.1:5501/assets/smart_lights.json",
//     "http://127.0.0.1:5501/assets/smart_plugs.json",
//     "http://127.0.0.1:5501/assets/smart_speakers.json",
//     "http://127.0.0.1:5501/assets/smart_thermostats.json",
//     "http://127.0.0.1:5501/assets/wifi_extenders.json"
// ]
// const fetchData = async () => {
//     try{
//         const response = await Promise.all(urls.map(url => fetch (url).then(res => res.json())))
//         console.log(response);

//         // let products = data.products;
//         // products = products.map(product => {
//         //     const {name, price, id} = products;
//         //     const image = imageURL.products;
//         //     return {name, price, id, image}
//         // })
        
//     }catch (error){
//         console.log(error)
//     }
// }
// fetchData();




































// getProducts().forEach(product => {
//     console.log(product);
//     itemsContainer.innerHTML += '';
//     const newProduct = productCard(product);
//     itemsContainer.appendChild(newProduct);
//   });

// shoppingCard.innerHTML = `
// <div class="card rounded-3 mb-4">
//             <div class="card-body p-4">
//                 <div class="row d-flex justify-content-between align-items-center">
//                   <div class="col-md-2 col-lg-2 col-xl-2">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
//                       class="img-fluid rounded-3" alt="Cotton T-shirt">
//                   </div>
                  
//                   <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
//                     <button class="btn btn-link px-2"
//                       onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
//                       <i class="fas fa-minus"></i>
//                     </button>
    
//                     <input id="form1" min="0" name="quantity" value="2" type="number"
//                       class="form-control form-control-sm" />
    
//                     <button class="btn btn-link px-2"
//                       onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
//                       <i class="fas fa-plus"></i>
//                     </button>
//                   </div>
//                   <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//                     <h5 class="mb-0">${Product.price}</h5>
//                   </div>
//                   <div class="col-md-1 col-lg-1 col-xl-1 text-end">
//                     <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
//                   </div>
//                 </div>
//             </div>
// </div>
// `;

// function getCardProducts() {
//   let products = [];
//   for (let item of shoppingCard) {
//     let product = {
//       name: item.product,
//       quantity: item.quantity,
//       price: item.price,
//     };
//     products.push(product);
//   }
//   return products;
// }

// getCardProducts();

// proceedToPay.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = "checkout.html";
// });

console.log("Hello!");