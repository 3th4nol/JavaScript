let toDoItems = []


let id = 0; // là faut que ce soit pas 0 mais la valeur du localStorage pour que les ids continuent

// là faut lire ce que t'as dans le localStorage et l'afficher

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
    // Pour la prochaine fois faudra stocker le tableau entier dans un seul truc pour pouvoir mettre d'autres choses qui ont rien a voir dans le localStorage
    localStorage.setItem(MessageData.id, MessageData.text)

    document.getElementById("list").innerHTML = toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")



    }

function Delete(id){
    toDoItems.splice(toDoItems.findIndex((messagedata)=> id === messagedata.id), 1)
    document.getElementById("list").innerHTML = toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")
}



