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

  console.log("hello");
  listingContent.innerHTML = "";

  listingsToRender.forEach(function (listingData) {
    listingContent.innerHTML += `<div class="card"><a href="/listing.html?id=${listingData.id}"><img src="${listingData.media}" class="card-img-top" alt="${listingData.media}"/>
                                <div class="card-body">
                                <h2 class="card-title">${listingData.title}</h2></a>
                                <p class="card-text">${listingData.body}.</p>
                                <p class="card-text">Created: ${listingData.created}.</p></div>`;

                                
  });
  
}