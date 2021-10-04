import TodoListItem from "./TodoListItem";

export default function TodoList(props){
  const {todos, markComplete, deleteTodo} = props

  const todosArray = todos ? Object.values(todos) : []
  const parsedTodos = todosArray.map(todo => 
    <TodoListItem
      key={todo.id} 
      {...todo} 
      onComplete={() => markComplete(todo.id)}
      onDelete={() => deleteTodo(todo.id)}
    />
  )

  return (
    <ul className="TodoList">
      {parsedTodos}
    </ul>
  )
}