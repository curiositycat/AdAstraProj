document.write("Thank you for shopping with the Garden of Eden. Your total is  $")

var shoppingCart = []

function addItem(item) {
	shoppingCart.push(item)
}

function cartTotal() {
	var cartTotal = 0
	shoppingCart.forEach(function(item) {
		cartTotal += item.price
	})

	return cartTotal
}

var petunia = {
	name: "Pretty Petunia",
	price: 4
}

var redRose = {
	name: "Red Beauty Rose",
	price: 24
}

var sunflower = {
	name: "King Sunflower",
	price: 8
}

var strawberry = {
	name: "Wild Strawberry",
	price: 6
}



addItem(sunflower)
addItem(strawberry)

document.write(cartTotal())

//test to see if total is accurate. cartTotal shoud be 14



if(cartTotal() === 14) {
	console.log("Purchase total is correct")
}
else {
	console.log("Mathmatical error encountered")
}