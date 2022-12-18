import { setLoginFormEventListener } from "./eventlisteners/login.mjs";
import { setRegistrationFormEventListener} from "./eventlisteners/register.mjs";
import { createListingFormEventListener } from "./eventlisteners/createlisting.mjs";
import { searchListings } from "./eventlisteners/searchlisting.mjs";
import { makeListingTemplate } from "./templates/listing.mjs";
import { makeListingsTemplate } from "./templates/listing.mjs";
import { logoutEventListener } from "./eventlisteners/logout.mjs";
import { updateProfileFormEventListener } from "./eventlisteners/updateavatar.mjs";
import { showCredits } from "./api/totalcredit.mjs";
import { logged } from "./changeelements.mjs";
import { changeCTA } from "./changeelements.mjs";
import { elementHidden } from "./changeelements.mjs";
import { postBidFormEventListener } from "./eventlisteners/bid.mjs";
import { getProfile } from "./api/updateavatar.mjs";



const path = location.pathname;



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
    elementHidden();
}else if(path === "/profile.html"){
    getProfile();
}

logged();
logoutEventListener();
postBidFormEventListener();