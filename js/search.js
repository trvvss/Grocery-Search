//variable that will show what we have in stock

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];

//variable to hold the user's search
var search;

//function to print the paragraph to the webpage

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
	search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
	
	search = search.toLowerCase();
	if ( search === 'quit' ){
		break;
	}  else if ( search === 'list' ){
		print( inStock.join(', ') );
	} else {
		if ( inStock.indexOf( search ) > -1 ) {
			print ( "Yes, we have " + search + " in the store");
		} else {
			print ( search + " is not in stock.");
		}
	}
}