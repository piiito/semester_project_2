import { setLoginFormEventListener } from "./eventlisteners/login.mjs";
import { setRegistrationFormEventListener} from "./eventlisteners/register.mjs";
import { createListingFormEventListener } from "./eventlisteners/createlisting.mjs";
import { searchListings } from "./eventlisteners/searchlisting.mjs";
import { makeListingTemplate } from "./templates/listing.mjs";
import { makeListingsTemplate } from "./templates/listing.mjs";
import { logoutEventListener } from "./eventlisteners/logout.mjs";
import { updateProfileFormEventListener } from "./eventlisteners/updateavatar.mjs";
import { showCredits } from "./api/totalcredit.mjs";
import { logged } from "./api/logout.mjs";
import { changeCTA } from "./api/logout.mjs";
import { postBidFormEventListener } from "./eventlisteners/bid.mjs";



const path = location.pathname;
const bidform = document.querySelector("#post-bid-form");
console.log(bidform);


if (path === "/login.html"){
    setLoginFormEventListener();

} else  if(path === "/register.html"){
    setRegistrationFormEventListener();

} else if(path === "/listings.html"){
    makeListingsTemplate();

    searchListings();

} else if(path === "/listing.html"){
    makeListingTemplate();


}else if(path === "/createlisting.html"){
    createListingFormEventListener();

}else if(path === "/profile.html"){
    updateProfileFormEventListener();

}else if(path === "/credits.html"){
    showCredits();

}else if(path === "/index.html"){
    changeCTA();
}

logged();
logoutEventListener();
postBidFormEventListener();