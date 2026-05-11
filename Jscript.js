/*const nameChamp = document.getElementById('nameChamp');

const enviarName = document.getElementById("sendName");




async function getIconChamp(){
    console.log("teste");
    console.log(nameChamp.value);

    iconChamp.src = 'https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/'+ nameChamp.value+'.png';
    
}*/


const getTeam = document.getElementById("getTeam");
getTeam.addEventListener("click", singleTeam);

const imgTeam = document.getElementById("imgTeam");

async function singleTeam(){
    const response = await fetch("https://v3.football.api-sports.io/teams?id=33", {
        "method": "GET",
        "headers": {
            "x-apisports-key": "0fc8c78b4a67bec892a0a377c63f9dd1"
        }
    });

    if(!response.ok){
         throw new Error("ERRO BURRO");
         
    }

    const data = await response.json();

    const teamIMG= data.response[0].logo;
    
    imgTeam.src = teamIMG;

}


