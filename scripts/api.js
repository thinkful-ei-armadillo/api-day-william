'use strict';
/* global $ */

// make an IIFE that is captured by a global api variable
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/william';
  function getItems() {
    fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(resJson => console.log(resJson));
    return Promise.resolve('A successful response!');
  }

  return {
    getItems
  };
} () );

