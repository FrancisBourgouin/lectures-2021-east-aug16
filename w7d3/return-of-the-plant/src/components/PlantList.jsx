import Plant from "./Plant"
import PlantButBetter from "./PlantButBetter"

export default function PlantList(props){
  const {plantList, waterPlant} = props

  const plantListArray = Object.values(plantList)

  const parsedPlantList = plantListArray.map(plant => (
    <PlantButBetter key={plant.id} {...plant} onClick={() => waterPlant(plant.id)}/>
  ))
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