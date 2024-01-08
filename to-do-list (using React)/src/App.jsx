import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import AddButton from './components/AddButton'
import CreateTask from './components/CreateTask'
import CardList from './components/CardList'
import { useReducer, useState } from 'react'
import { CardL } from './store/CardL-store'

const cardReducer = (currValue,active)=>{
  let newCard = currValue;
  if(active.type === 'ADD_CARD'){
    newCard = [active.payload,...currValue];
    
  } else if(active.type == 'DELETE_CARD'){
    newCard = currValue.filter((card)=>card.id !== active.payload.cardId);
  }
  return newCard;
  
}

function App() {

 

  let [route,setRoute] = useState("home");


  const DEFAULT_DATA = [{
    id: Math.floor(Math.random() * 100),
    title: "study",
    content: "i have to do fullstack this month",
    date: "31-1-24",
    lastUpdate: "8-1-24"
  }]


  let[cardList,dispatchcardList]=useReducer(cardReducer,DEFAULT_DATA);


  const addCard = (cardId,cardTitle,cardBody,cardDate,cardLastUpdate)=>{
    dispatchcardList({
      type: 'ADD_CARD',
      payload: {
        id: cardId,
        title: cardTitle,
        content: cardBody,
        date: cardDate,
        lastUpdate:cardLastUpdate
      }
    });
  }

  const deleteCard = (id)=>{
    dispatchcardList({
      type: 'DELETE_CARD',
      payload : {
        cardId: id
      }
    });
  }

  

  return (
    <div className='conatiner'>
     <div className="row">
      <div className="col-8 mt-5" >
        <CardL.Provider value={
          {cardList,
          addCard,
          deleteCard}}>

        <Heading></Heading>
        <AddButton setRoute={setRoute}></AddButton>
        {route === "home" ?   <CardList></CardList> : <CreateTask setRoute={setRoute}></CreateTask>}
       
       
        </CardL.Provider>

        
      </div>
     </div>
    </div>
  )

 
  
}

export default App
