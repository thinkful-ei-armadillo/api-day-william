/* global Item */
'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const addItem = function(item) {
    this.items.push(item);
  };

  // removed all current logic and change the signature to accept only an item parameter
  // (function(){
  //   const addItem = function(name) {
  //     try {
  //       Item.validateName(name);
  //       this.items.push(Item.create(name));
  //     } catch(e) {
  //       console.log(e.message);
  //     }
  //   };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  // Step 7: remove findAndToggleChecked
  // const findAndToggleChecked = function(id) {
  //   const item = this.findById(id);
  //   item.checked = !item.checked;
  // };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  // Step 7: remove findAndUpdateName
  // const findAndUpdateName = function(id, name) {
  //   try {
  //     Item.validateName(name);
  //     const item = this.findById(id);
  //     item.name = name;
  //   } catch(e) {
  //     console.log('Cannot update name: ' + e.message);
  //   }
  // };

  
  // Step 7: Create a consolidated findAndUpdate method
  const findAndUpdate = function(id, newData) {
    const item = this.findById(id);
    Object.assign(item, newData);
  };



  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate, // added consolidated method
    addItem,
    findById,
    // findAndToggleChecked,
    findAndDelete,
    // findAndUpdateName,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
