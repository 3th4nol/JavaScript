let operation 

function a(id) {

    
    operation = id
    

}
function resultat(){

   let somme      

   let opeUn = parseInt(document.getElementById("opeUn").value);
   let opeDeux = parseInt(document.getElementById("opeDeux").value);
   let hUn = document.getElementById("hUn");

   if(operation === "addition"){
    somme = opeUn +  opeDeux;
}
if (operation === "soustraction"){
    somme = opeUn - opeDeux
} 
if (operation === "multiplication"){
    somme = opeUn * opeDeux
}
if (operation === "division"){
    somme = opeUn / opeDeux
}
if (operation === "carre"){
    somme = Math.sqrt(opeUn) || Math.sqrt(opeDeux)
}

   if(somme === 42){
    hUn.innerHTML = somme + " :)";
   }else   if(opeUn === 40 && opeDeux === 12 && operation === "addition"){
    hUn.innerHTML = "quarante-douze"
   }else{
    hUn.innerHTML = somme
   }
}