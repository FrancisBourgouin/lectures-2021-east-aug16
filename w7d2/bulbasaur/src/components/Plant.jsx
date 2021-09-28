export default function Plant(props){
  const {name, type, lightNeeds, lastWatered, wateringInterval} = props // destructuring

  return (
    <article>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <p>{lightNeeds}</p>
      <p>{lastWatered} + {wateringInterval}</p>
    </article>
  )
}