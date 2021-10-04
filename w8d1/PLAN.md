# Todo list with Weather info

- Todo list items, marked as complete, remove once complete
- Weather widget (City / Temp / Weather)
- api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
- 09fd719b4b698ec0260e424f83378e3d

# Packages

- Sass
- Axios

# Data structure

```jsx
  interface TodoListItem {
    id:Int
    name: String
    description: String
    isComplete: Boolean
    onComplete: Function
    onDelete: Function
  }
```

```jsx
interface TodoList {
	id: TodoListItem;
  markComplete: Function
  deleteTodo: Function
}
```

```jsx
const weatherResponse = {
	coord: {
		lon: -122.08,
		lat: 37.39,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01d",
		},
	],
	base: "stations",
	main: {
		temp: 282.55,
		feels_like: 281.86,
		temp_min: 280.37,
		temp_max: 284.26,
		pressure: 1023,
		humidity: 100,
	},
	visibility: 16093,
	wind: {
		speed: 1.5,
		deg: 350,
	},
	clouds: {
		all: 1,
	},
	dt: 1560350645,
	sys: {
		type: 1,
		id: 5122,
		message: 0.0139,
		country: "US",
		sunrise: 1560343627,
		sunset: 1560396563,
	},
	timezone: -25200,
	id: 420006353,
	name: "Mountain View",
	cod: 200,
};
```

# HTML Structure

- body
  - header
    - title
    - current weather
  - main
    - form
      - input name
      - input description
      - button
    - ul
      - li
        - h1 name
        - p description
        - button mark complete
        - button destruction

# Component Structure

- App
  - Header
    - WeatherWidget
  - TodoForm
  - TodoList
    - TodoListItem

# Steps

- Make the plan & data structures
- Create the react app
- Installed the necessary packages (sass and axios)
- Created dummy components
- Created the structure with dummy components
- Updated the components with their respective HTML
- Fancy up the CSS a little
- Replaced static values with dynamic variables (props inside the component)
- Set a state for dynamic data
- Made helper functions to interact with state (complete, delete, create)
- Refactored with a custom hook
- Added backend functionality (axios in custom hook)
