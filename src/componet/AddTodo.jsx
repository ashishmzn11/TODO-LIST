
function AddTodo(){
  return(
    <div className="container as-contener">
  <div className="row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo"/>
    </div>
    <div className="col-4">
    <input type="date"/>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success as-botton">Add</button>
    </div>
  </div>
</div>
  )
}
export default AddTodo;