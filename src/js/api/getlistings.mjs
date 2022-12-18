import { mainAPI_URL } from "./constants.mjs"
import { listingsEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"
import { searchListings } from "../eventlisteners/searchlisting.mjs"



// Show listings
export async function  readListings(){
    const token = loadFromStorage("token");

    const response = await fetch (`${mainAPI_URL}${listingsEndpoint}?_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
     })

    const listings = await response.json();
    
    searchListings(listings);
    
    return listings;

}


  
  