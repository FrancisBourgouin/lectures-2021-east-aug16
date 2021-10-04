export default function TodoListItem(props){
  const {name, description, isComplete, onComplete, onDelete} = props
  return (
    <li className="TodoListItem">
      <h1>{name}</h1>
      <p>{description}</p>
      {!isComplete && <button onClick={onComplete}>Mark as complete</button>}
      {isComplete && <button onClick={onDelete}>DELETE 🤖</button>}
    </li>
  )
}