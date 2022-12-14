import { mainAPI_URL } from "./constants.mjs"
import { listingsEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Show listing function
export async function readListing(id){
    const token = loadFromStorage("token");

    const response = await fetch (`${mainAPI_URL}${listingsEndpoint}/${id}?_seller=true&_bids=true`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
     })

    const listing = await response.json();
    console.log(listing);
    return listing;

}