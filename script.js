/* 
 *  Shopping List Project Specs
 *  (y) - Add items to list via form
 *  (y) - Remove items from list by clicking the "X" button
 *  (y) - Clear all items with "clear" button
 *  (y/n) - Filter the items by typing in the filter field
 *  (y/n) - Add localStorage to persist items
 *  (y/n) - Click on an item to put into "edit mode" and add to form
 *  (y/n) - Update item
 *  (y/n) - Deploy to Netlify
 */ 

// VARIABLE & FUNCTION DEFINITIONS
const form = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const button = document.querySelector('.btn');
const itemList = document.querySelector('.items');
const clearBtn = document.querySelector('.btn-clear');
const filter = document.querySelector('#filter');

function addItem(e) {
    e.preventDefault();
    
    const item = itemInput.value;

    if (item === '') {
        alert('Please fill in field to add an item!');
        return;
    }

    const li = createLI(item);

    itemList.appendChild(li);
}

function createLI(item) {
    const li = document.createElement('li');
    const text = document.createTextNode(item);
    const btn = document.createElement('button');
    btn.classList.add('remove-item', 'btn-link', 'text-red');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-xmark');

    btn.appendChild(icon);
    li.appendChild(text);
    li.appendChild(btn);

    return li;
}

function removeItem(e) {
    if (e.target.tagName === 'I') { e.target.parentNode.parentNode.remove(); }
}

function removeAllItems() {
    document.querySelectorAll('li').forEach((li) => {
        li.remove();
    });
}

function filterItems(e) {
    // read the text in the filter input area
    // console.log(e.target.value);
    const text = e.target.value;
    console.log(text);
    // check if text is in the firstChild of each li
    document.querySelectorAll('li').forEach((li) => {
        console.log(li.firstElementChild);
    });
        // if yes, display

        // if no, hide element
}


// EVENT LISTENERS
form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

clearBtn.addEventListener('click', removeAllItems);

filter.addEventListener('keyup', filterItems);



