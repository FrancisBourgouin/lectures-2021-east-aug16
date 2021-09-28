import { storiesOf } from "@storybook/react";
import PlantButBetter from "../components/PlantButBetter";

const wellWateredPlant = {
	id: "1",
	name: "Aloes vera",
	type: "greasy plant",
	lightNeeds: "full sunny",
	lastWatered: "2021-09-20",
	wateringInterval: 15,
};
const badlyWateredPlant = {
	id: "1",
	name: "Aloes vera",
	type: "greasy plant",
	lightNeeds: "full sunny",
	lastWatered: "2021-07-20",
	wateringInterval: 15,
};
storiesOf("Plant but better", module)
	.add("Well watered", () => <PlantButBetter {...wellWateredPlant} />)
	.add("Badly watered", () => <PlantButBetter {...badlyWateredPlant} />);
