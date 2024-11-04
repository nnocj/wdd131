
// Fetch and render the rental listings
// Fetch and render the rental listings
async function loadListings() {
    try {
        const response = await fetch('https://nnocj.github.io/wdd131/project/rents.json');
        const data = await response.json();
        const container = document.getElementById('rents');

        // Function to render listings
        const renderListings = (listings) => {
            container.innerHTML = ''; // Clear the container first
            listings.forEach(listing => {
                const card = document.createElement('div');
                card.className = 'listing-card';
                card.innerHTML = `
                    <img class="listing-image" src="${listing.propertyImages[0]}" alt="Image of property at ${listing.propertyAddress}" loading="lazy">
                    <div class="listing-info">
                        <h3>$${listing.rentPrice}</h3>
                        <p>Location: ${listing.propertyAddress}, ${listing.city}</p>
                        <p>Rent Duration: ${listing.rentDuration}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        };

        // Initial render of all listings
        renderListings(data.rentalListings);

        // Filter function by city
        const filterHomesByCity = (city) => {
            let filteredHomes;
            if (city === 'all') {
                filteredHomes = data.rentalListings; // Show all listings
            } else {
                filteredHomes = data.rentalListings.filter(listing => listing.city.toLowerCase() === city.toLowerCase());
            }
            renderListings(filteredHomes);
        };

        // Event listeners for filtering by city
       // Event listener for the select dropdown
       const homeFilter = document.getElementById('homeFilter');
       homeFilter.addEventListener('change', (event) => {
           const selectedCity = event.target.value;
           filterHomesByCity(selectedCity);
       });

    } catch (error) {
        console.error('Error loading listings:', error);
    }
}

// Load listings on page load
loadListings();
