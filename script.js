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
    checkUI();

    itemInput.value = '';
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
    if (e.target.tagName === 'I') { 
        if (confirm('Are you sure?')) {
            e.target.parentNode.parentNode.remove(); 
        }
    }

    checkUI();
}

function removeAllItems() {
    if (confirm('Are you sure?')) {
        document.querySelectorAll('li').forEach((li) => {
            li.remove();
        });
    }
    
    checkUI();
}

function checkUI() {
    // Checks the UI to see if there are items (STATE OF APPLICATION)
    const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        filter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        filter.style.display = 'block';
    }
}

function filterItems(e) {
    // read the text in the filter input area
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    
    // Check if the items in item list contain the filter text
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// EVENT LISTENERS
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', removeAllItems);
filter.addEventListener('input', filterItems);
// filter.addEventListener('keyup', filterItems);


checkUI();
