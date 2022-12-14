import { postBid } from "../api/bid.mjs"

// Post bid eventListener

export function postBidFormEventListener() {
    const postBidForm = document.querySelector("#post-bid-form");
    
    postBidForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const postBidForm = e.target;
        const formData = new FormData(postBidForm);
        const newBidData = Object.fromEntries(formData.entries());
        console.log("TESTING");
        postBid(newBidData);
        console.log(newBidData)

    });}