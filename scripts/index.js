'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(res => console.log(res));
// tested and works


api.getItems()
  .then(res => console.log(res));

console.log(api.BASE_URL);


// copying and pasting directly from directions didnt work.
// had to manually type it out to fix syntax errors
api.createItem('pears')
  .then(res => res.json()) // uncaught typeError: cannot read prop 'then of undefined
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });

// creates new pear items with different id every load