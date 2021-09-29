# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

# Data

## Plant

```jsx
  plant {
    id:""
    name:"string",
    type:"string",
    lightNeeds:"string",
    lastWatered:"date string",
    wateringInterval:"number"
  }
```

## Plants

```jsx
  plants {
    id: plant,
    id: plant,
    ...
  }
```

# Mock data

```jsx
  const somePlant = {
    id:"1"
    name:"Aloes vera",
    type:"greasy plant",
    lightNeeds:"full sunny",
    lastWatered:"2021-09-20",
    wateringInterval:15
  }

  const someOtherPlant = {
    id:"2"
    name:"Sunflower",
    type:"too big to be inside an appartment",
    lightNeeds:"full sunny",
    lastWatered:"2021-09-22",
    wateringInterval:5
  }

  const plantList = [somePlant, someOtherPlant]
```

# HTML Structure

- body
- header
  - h1 title
- main
  - h1 title of section
  - article
    - h1 name of plant
    - h2 type
    - p lightneed
    - p lastwatered + interval

# React Components

- App
- PlantList <- plantList array
- Plant <- plant object
