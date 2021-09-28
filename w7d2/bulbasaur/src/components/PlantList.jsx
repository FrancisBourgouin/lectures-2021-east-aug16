import Plant from "./Plant"
import { plantListData } from '../data/plantData'
import PlantButBetter from "./PlantButBetter"

export default function PlantList(props){
  console.log(plantListData)

  const plantListArray = Object.values(plantListData)

  const parsedPlantList = plantListArray.map(plant => <PlantButBetter key={plant.id} {...plant} />)
  // [<Plant key={plant.id} {...plant} />, <Plant key={plant.id} {...plant} />]
  console.log(parsedPlantList)
  return (
    <main>
      <h1>I AM PLANT LIST</h1>
      {/* <Plant name={plantListData["1"].name} type={plantListData["1"].type}/> */}
      {/* <Plant {...plantListData["1"]}/>
      <Plant {...plantListData["2"]}/> */}
      {parsedPlantList}
    </main>
  )
}