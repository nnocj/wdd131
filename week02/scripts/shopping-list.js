//Author: Nicholas Oblitey Commey
//Purpose: Document Object Manipulation
//Date: 31st May, 2024

const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const list = document.querySelector("ul");



function addItem() {
    buttonElement.addEventListener('click', () => { 
        const userItem = input.value;
        input.value = '';

        //The essence of this section was to create a sect of descendant containers 
        // to display my value.
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = userItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);
        
        // now that we have the button switch to delete, we have to set it such that
        //as soon as the delete button is presses, it should delete the entire list item.
        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus(); 
    })};