// Import and insert header and footer components
import headerContainer from "../components/header.js";
import footerContainer from "../components/footer.js";
document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);

// Keep this on top
// The search string of the user is available in the keyword constant you see here
const searchString = new URLSearchParams(window.location.search);
const keyword = searchString.get('search');