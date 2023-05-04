import headerContainer from '../../components/header.js';
import footerContainer from '../../components/footer.js';
import { getCart } from '../../helpers/session_cart.js';

document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);
const itemContainer = document.getElementById("itemsContainer");

const shoppingCard = document.createElement("div");

shoppingCard.innerHTML = `
<div class="card rounded-3 mb-4">
            <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                      class="img-fluid rounded-3" alt="Cotton T-shirt">
                  </div>
                  
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>
    
                    <input id="form1" min="0" name="quantity" value="2" type="number"
                      class="form-control form-control-sm" />
    
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">${Product.price}</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                  </div>
                </div>
            </div>
</div>
`;


 

function getCartProducts(shoppingCard) {
    let products = [];
    for (let item of shoppingCard) {
      let product = {
        name: item.product,
        quantity: item.quantity,
        price: item.price
      };
      products.push(product);
    }
    products.appendChild(shoppingCard);
    return products;

  }

  getCartProducts();


  document.querySelector("#ms-3").addEventListener('click', e =>{
    e.preventDefault();
    window.location.href = "checkout.html";

  });