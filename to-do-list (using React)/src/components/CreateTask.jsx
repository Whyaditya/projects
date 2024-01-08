import { FaArrowLeft } from "react-icons/fa";
import { CardL } from "../store/CardL-store";
import { useContext, useRef } from "react";


const CreateTask = ({ setRoute }) => {

    const da = new Date();
    const date = da.getDate();
    const year = da.getFullYear();

    const month = ['Jan', 'Feb', 'March', 'Apr', 'may', 'June', 'july', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const m = da.getMonth();

    let { addCard } = useContext(CardL);

    let titleElement = useRef();
    let contentElement = useRef();
    let dateElement = useRef();

    const HandleAdd = (event) => {
        event.preventDefault()

        let cardId = Math.floor(Math.random() * 100);
        let cardTitle = titleElement.current.value;
        let cardBody = contentElement.current.value;
        let cardDate = dateElement.current.value;
        let cardLastUpdate = `${date}-${month[m]}-${year}`;

        titleElement.current.value = "";
        contentElement.current.value = "";
        dateElement.current.value = "";

        addCard(cardId, cardTitle, cardBody, cardDate, cardLastUpdate);

    }



    return (
        <div className="row" >

            <div className="col-1  ">
                <button className="back" onClick={() => { setRoute("home") }}><FaArrowLeft /></button>
            </div>

            <div className="col-3 mt-5 ms-5  quote">
                <h4>- first step towards success is by planning your days</h4>
            </div>

            <div className="col-5 createtask mt-5 ">
                <form className="create " onSubmit={HandleAdd}>
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">New Task</label>
                        <input type="text" ref={titleElement} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter title" />
                    </div>

                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">Date</label>
                        <input type="date" ref={dateElement} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter date" />
                    </div>


                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">detail</label>
                        <textarea type="text" ref={contentElement} class="form-control" id="exampleInputPassword1" placeholder="enter task description" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
}

export default CreateTask;