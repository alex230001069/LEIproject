/*const nameChamp = document.getElementById('nameChamp');

const enviarName = document.getElementById("sendName");




async function getIconChamp(){
    console.log("teste");
    console.log(nameChamp.value);

    iconChamp.src = 'https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/'+ nameChamp.value+'.png';
    
}*/


const getTeam = document.getElementById("getTeam");
getTeam.addEventListener("click", randomTeam);

const imgTeam = document.getElementById("imgTeam");

function randomTeam(){
    const idTeam = getRandomInt(60);
    singleTeam(idTeam);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Opções menu burguer
function moreOptions(){
    
    if(document.getElementById("menuBurguer").hidden==true){
        document.getElementById("menuBurguer").hidden=false;
        document.getElementById("burguer").style.border="0px";
    }else{
        document.getElementById("burguer").style.border="2px solid blue";
        document.getElementById("menuBurguer").hidden=true;
    }
}

async function singleTeam(idTeam){
    const response = await fetch(`https://v3.football.api-sports.io/teams?id=${idTeam}`, {
        "method": "GET",
        "headers": {
            "x-apisports-key": "0fc8c78b4a67bec892a0a377c63f9dd1"
        }
    });

    if(!response.ok){
         throw new Error("ERRO BURRO");
         
    }

    const data = await response.json();

    const team= data.response[0];
    
    console.log(data);

    imgTeam.src=data.response[0].team.logo;
    

}
