const someArray = [1, 2, 3, 4, 5];
const someOtherArray = [...someArray];
someArray.pop();

console.log(someArray, someOtherArray);

const someWeirdArray = [
	[1, 2],
	[3, 4],
];
const someOtherWeirdArray = [];
for (const babyArrays of someWeirdArray) {
	someOtherWeirdArray.push([...babyArrays]);
}
someWeirdArray.pop();
someWeirdArray[0].pop();
console.log(someWeirdArray, someOtherWeirdArray);
