const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Añadir() {
    let inputValue = inputBox.value.trim();
    
    if (inputValue === '') {
        alert("¿Vas a añadir a la nada?");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = ""
}

function añadirConEnter(event) {
    if (event.key === 'Enter') {
        Añadir();
    }
}

inputBox.addEventListener("keypress", añadirConEnter);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }

}, false);


