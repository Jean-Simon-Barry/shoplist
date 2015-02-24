'use strict';

//view1 is the main view for now with user input and view on the objects in list.
angular.module('myApp.itemAdder', ['ngRoute'])

.factory('basket', function() {
    var shoppingList = {
	'produceSection':[],
	'meatSection':[]
    };
    var myBasketService = {};

    myBasketService.addItem = function(item, section) {
	//TODO: instead of passing the section as a parameter, 
	//we should look into a database and find which section 
	//the item belongs to and add it to the appropriate list.

	//TODO: if the item isn't recognized, ask which section 
	//it should be in and add it the field/item into the db.

	//TODO: Create new fields in the shoppingList for users who 
	//wish to add sections

	//TODO: handle duplicates. Should increase the quantity 
	//instead of adding to list

	//TODO: add quantity to items in section

	shoppingList[section].push(item);
	
    };
    myBasketService.removeItem = function(item, section) {

	var index  = shoppingList.produceSection.indexOf(item);
	shoppingList[section].splice(index, 1);
	    
    };
    myBasketService.editItem = function(item, section) {

	var index  = shoppingList.produceSection.indexOf(item);
	shoppingList[section].splice(index, 1);
	    
    };
    myBasketService.shoppingList = function() {
        return shoppingList;
    };

    return myBasketService;
});
