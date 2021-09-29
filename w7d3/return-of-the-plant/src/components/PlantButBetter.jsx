export default function PlantButBetter(props){
  const {name, type, lightNeeds, lastWatered, wateringInterval, onClick} = props // destructuring

  const currentDate = new Date()
  const lastWateredDate = new Date(lastWatered)

  const timeDifferenceInS = (currentDate.getTime() - lastWateredDate.getTime()) / 1000
  const timeDifferenceInDays = Math.floor(timeDifferenceInS / 86400)

  const color = timeDifferenceInDays < wateringInterval ? "green" : "red"

  return (
    <article style={{color}} className="PlantButBetter" onClick={onClick}>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <p>{lightNeeds}</p>
      <p>{timeDifferenceInDays} days ago + {wateringInterval}</p>
    </article>
  )
}