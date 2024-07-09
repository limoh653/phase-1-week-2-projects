// JavaScript to maintain the shopping list array and handle button clicks
document.addEventListener("DOMContentLoaded", () => {

    // Initialize the shopping list array
    const shoppingList = [];

    // Get references to the input field and buttons
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const markPurchasedButton = document.getElementById('mark-purchased-button');
    const clearButton = document.getElementById('clear-button');
    const itemList = document.getElementById('item-list');

    // Function to update the display of the shopping list
    function updateListDisplay() {
      // Clear the current list display
      itemList.innerHTML = '';
      // Loop through the shopping list array and create list items
      shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.text;
        if (item.purchased) {
          listItem.style.textDecoration = 'line-through';
          listItem.style.color = 'gray';
        }
        listItem.dataset.index = index;
        itemList.appendChild(listItem);
      });
    }

    // Event listener for the Add button
    addButton.addEventListener('click', () => {
      const itemText = itemInput.value.trim();
      if (itemText !== '') {
        // Add the new item to the shopping list array
        shoppingList.push({ text: itemText, purchased: false });
        // Clear the input field
        itemInput.value = '';
        // Update the list display
        updateListDisplay();
      }
    });

    // Event listener for the Mark Purchased button
    markPurchasedButton.addEventListener('click', () => {
      const items = itemList.querySelectorAll('li');
      items.forEach(item => {
        if (item.style.backgroundColor === 'lightgray') {
          const index = item.dataset.index;
          shoppingList[index].purchased = !shoppingList[index].purchased;
          item.style.backgroundColor = ''; // remove background color once marked purchased
        }
      });
      // Update the list display
      updateListDisplay();
    });

    // Event listener for the Clear button
    clearButton.addEventListener('click', () => {
      // Clear the shopping list array
      shoppingList.length = 0;
      // Update the list display
      updateListDisplay();
    });

    // Event listener to toggle selection of list items
    itemList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.backgroundColor = event.target.style.backgroundColor === 'lightgray' ? '' : 'lightgray'; // toggle background color on click
      }
    })
  });