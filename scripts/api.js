'use strict';
/* global $ */

// make an IIFE that is captured by a global api variable
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/william';

  // function for getItems
  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
    //   .then(res => res.json())
    //   .then(resJson => console.log(resJson));
    // return Promise.resolve('A successful response!');
  };

  // function for createItem
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


  return {
    getItems, createItem
  };

}());

