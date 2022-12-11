let toDoItems = []

let id = 0;

let MessageData = {}

let list = document.getElementById("list")

function Add(){

    if(toDoItems.length >= 5){
        return
    }
    let text = document.getElementById("text").value 

    if(text === "") return

    MessageData = { 
        id: id,
        text : text,
        html : `<div class="flex" onclick=click() id="${id}"><div class="contenant"><h1 class="check">✓</h1><li class="li" id=${id} >${text}</li>
                <div class="flexend"><div class="bordure"><img src="crayon.png" class="crayon" alt="crayon"></div><button onclick=Delete(${id}) class="button">x</button></div></div>`}       
    

                
    
    document.getElementById("text").value = ""

    toDoItems.push(MessageData)
    
    localStorage.setItem('user', JSON.stringify(toDoItems))

    list.insertAdjacentHTML('afterbegin', MessageData.html) 
    
    toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")
        
    id ++

    for(let flexOne of flex){
        flexOne.addEventListener('mouseenter', () =>{
            flexOne.style.backgroundColor = "rgb(220,220,220)"
        })
        flexOne.addEventListener('mouseleave', () =>{
            flexOne.style.backgroundColor = "white"
    
        }) 
        for(let checkOne of check){
            flexOne.addEventListener('mouseenter', () =>{
                checkOne.style.display = "block"
            })
            flexOne.addEventListener('mouseleave', () =>{
                checkOne.style.display = "none"
        
            }) 
            }
        }
}
function Delete(id) {
    toDoItems.splice(toDoItems[id],1)
    let child = document.getElementById(id)
    list.removeChild(child)

}
let items = localStorage.getItem('user')


if (items !== null){
    for (id = 0; id <= toDoItems.length; id ++){
        toDoItems = JSON.parse(items)
        let parsed = toDoItems[id]?.html
        if (parsed !== undefined){
            list.insertAdjacentHTML('afterbegin', parsed)
            toDoItems.reduce((total, toDoItem) => total + toDoItem.html, "")
        }
    }
}
// id = items.length
let check = document.getElementsByClassName("check")
let lala = document.getElementsByClassName("li")



    let flex = document.getElementsByClassName("flex") 

    for(let flexOne of flex){
        flexOne.addEventListener('mouseenter', () =>{
            flexOne.style.backgroundColor = "rgb(220,220,220)"
        })
        flexOne.addEventListener('mouseleave', () =>{
            flexOne.style.backgroundColor = "white"

        }) 
        
            for(let checkOne of check){
                flexOne.addEventListener('mouseenter', () =>{
                    checkOne.style.display = "block"
                })
                flexOne.addEventListener('mouseleave', () =>{
                    checkOne.style.display = "none"
            
                }) 
                
            } 
        }
       
