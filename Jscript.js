const nameChamp = document.getElementById('nameChamp');

const enviarName = document.getElementById("sendName");

const iconChamp = document.getElementById("iconChamp");
enviarName.addEventListener("click", getIconChamp);

async function getIconChamp(){
    console.log("teste");
    console.log(nameChamp.value);

    iconChamp.src = 'https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/'+ nameChamp.value+'.png';
    
}


/*const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";*/