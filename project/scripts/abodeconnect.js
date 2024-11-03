/*menu should show content only when the hamburger button is pressed.*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.head-nav');
const headerTitle = document.querySelector('.header-h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
   headerTitle.classList.toggle('hide');// to hide the title when the hamburger is open

   navigation.style.display == "contents";
});


//Ensuring that the active h2 element is populated or changes dynamically to click.
const activeTitle = document.querySelector("h2.active");
activeTitle.textContent = 'Home';
activeTitle.textContent = 'Verified Product';
activeTitle.textContent = 'List Product'


//declaring the temples container
const templesElement = document.querySelector(".temples");

const temples = [
   {
     templeName: "Aba Nigeria",
     location: "Aba, Nigeria",
     dedicated: "2005, August, 7",
     area: 11500,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
   },
   {
     templeName: "Manti Utah",
     location: "Manti, Utah, United States",
     dedicated: "1888, May, 21",
     area: 74792,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
   },
   {
     templeName: "Payson Utah",
     location: "Payson, Utah, United States",
     dedicated: "2015, June, 7",
     area: 96630,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
   },
   {
     templeName: "Yigo Guam",
     location: "Yigo, Guam",
     dedicated: "2020, May, 2",
     area: 6861,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
   },
   {
     templeName: "Washington D.C.",
     location: "Kensington, Maryland, United States",
     dedicated: "1974, November, 19",
     area: 156558,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
   },
   {
     templeName: "Lima Perú",
     location: "Lima, Perú",
     dedicated: "1986, January, 10",
     area: 9600,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
   },
   {
     templeName: "Mexico City Mexico",
     location: "Mexico City, Mexico",
     dedicated: "1983, December, 2",
     area: 116642,
     imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
   },
   // Add more temple objects here...
   {
      templeName: "Ghana Accra",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11 ",
      area: 17500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
   },
   {
      templeName: "Adelaide Australia Temple",
      location: "Abidjan, Ivory Coast",
      dedicated: "2000, June, 15",
      area: 10700,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
   },
   {
      templeName: "Apia Samoa",
      location: "Pesega Apia, Samoa",
      dedicated: "1984,August, 5-7",
      area:  18691,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
   }
 ];


// Display temple images dynamically
const displayTemples = (temples) => {
   templesElement.innerHTML = ""; // Clear current content
   temples.forEach(temple => {
       const article = document.createElement("article");
       article.innerHTML = `
           <h3><b>${temple.templeName}</b></h3>
           <p><span>Location:</span> ${temple.location}</p>
           <p><span>Dedicated:</span> ${temple.dedicated}</p>
           <p><span>Size:</span> ${temple.area} sq. ft</p>
           <img src="${temple.imageUrl || 'placeholder.jpg'}" alt="${temple.templeName} loading="lazy"">
       `;
       templesElement.appendChild(article);
   });
};

// Function to display the title of the active tap.
const displayActive = (criteria) => {
   /*To ensure that the active tab's name appear in the h2 element text content */
   const activeTitle = document.querySelector("h2.active");

   switch(criteria) {
      
       case "verified":
           activeTitle.textContent = 'Verified Properties'
           break;
       case "form":
           activeTitle.textContent = 'List Property'
           break;
       default:
           activeTitle.textContent = 'Home'
   }
};







