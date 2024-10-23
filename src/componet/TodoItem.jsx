function TodoItem({todoName,duedate}) {
  return (
    <div class="container  as-contener">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{duedate}</div>
        <div class="col-2"><button type="button" class="btn btn-danger as-botton">Delete</button></div>
      </div>
    </div>
  );
}
export default TodoItem;
