import {useState} from 'react'

import PlantList from './components/PlantList';
import PlantForm from './components/PlantForm';

import { plantListData } from './data/plantData'

import './App.css';

function App() {
  const [plantList, setPlantList] = useState(plantListData)
  const [number, setNumber] = useState(0)

  const addPlant = formData => {
    const id = Object.keys(plantList).length + 1
    const today = new Date()
    const lastWatered = today.toDateString()

    const newPlant = {
      id, 
      lastWatered,
      ...formData
    }

    setPlantList({...plantList, [id]:newPlant})
  }

  const waterPlant = (id) => {
    setPlantList(prev => {
      const updatedPlantList = {...prev}
      const updatedPlant = {...plantList[id]}
  
      const today = new Date()
      updatedPlant.lastWatered = today.toDateString()

      return {...updatedPlantList, [id]:updatedPlant}
    })
  }

  const oldWaterPlant = (id) => {
    const updatedPlantList = {...plantList}
    const updatedPlant = {...plantList[id]}

    const today = new Date()
    updatedPlant.lastWatered = today.toDateString()

    setPlantList({...updatedPlantList, [id]:updatedPlant})
  }

  const waterAllPlants = () => {
    for(const key in plantList){
      waterPlant(key)
    }

    // setNumber(number + 5)
    // setNumber(number + 2)
    // setNumber(number + 9)
    // setNumber(number + 5)
    // setNumber(number + 6)

    // setNumber(prev => prev + 2) //pending is 0
    // setNumber(pendingState => pendingState + 6) //pending is 2
    // setNumber(pendingState => pendingState + 7) //pending is  8
    // setNumber(pendingState => pendingState + 1) //pending is 15
    // setNumber(pendingState => pendingState + 9) //pending is 16
    //pending is 25
  }

  return (
    <div className="App">
      <header>
        <h1>Super plant v2 yeah.</h1>
        <button onClick={waterAllPlants}>WATER EVVEEERRRRYYTHING</button>
        <PlantForm onSubmit={addPlant}/>
        <PlantList plantList={plantList} waterPlant={waterPlant}/>
      </header>
    </div>
  );
}

export default App;
