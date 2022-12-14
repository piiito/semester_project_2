import { createListing } from "../api/createListing.mjs"
// Create listing eventListener

export function createListingFormEventListener() {
    const createListingForm = document.querySelector("#create-listing-form");

    createListingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const createListingForm = e.target;
        const formData = new FormData(createListingForm);
        
        const title = formData.get("title");
        const description = formData.get("description");
        const media = formData.get("media").split(", ");
        const tags = formData.get("tags").split(", ");
        const endsAt = formData.get("endsAt");

        const listing = {title, description, tags, media, endsAt};

        if(listing.media === ""){
            delete listing.media
        }

        createListing(listing);
        console.log(listing);

    });}

// // Create listing eventListener

// export function createListingFormEventListener() {
//     const createListingForm = document.querySelector("#create-listing-form");

//     createListingForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const createListingForm = e.target;
//         const formData = new FormData(createListingForm);
//         const newListingData = Object.fromEntries(formData.entries());

//         createListing(newListingData);

//     });}