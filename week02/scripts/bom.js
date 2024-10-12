/*  I'm confident that by applying these skills i can be able to create a system that 
    allows users to write view and store their works.
    Date: 11/October/2024 
*/


const userInput = document.getElementById('favchap');
const addButton = document.getElementById('addBtn');
const unorderedList = document.getElementById('list');



addButton.addEventListener('click', () => {
    // Get the value from the input field
    const newScripture = userInput.value.trim();

    if (newScripture !== ''){
        //Add list
        const addList = document.createElement('li');
        addList.innerHTML = newScripture;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        //Add delete button
        addList.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            addList.remove();
        });
        
        //Add list to the unordered list.
        unorderedList.appendChild(addList);

        // Clear the input field after adding the item
        userInput.value = '';
        userInput.focus();
    }
})


