import { postBid } from "../api/bid.mjs"


// Post bid eventListener

export function postBidFormEventListener() {
    const postBidForm = document.querySelector("#post-bid-form");
    
    postBidForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const postBidForm = e.target;
        const formData = new FormData(postBidForm);
        const bidAmount = formData.get("amount")
        const amount = parseInt(bidAmount);

        const bid = {amount};

        postBid(bid);

    });}