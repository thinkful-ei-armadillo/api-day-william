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
      headers: { // new Headers didnt work
        'Content-Type': 'application/json',
      },
      body: newItem
    });
  };

  // create method for updating item
  const updateItem = function(id, updateData) {
    return fetch(`${BASE_URL}/items/{id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: updateData
    });
  };

  // create a single findAndUpdate store method
  const findAndUpdate = function(id, newData) {
    
  }



  return {
    getItems, createItem, updateItem
  };

}());

