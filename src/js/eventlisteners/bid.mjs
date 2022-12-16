import { postBid } from "../api/bid.mjs"

console.log("TESTING111");

// Post bid eventListener

export function postBidFormEventListener() {
    const postBidForm = document.querySelector("#post-bid-form");
    
    postBidForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const postBidForm = e.target;
        const formData = new FormData(postBidForm);
        // const newBidData = Object.fromEntries(formData.entries());
        // parseInt(newBidData);
        // console.log("TESTING");
        const bidAmount = formData.get("amount")
        const amount = parseInt(bidAmount);

        const bid = {amount};


        // postBid(parseInt(newBidData));
        postBid(bid);
        console.log(bid);

    });}