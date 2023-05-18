import headerContainer from '../../components/header.js';
import footerContainer from '../../components/footer.js';
import { getCart } from '../../helpers/session_cart.js';

document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);

// Will change this function. Just a test
function printMessageAfterCheckout() {
    alert("Order received successfully");
}

printMessageAfterCheckout();