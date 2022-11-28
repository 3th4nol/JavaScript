let name = document.getElementById("name");
let language = document.getElementById("language");
let btn = document.getElementById("btn");
let response = document.getElementById("response");

let reponse;

name.addEventListener('input', (e) =>{
    console.log(e.target.value)
    let nom = e.target.value;
    nom.replace('${reponse}', response)
})
btn.addEventListener('click', () =>{
    response.innerHTML = '<h1>Votre nom est : ${nom}</h1> <h1>Votre language favoris est : ${reponse}</h1>'

})

let langage = ["al", "la"]

for(let i = 0; i < langage.length ; i++){
    
    let text = "tu es à la " + i + " lettre et son nom est : " + langage[i]
    console.log(text)


}