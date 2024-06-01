const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

//modern way of adding styles such as the color, background, padding, width, and text align

const para = document.querySelector("p");

para.setAttribute("class", "highlight"); // I can use the setAttribute function to specifically 
//a class, id, and name among other attributes that elements could have in the DOM.

//Useful use of JavaScript 
console.log("My Shopping List");
