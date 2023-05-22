import headerContainer from "../../components/header.js";
import footerContainer from "../../components/footer.js";
import { getCart, deleteById, setCart } from "../../helpers/session_cart.js";

document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);

const itemContainer = document.getElementById("itemsContainer");
const shoppingCart = document.getElementById("shoppingCart");
const clearCartBtn = document.querySelector('.clear-cart');
const totalCartBtn = document.querySelector('.cart-total');
const quantityBtn = document.querySelector('.px-2');



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
// {"id": 2,
// "name": "Smart Plug",
// "description": "Turn any device into a smart device with this easy-to-use smart plug.",
// "price": 24.99,
// "imageUrl": "#",
// "category": "plug"}];

// cart = getCart();

//display products
function displayProducts(products) {
    console.log(products);
    let result = '';
    cart.forEach(product =>{
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
                    
                                        <input id="form1" min="0" name="quantity" value="1" type="number"
                                        class="form-control form-control-sm" />
                    
                                        <button class="btn btn-link px-2"
                                        <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">$${product.price}</h5>
                                  </div>
                                  <form action="/cart/delete-item" method="post">
                                    <input type="hidden" name="product" value="${product.id}" />
                                    <div id="delete-btn" class="btn btn-danger">Delete item</button>
                                  </form>
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
};


function sumProductPrices(products) {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += products[i].price;
  }

  return totalPrice;
}

const totalPrice = sumProductPrices(cart);
console.log(totalPrice); 
totalCartBtn.innerHTML = totalPrice;


displayProducts(cart);



clearCartBtn.addEventListener('click', deleteById);




































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