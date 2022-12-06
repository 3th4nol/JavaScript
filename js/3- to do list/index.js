let toDoItems = []

let id = 0;

function Add(){

    if(toDoItems.length >= 5){
        return
    }

    let text = document.getElementById("text").value 
    if(text === "") return
    
    id ++
    document.getElementById("text").value = ""

    let MessageData = { id: id,
                        text : text,
                        html : `<div class="flex">
                                <div class="contenant"><h1 class="check">✓</h1><li class="li">${text}</li>
                                <div class="flexend"><div class="bordure"><img src="crayon.png" class="crayon" alt="crayon"></div><button onclick=Delete(${id}) class="button">x</button></div></div>`}       
    
    toDoItems.push(MessageData)
    
    localStorage.setItem('user', JSON.stringify(toDoItems))

    document.getElementById("list").innerHTML = toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")
}


function Delete(id){
    toDoItems.splice(toDoItems.findIndex((messagedata)=> id === messagedata.id), 1)
    document.getElementById("list").innerHTML = toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")
}
let items = localStorage.getItem('user')

if (items !== null){

toDoItems = JSON.parse(items)

document.getElementById("list").innerHTML = toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")
}