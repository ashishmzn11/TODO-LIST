import { useState } from "react";

function AddTodo({onClickbuttion}){
  const [todoName,settodoName]=useState();
  const [dueDate,setdueDate]=useState();
  const onChangename=(event)=>{
    settodoName(event.target.value);
  }
  const onChangeDate=(event)=>{
    setdueDate(event.target.value);
  }
  const handaleButtonclicked=()=>{
    onClickbuttion(todoName,dueDate);
    setdueDate("");
    settodoName("");

  }
  return(
    <div className="container as-contener">
  <div className="row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo" value={todoName} onChange={onChangename}/>
    </div>
    <div className="col-4">
    <input type="date" value={dueDate} onChange={onChangeDate}/>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success as-botton" onClick={handaleButtonclicked}>Add</button>
    </div>
  </div>
</div>
  )
}
export default AddTodo;