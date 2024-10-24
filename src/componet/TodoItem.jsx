function TodoItem({todoName,duedate,handledelet}) {
  return (
    <div className="container  as-contener">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{duedate}</div>
        <div className="col-2"><button type="button" class="btn btn-danger as-botton" onClick={()=>handledelet(todoName)}>Delete</button></div>
      </div>
    </div>
  );
}
export default TodoItem;
