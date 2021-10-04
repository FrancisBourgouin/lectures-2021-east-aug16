const pantry = {
	apple: { name: "apple", icon: "🍎", price_in_cents: 99 },
	tree: { name: "tree", icon: "🌳", price_in_cents: 1199 },
	chicken: { name: "chicken", icon: "🐔", price_in_cents: 999 },
	fries: { name: "fries", icon: "🍟", price_in_cents: 49 },
	potato: { name: "potato", icon: "🥔", price_in_cents: 9999999 },
};

const somebodysOrder = {
	name: "Tapan",
	order: ["apple", "apple", "potato"],
};

const somebodyElsesOrder = {
	name: "Caitlin",
	order: ["chicken", "chicken", "fries"],
};

const getOrderInformation = (orderData) => {
	// prepare data
	// give the data from the original order object and parse the data from the pantry
	const orderItems = orderData.order.map((item) => pantry[item]);
	const parsedOrder = { ...orderData, order: orderItems };

	return parsedOrder;
};

console.log(getOrderInformation(somebodyElsesOrder));
console.log(getOrderInformation(somebodyElsesOrder));
console.log(getOrderInformation(somebodyElsesOrder));
console.log(getOrderInformation(somebodyElsesOrder));

// JOIN
