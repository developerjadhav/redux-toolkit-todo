import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import ToDos from './components/Todos/Todos'

function App() {
  return (
    <>
      <h1>Your Own ToDo Lists..</h1>
      <AddTodo></AddTodo>
      <ToDos></ToDos>
    </>
  )
}

export default App