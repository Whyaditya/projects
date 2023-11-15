const inputbox = document.getElementById('input-box');
const listc = document.getElementById('list-c');

function addtask(){
    if(inputbox.value === ''){
        alert("you miust write something!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listc.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value = "";
    savedata()
}


listc.addEventListener("click", function(e){
    //when we click on li we use classlist to toggle the checked class css to li
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    //"name", item to be store
    localStorage.setItem("data", listc.innerHTML);
}

function showtask(){
    listc.innerHTML = localStorage.getItem("data");
}

showtask();