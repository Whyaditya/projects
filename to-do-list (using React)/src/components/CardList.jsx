import Cards from "./Cards";
import { CardL } from "../store/CardL-store";
import { useContext } from "react";


const CardList = ()=>{

    let {cardList,deleteCard} = useContext(CardL);

    return(
        <div className="cards">
            {cardList.map((data)=>(<Cards key={data.id} card={data} deleteCard={deleteCard}/>))}
        </div>
    );
}
export default CardList;