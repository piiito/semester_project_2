import { mainAPI_URL } from "./constants.mjs"
import { listingsEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"
const id = window.location.search;
console.log(window.location.search);
// Post bid function
export async function  postBid(bidData){

    const token = loadFromStorage("token");
    
    console.log(id);

    const response = await fetch (`${mainAPI_URL}/api/v1/auction/listings/${id}/bids`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bidData),
     })

    const bid = await response.json();
    console.log(bid);
    const bidId = bid.id;

    if (bidId) {
        alert("Your bid was successful");
       

    } 
    return bid;

}






// // Create listing function
// export async function  createListing(listingData){

//     const token = loadFromStorage("token");

//     const response = await fetch (mainAPI_URL + listingsEndpoint, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify(listingData)
//      })

//     const listing = await response.json();
//     const id = listing.id;

//     if (id) {
//         alert("Your listing was successful");
//         window.location.href="/listings.html";

//     }
//     return listing;

// }