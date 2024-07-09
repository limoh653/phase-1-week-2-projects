# phase-1-week-2-projects
## Interactive Shopping List

This project demonstrates a basic interactive shopping list implemented using  JavaScript and HTML. The application allows users to add items to a list, mark them as purchased, and clear the entire list. Below is a detailed explanation of how the code works and how to use the application.

## Table of Contents
Features
1. Usage
2. Code Explanation
3. Contributing
4. License

## Features
s
1. Add Item: Users can enter an item into the input field and click "Add item" to add it to the list.
2. Mark Purchased: Each item in the list has a "Mark Purchased" button that, when clicked, marks the item as purchased (displayed with a line-through).
3. Clear List: Users can clear the entire list by clicking the "Clear List" button.


## Usage

1. Enter an item into the input field labeled "Enter a new item."
2. Click the "Add item" button to add the item to the list.
3. To mark an item as purchased, click on the item to highlight then mark as purchased.
4. To clear the entire list, click the "Clear List" button.

## Code Explanation##

1. Initialization: The DOMContentLoaded event ensures that the JavaScript code executes only after the HTML document has been completely loaded and parsed.

2. Data Structure: itemList is an array that stores objects representing each item in the shopping list. Each item object has name (string) and purchased (boolean) properties.

3. Functions:

.*addItemToList*: Adds a new item to itemList and calls renderList() to update the DOM.
renderList(): Clears the existing list (listContainer), iterates over itemList, creates HTML elements (li and button) for each item, and appends them to listContainer. It also adds event listeners to each "Mark Purchased" button.
4. Event Listeners:

*addItemBtn*: Adds a new item to itemList when clicked.
markPurchasedBtn: Marks all items in itemList as purchased when clicked.
clearListBtn: Clears all items from itemList and updates the DOM accordingly.
## Contributing
Feel free to contribute to this project by forking it and submitting pull requests. Bug fixes, additional features, and improvements are welcome!
License
This project is licensed under the MIT License. See the LICENSE file for details.

### Explanation

- *Features*: Describes the functionality of the interactive shopping list application.
- *Installation*: Provides step-by-step instructions for installing and running the project locally.
- *Usage*: Explains how to use the application to add, mark, and clear items in the shopping list.
- *Code Explanation*: Breaks down the HTML structure and JavaScript logic used in the project.
- *Contact*: Provides comprehensive contact information with links to various platforms.
- *Contributing*: Guidelines for contributing to the project.
- *License*: Specifies the project's license and includes a link to the full license file.