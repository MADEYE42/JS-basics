let items = [];
const itemsDiv = document.getElementById("items");
const input = document.getElementById("input");
const storageKey = "items";

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
        renderItems()
}
function renderItems(){
    itemsDiv.innerHTML = null;
    for(let i =0 ;i<items.length;i++){
        const container = document.createElement("div")
        container.style.marginBottom = "10px";
        

        const text = document.createElement("p")
        text.textContent = items[i];
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.style.fontSize = "20px"

        const button = document.createElement("button");
        button.textContent = "Delete"
        button.onclick = () => removeItems(i)
        button.style.padding = "10px"
        container.appendChild(text)        
        container.appendChild(button)

        itemsDiv.appendChild(container);
    }

}
renderItems()
function saveItems(){
    const stringIems = JSON.stringify(items);
    localStorage.setItem(storageKey,stringIems)

}
function addItems(){
    const value = input.value;
    if(!value){
        alert("Blank space cannot be an item")
        return
    }
    items.push(value)
    renderItems();
    saveItems()
}
function removeItems(idx){
    items.splice(idx,1)
    renderItems()
    saveItems()
}
document.addEventListener("DOMContentLoaded",loadItems)