const cardComponent = document.createElement('div');

function showDetails(){
    
}

function addToCart(){
    
}


function productCard(Product){
cardComponent.innerHTML = `
<div class="card" style="width: 18rem; margin-left: 20px;">
  <img src="${Product.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Product.name}</h5>
    <p class="card-text">${Product.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Category : ${Product.category}</li>
    <li class="list-group-item">Price : ${Product.price}$</li>
  </ul>
  <div class="card-body">
  <a href="#" class="btn btn-primary btnDetails" onclick="showDetails()">Details</a>
  <a href="#" class="btn btn-primary btnAddToCard" onclick="addToCart()">Add To Card</a>
  </div>
  </div>
`
return cardComponent;
}


export default productCard;