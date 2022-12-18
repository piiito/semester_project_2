// Search listings

export function searchListings(listings) {
    const search = document.querySelector("#search");

    search.onkeyup = function (event) {
        console.log("hey");
      const searchValue = event.target.value.trim().toLowerCase();

      const filteredListings = listings.filter((listing) => {
        if (listing.title.toLowerCase().includes(searchValue)) {
          return true;
        }
      });
      renderListings(filteredListings);
      
    };
  }

  export function renderListings(listingsToRender) {
  const listingContent = document.querySelector("#many-listings");

  listingContent.innerHTML = "";

  listingsToRender.forEach(function (listingData) {
    listingContent.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 pt-3 px-3 my-2 pt-md-5
                                text-center overflow-hidden">
                                <div class="card h-100"><div class="card-shadow-sm" <a href="/listing.html?id=${listingData.id}">
                                <img src="${listingData.media[0]}"class="img-fluid img-thumbnail card-img" alt="${listingData.title}"/></div>
                                <div class="card-body">
                                <h2 class="card-title h4 text-center pb-3">${listingData.title}</h2></a>
                                <h3 class="card-text h6 text-start pb-3">${listingData.description}</h3>
                                <p class="card-text small mb-0 text-start">Bid count:${listingData._count.bids}.</p>
                                <p class="card-text small mb-0 text-start">Created: ${listingData.created}.</p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                <a class="btn btn-primary">View</a>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>`;

                                
  });
}