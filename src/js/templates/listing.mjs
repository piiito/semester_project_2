import { readListing } from "../api/getlisting.mjs"
import { readListings } from "../api/getlistings.mjs"

// Listing template

export function listingTemplate(listingData){

    const listingContainer = document.querySelector("#single-listing")
    const listingWrapper = document.createElement("div");
    listingWrapper.classList.add("me-md-3", "pt-3", "px-3", "mt-4", "mb-5", "pt-md-5", "px-md-5", "text-center", "overflow-hidden");
    const listingImage = document.createElement("img");
    listingImage.classList.add("img-fluid", "col-8");
    listingImage.alt= `${listingData.title}`;
    listingImage.src = `${listingData.media}`;
    listingContainer.append(listingWrapper);
    listingWrapper.append(listingImage);
    

    

    const listingInfo = document.createElement("div");
    listingInfo.classList.add("listing-info", "my-3", "py-3");
    const listingH1 = document.createElement("h1");
    listingH1.classList.add("card-title", "h2");
    listingH1.innerText = `${listingData.title}`;
    const listingDescription = document.createElement("p");
    listingDescription.innerText = `Description: ${listingData.description}`;
    const bidCount = document.createElement("p");
    bidCount.innerText = `Bid count: ${listingData._count.bids}`;
    const seller = document.createElement("p");
    seller.innerText = `Seller: ${listingData.seller.name}`;
    const createdTime = document.createElement("p");
    createdTime.innerText = `Created: ${listingData.created}`;
    const endsTime = document.createElement("p");
    endsTime.innerText = `Ends: ${listingData.endsAt}`;
    listingWrapper.append(listingInfo);
    listingInfo.append(listingH1, listingDescription, bidCount, seller, createdTime,endsTime);




    const bidsArray = listingData.bids;
    const bidObject = {};

    const bids = bidsArray.forEach((element, i) =>{
        bidObject[i] = element.amount;
        console.log(element.amount);
        const bid = document.createElement("p");
        bid.innerText = `Bid amount: ${element.amount}`;
        bid.style.color = "#F4EEF7";
        listingInfo.append(bid);
   
   
    })
    
    return
    
    console.log(listingContainer);
    

    
    // const bids= listingData.bids;
    // console.log(bids);
    // const listing = document.createElement("div");
    // listing.classList.add("card");
    // listing.innerHTML +=`<a href="/listing.html?id=${listingData.id}"><img src="${listingData.media}" class="card-img-top" alt="${listingData.title}"/>
    //                 <div class="card-body">
    //                 <h2 class="card-title">${listingData.title}</h2></a>
    //                 <p class="card-text">${listingData.description}.</p>
    //                 <p class="card-text">Bids:${listingData._count.bids}.</p>
    //                 <p class="card-text">Bid amount:${listingData.bids}.</p>
    //                 <p class="card-text">Seller:${listingData.seller.name}.</p>
    //                 <p class="card-text">Ends at:${listingData.created}.</p>
    //                 <p class="card-text">Ends at:${listingData.endsAt}.</p>
    //                 <button>Place bid</button>`;


    // return listing;

} 



export function listingsTemplate(listingData){

    const listingContainer = document.querySelector("#many-listings")
    const listingWrapper = document.createElement("div");
    listingWrapper.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3","col-xl-3", "pt-3", "px-3", "my-2", "pt-md-5", "text-center", "overflow-hidden");
    
    listingContainer.append(listingWrapper);
   

    const listingInfo = document.createElement("div");
    listingInfo.classList.add("card");
    const listingCard = document.createElement("div");
    listingCard.classList.add("card-shadow-sm");

    const listingImage = document.createElement("img");
    listingImage.classList.add("img-fluid", "img-thumbnail");
    listingImage.alt= `${listingData.title}`;
    listingImage.src = `${listingData.media}`;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "h5", "text-center");
    cardTitle.innerText = `${listingData.title}`;

    const cardDescription = document.createElement("h3");
    cardDescription.classList.add("card-text", "h6", "text-start");
    cardDescription.innerText = `${listingData.description}`;

    const bidCount = document.createElement("p");
    bidCount.classList.add("card-text", "small", "mt-4", "text-start");
    bidCount.innerText = `Bid count: ${listingData._count.bids}`;
    const endsTime = document.createElement("p");
    endsTime.classList.add("card-text", "small", "mt-4", "text-start");
    endsTime.innerText = `Ends: ${listingData.endsAt}`;
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

        
    console.log(listingContainer);
    
    return 
    
    
    


    // const listing = document.createElement("div");
    // listing.classList.add("card");
    // listing.innerHTML +=`<a href="/listing.html?id=${listingData.id}"><img src="${listingData.media}" class="card-img-top" alt="${listingData.title}"/>
    //                 <div class="card-body">
    //                 <h2 class="card-title">${listingData.title}</h2></a>
    //                 <p class="card-text">${listingData.description}.</p>
    //                 <p class="card-text">Bids:${listingData._count.bids}.</p>
    //                 <p class="card-text">Bid amount:${listingData.bids}.</p>
    //                 <p class="card-text">Seller:${listingData.seller.name}.</p>
    //                 <p class="card-text">Ends at:${listingData.created}.</p>
    //                 <p class="card-text">Ends at:${listingData.endsAt}.</p>
    return listing;

} 

// Single listing

export function runListingTemplate(listingData, parent){
    parent.append(listingTemplate(listingData));
}

export async function makeListingTemplate(){
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const listing = await readListing(id);
    const container = document.querySelector("#single-listing");
    runListingTemplate(listing, container);
}

// Multiple listings

export function runListingsTemplate(listingDataList, parent){
    parent.append(...listingDataList.map(listingsTemplate))

    }

export async function makeListingsTemplate(){
    const listings = await readListings();
    const container = document.querySelector("#many-listings");
    runListingsTemplate(listings, container);
}