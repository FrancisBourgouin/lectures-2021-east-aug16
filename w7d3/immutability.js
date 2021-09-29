// Immutability opp. mutable

// Can't change / change values
//
const list = [1, 2, 3, 4, 5];

const pollo = { amountOfCoolness: 9000 };

const polloAfterHelping = { ...pollo };
polloAfterHelping.amountOfCoolness = 9100;

const polloAfterPunching = { ...polloAfterHelping };
polloAfterPunching.amountOfCoolness = 7000;
// console.log(list.pop()); // 5

const polloAfterPublicExcuses = { ...polloAfterPunching };
polloAfterPublicExcuses.amountOfCoolness = 9000;

// console.log(list.pop()); // 4

let bob = 5;
bob = 4;

let bobby = [1];
let bobby2 = bobby;

bobby[0] = 5;

const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1];

const immutablePop = (array) => {
	const tempArray = [...array];
	const poppedValue = tempArray.pop();

	return { arr: tempArray, value: poppedValue };
};

console.log(immutablePop(arr1));
console.log(immutablePop(arr1));
console.log(immutablePop(arr1));
console.log(immutablePop(arr1));
console.log(immutablePop(arr1));
console.log(immutablePop(arr1));
