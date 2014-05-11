// U3.W8-9: 


// I worked on this challenge [by myself, with: ].

// 2. Pseudocode

// Convert the ruby code to JavaScript.

// 3. Initial Solution

/*
var grocerylist = {};
list = [];

var add = function(item) {
list.push(item);
};

var remove = function(item) {
delete list.item;
};

var display = function() {
console.log(list);
};

var empty = function() {
 list = [];
};

var item_numbers = function() {
	list.length;
};
*/

// 4. Refactored Solution

var grocerylist = {};
list = [];

var add = function(item) {
list.push(item);
};

var remove = function(item) {
delete list.item;
};

var display = function() {
console.log(list);
};

var empty = function() {
 list = [];
};

var item_numbers = function() {
	list.length;
};


// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

list = ["Milk", "Bread", "Fruits"];
console.log(grocerylist.item_numbers) === 3;
console.log(grocerylist.add("Cereal")) === ["Milk", "Bread", "Fruits", "Cereal"];
console.log(grocerylist.remove("Bread")) === ["Milk", "Fruits", "Cereal"];


// 5. Reflection 

// I just don't remember how to run a JavaScript file in the terminal