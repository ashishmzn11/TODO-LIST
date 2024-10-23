import TodoItem from "./TodoItem";

function TodoItems({todoitems}){
  return(<div className="item-contener">
    {
      todoitems.map((item)=><TodoItem todoName={item.name} duedate={item.duedate}/>)
    }
    
    </div>)
}
export default TodoItems;