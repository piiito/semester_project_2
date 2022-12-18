import { mainAPI_URL } from "./constants.mjs"
import { listingsEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"


// Create listing function
export async function  createListing({
    title,
    description,
    tags,
    media,
    endsAt,
  }){

    const token = loadFromStorage("token");

    const response = await fetch (mainAPI_URL + listingsEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            description,
            tags,
            media,
            endsAt,
          }),
     })

    const listing = await response.json();
    
    const id = listing.id;

    if (id) {
        alert("Your listing was successful");
        window.location.href="/listings.html";

    }
    return listing;

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