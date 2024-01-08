import { MdDelete } from "react-icons/md";

const Cards = ({ card,deleteCard }) => {
    return (
        <div class="col-4 me-5 ms-5  card mb-3 mt-3 bg-warning" style={{ width: "540px;" }}>
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{card.title}</h5>
                        <p class="card-text">{card.content}</p>
                        <p class="card-text">Due Date : {card.date}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated {card.lastUpdate}</small></p>
                    </div>
                </div>
            </div>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delbut" onClick={()=>(deleteCard(card.id))} >
            <MdDelete />
                <span class="visually-hidden">data</span>
            </span>
        </div>
    );
}

export default Cards;