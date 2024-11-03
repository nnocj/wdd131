
// Fetch and render the rental listings
async function loadListings() {
    try {
        const response = await fetch('https://nnocj.github.io/wdd131/project/rents.json');
        const data = await response.json();
        const container = document.getElementById('rents');
        
        data.rentalListings.forEach(listing => {
            // Create listing card
            const card = document.createElement('div');
            card.className = 'listing-card';
            
            // Add image
            const img = document.createElement('img');
            img.className = 'listing-image';
            img.src = listing.propertyImages[0];
            img.alt = `Image of property at ${listing.propertyAddress}`;
            card.appendChild(img);
            
            // Add listing info
            const info = document.createElement('div');
            info.className = 'listing-info';
            
            // Add rent price
            const price = document.createElement('h3');
            price.textContent = `$${listing.rentPrice}`;
            info.appendChild(price);
            
            // Add location and city
            const location = document.createElement('p');
            location.textContent = `Location: ${listing.propertyAddress}, ${listing.city}`;
            info.appendChild(location);
            
            // Add rent duration
            const duration = document.createElement('p');
            duration.textContent = `Rent Duration: ${listing.rentDuration}`;
            info.appendChild(duration);
            
            // Append info to card and card to container
            card.appendChild(info);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading listings:', error);
    }
}

// Load listings on page load
loadListings();
