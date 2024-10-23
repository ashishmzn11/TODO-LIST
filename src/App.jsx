import AddItem1 from "./componet/TodoItem";
import AddTodo from "./componet/AddTodo";
import AppName from "./componet/AppName";
import './App.css'
import TodoItems from "./componet/TodoItems";

function App() {
let todoitems=[
{  name:'Buy Milk',duedate:'23/10/2024'},
{  name:'Go to college',duedate:'22/10/2024'},
]
  return (
    <center className="App-contener" >
<AppName/>
<AddTodo/>
<TodoItems todoitems={todoitems}/>


    </center>
  )
}

export default App;
