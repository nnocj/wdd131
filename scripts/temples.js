const link = document.querySelector("a");
const active = document.querySelector("#active");


link.addEventListener('click', ()=> {
   h1.textContent = link.textContent;
})


/*menu should show content only when the hamburger button is pressed.*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.head-nav');
const headerTitle = document.querySelector('.header-h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

   navigation.style.display == "contents";
});
