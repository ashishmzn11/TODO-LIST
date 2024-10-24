import TodoItem from "./TodoItem";

function TodoItems({todoitems,handledelet}){
  return(<div className="item-contener">
    {
      todoitems.map((item)=><TodoItem todoName={item.name} duedate={item.duedate} handledelet={handledelet}/>)
    }
    
    </div>)
}
export default TodoItems;