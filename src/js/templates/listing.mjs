import { readListing } from "../api/getlisting.mjs"
import { readListings } from "../api/getlistings.mjs"

// Listing template

export function listingTemplate(listingData){

    const listingContainer = document.getElementById("single-listing")

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("col");

    const listingImage = document.createElement("img");
    listingImage.classList.add("listing-img");
    listingImage.alt= `${listingData.title}`;
    listingImage.src = `${listingData.media[0]}`;

    listingContainer.append(imageWrapper);
    imageWrapper.append(listingImage);

    const listingInfo = document.createElement("div");
    listingInfo.classList.add("listing-info", "my-3", "py-3", "col");

    const listingH1 = document.createElement("h1");
    listingH1.classList.add("card-title", "h2", "pb-3", "listing-title");
    listingH1.innerText = `${listingData.title}`;

    const listingDescription = document.createElement("p");
    listingDescription.classList.add("text-start", "pb-3");
    listingDescription.innerText = `Description: ${listingData.description}`;

    const bidCount = document.createElement("p");
    bidCount.classList.add("text-start");
    bidCount.innerText = `Bid count: ${listingData._count.bids}`;

    const seller = document.createElement("p");
    seller.classList.add("text-start");
    seller.innerText = `Seller: ${listingData.seller.name}`;

    const createdTime = document.createElement("p");
    createdTime.classList.add("text-start");

    const createdDate = new Date (listingData.created).toLocaleDateString();
    createdTime.innerText = `Created : ${createdDate}`;

    const endsTime = document.createElement("p");
    endsTime.classList.add("text-start");
    const endsDate = new Date (listingData.endsAt).toLocaleDateString();
    const endsHours = new Date (listingData.endsAt).toLocaleTimeString();
    endsTime.innerText = `Ends : ${endsDate} at ${endsHours}`;
    
    listingContainer.append(listingInfo);
    listingInfo.append(listingH1, listingDescription, bidCount, seller, createdTime,endsTime);
    
    const collapseButton = document.createElement("button");
    collapseButton.classList.add("btn", "btn-outline-success", "mb-3");
    collapseButton.setAttribute("type", "button");
    collapseButton.setAttribute("data-bs-toggle", "collapse");
    collapseButton.setAttribute("data-bs-target", "#collapse1");
    collapseButton.setAttribute("aria-expanded", "false");
    collapseButton.setAttribute("aria-controls", "collapse1")
    collapseButton.innerText =`See all bids`;

    listingInfo.append(collapseButton);

    const collapseDiv = document.createElement("div");
    collapseDiv.setAttribute("id", "collapse1");
    collapseDiv.classList.add("collapse");
    listingInfo.append(collapseDiv);

    const collapseBids = document.createElement("div");
    collapseBids.classList.add("card", "card-body");
        
    const bidsArray = listingData.bids;
    const bidObject = {};
    
    const bids = bidsArray.forEach((element, i) =>{
    bidObject[i] = element.amount;
    console.log(element.amount);

    const bid = document.createElement("p");
    bid.classList.add("text-start");
    bid.innerText = `Bid amount: ${element.amount}`;
    bid.style.color = "#F4EEF7";

    collapseBids.append(bid);
    collapseDiv.append(bid);

    })
} 



export function listingsTemplate(listingData){

    const listingContainer = document.querySelector("#many-listings")
    listingContainer.HTML = "";

    const listingWrapper = document.createElement("div");
    listingWrapper.classList.add("col-12","col-sm-6", "col-md-4", "col-lg-3","col-xl-3", "pt-3", "px-3", "my-2", "pt-md-5", "text-center", "overflow-hidden");
    
    listingContainer.append(listingWrapper);
   
    const listingInfo = document.createElement("div");
    listingInfo.classList.add("card" , "h-100");

    const listingCard = document.createElement("div");
    listingCard.classList.add("card-shadow-sm");

    const listingImage = document.createElement("img");
    listingImage.classList.add("img-fluid", "img-thumbnail", "card-img");
    listingImage.alt= `${listingData.title}`;
    listingImage.src = `${listingData.media[0]}`;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "h4", "text-center", "pb-3");
    cardTitle.innerText = `${listingData.title}`;

    const cardDescription = document.createElement("h3");
    cardDescription.classList.add("card-text", "h6", "text-start", "pb-3");
    cardDescription.innerText = `${listingData.description}`;

    const bidCount = document.createElement("p");
    bidCount.classList.add("card-text", "small", "mb-0", "text-start");
    bidCount.innerText = `Bid count: ${listingData._count.bids}`;

    const endsTime = document.createElement("p");
    endsTime.classList.add("card-text", "small", "mt-0", "text-start");
    const endsDate = new Date (listingData.endsAt).toLocaleDateString();
    const endsHours = new Date (listingData.endsAt).toLocaleTimeString();
    endsTime.innerText = `Ends : ${endsDate} at ${endsHours}`;

    listingWrapper.append(listingInfo);
    listingInfo.append(listingCard);
    listingCard.append(listingImage);
    listingCard.append(cardBody);
    cardBody.append(cardTitle, cardDescription, bidCount, endsTime);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-grid", "gap-2", "col-6", "mx-auto");

    const linkButton = document.createElement("a");
    linkButton.classList.add("btn", "btn-primary");
    linkButton.href = (`/listing.html?id=${listingData.id}`);
    linkButton.role="button";
    linkButton.innerText = "View";

    cardBody.append(buttonContainer);
    buttonContainer.append(linkButton);
    
    return ;

} 

// Single listing

export function runListingTemplate(listingData, container){
    container.append(listingTemplate(listingData));
}

export async function makeListingTemplate(){
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const listing = await readListing(id);
    const container = document.querySelectorAll("#single-listing");
    
    runListingTemplate(listing, container);
}

// Multiple listings

export function runListingsTemplate(listingDataList, container){
    container.append(...listingDataList.map(listingsTemplate))
    

    }

export async function makeListingsTemplate(){
    const listings = await readListings();
    const container = document.querySelectorAll("#many-listings");
    
    runListingsTemplate(listings, container);
}
