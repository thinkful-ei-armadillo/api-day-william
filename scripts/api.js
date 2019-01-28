'use strict';
/* global $ */

// make an IIFE that is captured by a global api variable
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/william';

  // create method for getting items
  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
    //   .then(res => res.json())
    //   .then(resJson => console.log(resJson));
    // return Promise.resolve('A successful response!');
  };

  // create method for creating item
  const createItem = function(name) {
    const newItem = JSON.stringify({
      name,
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: { // example used new Headers, but didnt work. why?
        'Content-Type': 'application/json',
      },
      body: newItem
    });
  };

  // create method for updating item
  const updateItem = function(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, { // FORGOT $ for id
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData) // needed to stringify data into JSON
    });
  };

  // create method for deleting item
  const deleteItem = function(id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  };



  return {
    getItems, createItem, updateItem, deleteItem
  };

}());

