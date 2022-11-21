let i 

let toDoItem = `<div class="flex">
<div class="contenant"><h1 class="check">✓</h1><li class="li">$[text]</li>
<div class="flexend"><div class="bordure"><img src="crayon.png" class="crayon" alt="crayon"></div><button onclick=supprimer() class="button">x</button></div>
</div>`


function add(){
    let text = document.getElementById("text").value 
        document.getElementById("list").innerHTML = toDoItem.replace("$[text]", text) + document.getElementById("list").innerHTML 

    
}
function supprimer(){

    let btn = document.getElementsByClassName("button");
    
    
}

