const AddButton = ({setRoute}) => {
    return (
        <div className="col-4 butcont ">
            <button className="but" onClick={()=>{setRoute("createtask")}}>Add New Task</button>
        </div>
        




        // <ul class="nav nav-tabs justify-content-end AddButton ">
        //     <li class="nav-item add">
        //         <a class="nav-link active" aria-current="page" href="#">Add New Task</a>
        //     </li>
        //     <li class="nav-item">
        //         <a class="nav-link" href="#">List</a>
        //     </li>
            
        // </ul>
    );
}

export default AddButton;