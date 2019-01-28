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