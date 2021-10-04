
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import useTodos from './hooks/useTodos';

import {someTodos} from './data/exampleTodos';
import './App.scss';

function App() {
  const { todos, completeTodo, deleteTodo, createTodo } = useTodos()
  return (
    <div className="App">
      <Header />
      <main>
        <TodoForm onSubmit={createTodo}/>
        <TodoList todos={todos} markComplete={completeTodo} deleteTodo={deleteTodo}/>
      </main>
    </div>
  );
}

export default App;
