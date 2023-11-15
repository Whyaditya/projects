const notescon = document.querySelector(".notes-c");
const createbtn = document.querySelector(".btn");
// let notes = document.querySelectorAll(".input-box");

function shownotes(){
    notescon.innerHTML = localStorage.getItem("notes");
}

shownotes();

function updates(){
    localStorage.setItem("notes", notescon.innerHTML);
}

//when we click on buttun to create a note we are creating a <p> tag which will be contenteditable so that it will be use to write note and adding img of delete btn also
createbtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    //adding all above element inside the parent div
    notescon.appendChild(inputbox).appendChild(img);
})


notescon.addEventListener("click", function(e){
    //when we click img it will delete the whole <p> tag which is the parent element of img and update the local storage
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updates();
    }
    //when we click anywhere inside the <p> tag we are saving every thing as we type inside the <p>
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        //nt will have each value of notes like a loop of array
        notes.forEach(nt => {
            //onkeyup will be called everytime user press key
            nt.onkeyup = function(){
                updates();
            }
        })
    }
})