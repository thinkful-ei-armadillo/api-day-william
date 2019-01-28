'use strict';
/* global shoppingList, store, $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'foobar' });
      // console.log('new name: ' + item.name);
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  // api.getItems() // Old test block wasnt working until refreshing page to see updated one on STEP 6..
  //   .then(res => res.json())
  //   .then((items) => {
  //     const item = items[0];
  //     return api.updateItem(item.id, { name: 'foobar' });
  //   })
  //   .then(res => res.json())
  //   .then(() => console.log('updated!')); // returns 400 (Bad Request) and console.logs 'updated'

});
    


// store.items.push(Item.create('apples'));



