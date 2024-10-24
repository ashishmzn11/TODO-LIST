import AddItem1 from "./componet/TodoItem";
import AddTodo from "./componet/AddTodo";
import AppName from "./componet/AppName";
import "./App.css";
import TodoItems from "./componet/TodoItems";
import { useState } from "react";
import WelcomError from "./componet/welcomError";
function App() {
  const [todoitems, settodoitems] = useState([]);
  const onhandalechange = (itemName, itemdueDate) => {
    console.log(`name ${itemName} date ${itemdueDate}`);
    const newtodoitems = [
      ...todoitems,
      { name: itemName, duedate: itemdueDate },
    ];
    settodoitems(newtodoitems);
  };
  const handledelet=(todoitemsname)=>{
const newtodoitems=todoitems.filter((item)=>item.name!==todoitemsname);
settodoitems(newtodoitems);
  }
  return (
 
   <center className="App-contener">
  <AppName />
  <AddTodo onClickbuttion={onhandalechange} />
  {todoitems.length === 0 && <WelcomError />}

  <TodoItems todoitems={todoitems} handledelet={handledelet} />
</center>

  );
}

export default App;
